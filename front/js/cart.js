/* 
A PEAUFINER : 
ouverture de nouvelle page confirmation
ajout produit similaire, 
creuser le formulaire
afficher un prix décimal avec 2 chiffres après la virgule - parseFloat()

BUG : 
totalPrice et totalQuantity ne se mettent pas à jour avec l'input juste utilise le localStorage

9. je créé un évènement au clic "confirmation" qui me renvoit sur une autre page (sans ouvrir de nouvel onglet)
8. suivant demande client : 
je récupère un tableau des ID du produit + le formulaire de contact qui, se retrouvent dans un object à part 'finalOrderId'
7. Je récupère les champs et applique les conditions RegExp
6. je mets des conditions regex au formulaire // OK
PARTIE 2
4. je créé un évènement au clic "suppression" du produit - fonctionne le 08/06/22
4. je créé une condition si doublon de produit
3. je récupère les données de l'API directement pour le prix, src et text image // fonctionne
2. j'affiche le localstorage en fonction du contenu / fonctionne
1. je récupère le localStorage avec lequel je cherche à travailler / fonctionne
PARTIE 1
*/

//----PARTIE 1 : affichage panier

tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));
console.log(tableauKanap);

if (!tableauKanap || tableauKanap == 0) {
  let subtitle1 = document.createElement('h1');
  subtitle1.setAttribute('style', 'text-align:center');
  subtitle1.innerHTML = "est vide."
  cart__items.appendChild(subtitle1);

  let subtitle2 = document.createElement('h2');
  //subtitle.setAttribute("href=index.html")
  subtitle2.setAttribute('style', 'text-align:center');
  subtitle2.innerHTML = "Avez-vous vu notre page d'accueil ?"
  cart__items.appendChild(subtitle2);
}

//en fonction du retour consolelog faire boucle
//condition, si produit aux caractéristiques similaires = fusionner et additionner la quantité,
//sinon, new cart(kanap)
else {
  for (let kanap of tableauKanap) {
    isCart(kanap)
  }
  //localStorage.setItem('listOfProduct', JSON.stringify(listOfProduct));

  function createHTMLContent(res, kanap) {
    let cartSection = document.getElementById('cart__items');
    let cartArticle = document.createElement('article');

    cartSection.appendChild(cartArticle);
    cartArticle.className = 'cart__item';
    cartArticle.setAttribute('data-id', res.id); // récupéré de l'API
    cartArticle.setAttribute('data-color', tableauKanap.color); // récupéré de localStorage

    let divImage = document.createElement('div');
    divImage.className = 'cart__item__img';
    cartArticle.appendChild(divImage);

    let imageElt = document.createElement('img');
    imageElt.src = res.imageUrl; // récupérer de l'API
    imageElt.alt = res.description; // récupérer de l'API
    divImage.appendChild(imageElt);

    let divContent = document.createElement('div');
    divContent.className = 'cart__item__content';
    cartArticle.appendChild(divContent);

    let description = document.createElement('div');
    description.className = 'cart__item__content__description';
    divContent.appendChild(description);

    let h2Elt = document.createElement('h2');
    h2Elt.innerHTML = res.name; // récupérer le titre du produit de l'API
    description.appendChild(h2Elt);

    let pColor = document.createElement('p');
    pColor.textContent = kanap.color; //récupérer la couleur sélectionnée de localStorage
    description.appendChild(pColor);

    let pPrice = document.createElement('p');
    pPrice.innerHTML = ((parseFloat(res.price) * parseInt(kanap.quantity)) + ",00 €"); //récupérer le prix du produit de l'API    
    description.appendChild(pPrice);

    let settings = document.createElement('div');
    settings.className = 'cart__item__content__settings';
    divContent.appendChild(settings);

    let settingsQuantity = document.createElement('div');
    settingsQuantity.className = 'cart__item__content__settings__quantity';
    settings.appendChild(settingsQuantity);

    let pQuantity = document.createElement('p');
    settingsQuantity.appendChild(pQuantity);
    pQuantity.innerHTML = "Qté : ";

    let inputQuantity = document.createElement('input');
    inputQuantity.type = 'number';
    inputQuantity.className = 'itemQuantity';
    inputQuantity.name = 'itemQuantity';
    inputQuantity.setAttribute('min', '1');
    inputQuantity.max = '100';
    inputQuantity.value = kanap.quantity;
    settingsQuantity.appendChild(inputQuantity);

    inputQuantity.addEventListener("change", (e) => {
      e.preventDefault();
      /*
      0/ préciser dans le name + ID du produit
      1. récupère tableauKanap
      2. findIndex (à la place de find pour récupérer l'index du tableau VS ID du produit avec e.target.name. On recherche l'index grâce à l'ID)  tableauKanap[indexTrouvé].quantity = e.target.value 
      2bis. e.target.name donne l'ID e.target.value (pour la quantité)
      
      */

      let storageQuantity = parseInt(kanap.quantity);
      console.log('storageQuantity : ', storageQuantity);

      let inputQuantityValue = inputQuantity.value;
      inputQuantityValue = e.target.value;
      console.log('localQuantity :', inputQuantityValue);

      let kanapName = kanap.name;

      //2. Conditions d'enregistrement dans le localStorage et si remplies, 
      //on recherche le produit qui a le même nom et une valeur différente,
      //on défini alors que la valeur du localStorage sera celle du target / input.

      if (e.target.value > 100 || e.target.value != parseInt(e.target.value)) {
        alert('Merci de sélectionner un nombre entier entre 1 et 100');
        e.target.value = kanap.quantity;
      } else if (e.target.value <= 0) {
        alert("Merci de sélectionner une quantité supérieur à 0 ou supprimer l'article de votre panier")
        e.target.value = kanap.quantity;
      } else {
        let findResult = tableauKanap.filter((kanap) => e.target.value !== storageQuantity && e.target.name === kanapName);
        console.log('find', findResult);
        findResult.quantity = inputQuantityValue;
        storageQuantity = findResult.quantity;
        console.log("finalStorage :", storageQuantity);

        //3. j'enregistre dans le localStorage
        localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
        pPrice.innerHTML = ((parseFloat(res.price) * parseInt(e.target.value)) + ",00 €");
      }
    })

    let settingsDelete = document.createElement('div');
    settingsDelete.className = 'cart__item__content__settings__delete';
    settings.appendChild(settingsDelete);

    let pDelete = document.createElement('p');
    pDelete.className = 'deleteItem';
    settingsDelete.appendChild(pDelete);
    pDelete.innerHTML = "Supprimer";

    pDelete.addEventListener("click", (e) => {
      e.preventDefault;
      let deleteId = kanap.id;
      let deleteColor = kanap.color;

      // j'enregistre l'id et la couleur séléctionnées par le bouton "supprimer"
      //console.log('test delete', );
      // je filtre l'élément cliqué par le bouton supprimer

      let findProduct = tableauKanap.findIndex(kanap => kanap.id == deleteId && kanap.color == deleteColor);
      console.log("find product result :", findProduct);

      tableauKanap.splice(findProduct, 1);
      console.log("find Product pop result :", findProduct);

      //j'envoie les nouvelles données dans le localStorage
      localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));

      // j'averti de la suppression et recharger la page
      alert('Votre article a bien été supprimé.');
      window.location.reload();
      if (productLocalStorage.length === 0) {
        localStorage.clear();
      }
    })
  }
}

function totalKanap(res) {

  let quantitySelector = document.querySelectorAll(".itemQuantity");
  let itemAmount = 0;
  for (let i = 0; i < quantitySelector.length; i++) {
    itemAmount += parseInt(quantitySelector[i].value);
  }

  let totalQuantity = document.getElementById("totalQuantity");
  totalQuantity.innerHTML = itemAmount;

  //let priceSelector = document.querySelectroAll(".cart__item__content__description:nth-child(2)");

//  let priceSelector = document.querySelectorAll(".cart__item__content__description");
 // console.log("priceSelector :", priceSelector);
 // let priceChildSelector = priceSelector.querySelectorAll('p:nth-child(2');
  //console.log("priceChildSelector :", priceSelectorAll);

//  var mainDiv = document.getElementsByClassName('cart__item__content__description'),
//  childDiv = mainDiv.getElementsByTagName('p')[0],
//  requiredDiv = childDiv.getElementsByTagName('p')[1];


  let price = 0;
  for (let i = 0; i < quantitySelector.length; i++) {
    price += itemAmount*(parseInt(res.price));
    console.log("price :", price);
  }

  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerHTML = price;
}


function isCart(kanap) {
  console.log('kanap', kanap);
  fetch('http://localhost:3000/api/products/' + kanap.id)
    .then(function (res) {
      if (res.ok) {
        console.log('res', res);
        return res.json()
      }
    })
    .then(function (res) {
      createHTMLContent(res, kanap);
      totalKanap(res, kanap);

    })
    .catch(function (err) {
      console.log("erreur", err)
    })
};

//--------PART 2 : traitement du formulaire

let otherRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
let addressRegExp = new RegExp("^[0-9]{1,4}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

let firstNameErrorMsg = document.querySelector("#firstNameErrorMsg");
let lastNameErrorMsg = document.querySelector("#lastNameErrorMsg");
let addressErrorMsg = document.querySelector("#addressErrorMsg");
let cityErrorMsg = document.querySelector("#cityErrorMsg");
let emailErrorMsg = document.querySelector("#emailErrorMsg");

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

document.getElementById("firstName").addEventListener("change", () => {
  if (otherRegExp.test(firstName.value)) {
    firstNameErrorMsg.innerHTML = "";
  } else {
    firstNameErrorMsg.innerHTML = "Veuillez noter le prénom au format indiqué";
  }
})
document.getElementById("lastName").addEventListener("change", () => {
  if (otherRegExp.test(lastName.value)) {
    lastNameErrorMsg.innerHTML = "";
  } else {
    lastNameErrorMsg.innerHTML = "Veuillez notre le nom au format indiqué";
  }
})
document.getElementById("address").addEventListener("change", () => {
  if (addressRegExp.test(address.value)) {
    addressErrorMsg.innerHTML = "";
  } else {
    addressErrorMsg.innerHTML = "Veuillez noter l'adresse au format indiqué";
  }
})
document.getElementById("city").addEventListener("change", () => {
  if (otherRegExp.test(city.value)) {
    cityErrorMsg.innerHTML = "";
  } else {
    cityErrorMsg.innerHTML = "Veuillez noter la ville au format indiqué";
  }
})
document.getElementById("email").addEventListener("change", () => {
  if (emailRegExp.test(email.value)) {
    emailErrorMsg.innerHTML = "";
  } else {
    emailErrorMsg.innerHTML = "Veuillez noter l'adresse email au format indiqué";
  }
})

// ----- PARTIE 3 : SYNTHESE ET VALIDATION DE COMMANDE



function getForm() {
  let orderButton = document.getElementById("order");
  let form = document.querySelector(".cart__order__form");
  let product_ID = [];

  form.addEventListener("submit", (event) => {
    //submit est mieux, comportement natif , compatible focus, améliore accessibilité
    //vérifier 
    event.preventDefault();
    let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    };

    for (kanap of tableauKanap) {
      product_ID.push(kanap.id);
    };

    let dataToSend = {
      contact,
      product_ID
    };

    fetch("http://localhost:3000/api/products/order", {
        method: 'POST',
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        mode: "cors",
        body: dataToSend
      })
      .then(resp => resp.json())
      .then(data => {
        document.location.href = "./confirmation.html?" +
          data.orderId;
      })

  })
}
getForm()