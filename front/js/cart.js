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
    isCart(kanap);


  }
  //localStorage.setItem('listOfProduct', JSON.stringify(listOfProduct));


  function createHTMLContent(res, kanap) {
    let cartSection = document.getElementById('cart__items');
    let cartArticle = document.createElement('article');

    cartSection.appendChild(cartArticle);
    cartArticle.className = 'cart__item';
    cartArticle.setAttribute('data-id', res._id); // récupéré de l'API
    cartArticle.setAttribute('data-color', kanap.color); // récupéré de localStorage

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
    let pPriceValue = (parseFloat(res.price) * parseInt(kanap.quantity));
    pPrice.innerHTML = pPriceValue + ",00 €"; //récupérer le prix du produit de l'API    
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

    let settingsDelete = document.createElement('div');
    settingsDelete.className = 'cart__item__content__settings__delete';
    settings.appendChild(settingsDelete);

    let pDelete = document.createElement('p');
    pDelete.className = 'deleteItem';
    settingsDelete.appendChild(pDelete);
    pDelete.innerHTML = "Supprimer";
  }
}

function changedQuantity(kanap, res) {
  const quantityItem = document.querySelectorAll('.itemQuantity');
  for (let k = 0; k < quantityItem.length; k++) {
    let quantityItemUnit = quantityItem[k];
    let quantityItemID = quantityItemUnit.closest('article').getAttribute("data-id");
    let quantityItemColor = quantityItemUnit.closest('article').getAttribute("data-color");
    //let finalSelection = (quantityItemUnit.value);
    quantityItemUnit.addEventListener('click', function (e) {
      if (localStorage.getItem('listOfProduct')) {
        // permet d'ajouter autant de produit que l'on veut au tableau, si absent, le produit est remplacé par la nouvelle sélection, 
        // soit, on ne peut commander qu'une seule référence

        //tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));
        if (e.target.value > 100 || e.target.value != parseInt(e.target.value)) {
          alert('Merci de sélectionner un nombre entier entre 1 et 100');
          e.target.value = kanap.quantity;
        } else if (e.target.value <= 0) {
          alert("Merci de sélectionner une quantité supérieur à 0 ou de supprimer l'article de votre panier")
          e.target.value = kanap.quantity;
        } else {

          foundProduct = tableauKanap.find(quantityItemUnit => quantityItemID == kanap.id && quantityItemColor == kanap.color);


          e.target.value = kanap.quantity;

          localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));


        }
        window.location.reload();


      }
    })
  }
}

function deleteKanap(kanap) {
  const pDelete = document.querySelectorAll('.deleteItem');
  for (let i = 0; i < pDelete.length; i++) {
    let pDeleteUnit = pDelete[i];
    tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));
    pDeleteUnit.addEventListener("click", () => {

      let deleteId = pDeleteUnit.closest('article').getAttribute('data-id');
      let deleteColor = pDeleteUnit.closest('article').getAttribute('data-color');
      if (localStorage.getItem('listOfProduct')) {
        for (kanap of tableauKanap) {
          findProduct = tableauKanap.filter((kanap) => (deleteId != kanap.id, deleteColor != kanap.color));
          //j'envoie les nouvelles données dans le localStorage
          tableauKanap = findProduct;
          localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
        }
        // j'averti de la suppression et recharger la page
        alert('Votre article a bien été supprimé.');
        window.location.reload();

      }

    })
    /*
                if (productLocalStorage.length == 0) {
                  localStorage.clear(findProduct);
                }*/
  }
}

function totalKanap(res, kanap) {
  //async function updateCartTotal() {

  let quantitySelector = document.getElementsByClassName('itemQuantity');
  let itemAmount = 0;

  for (let i = 0; i < quantitySelector.length; i++) {
    //tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));
    //for (kanap of tableauKanap) {
    itemAmount += quantitySelector[i].valueAsNumber;
  };



  let totalQuantity = document.getElementById("totalQuantity");
  totalQuantity.innerHTML = itemAmount;
  //let priceSelector = document.querySelector('.cart__item__content__description p');
  //console.log("priceSelector :", priceSelector);
  /*
  let priceParent = document.querySelector('.cart__item__content__description');
  console.log("priceParent :", priceParent);
  let priceChildren = priceParent.childNodes;
  console.log("priceChildren :", priceChildren);

  let priceChild0 = (priceChildren[0]).innerHTML;
  console.log("priceChild0:", priceChild0);

  let priceChild2 = (priceChildren[2]).innerHTML;
  console.log("priceChild2:", priceChild2);

  let finalPrice = priceChild2.slice(0, priceChild2.indexOf(','));
  console.log('finalPrice',finalPrice);

  let pPriceValue = 0;

if(priceChild0 === res.name){
  
  let pPriceValue = finalPrice * itemAmount;
  console.log("pPriceValue2 :", pPriceValue);
}


  for (let i = 0; i < quantitySelector.length; i++) {
    let itemId = quantitySelector[i].valueAsNumber;
    //let kanapId = itemAmount.closest('article').getAttribute('data-id');
  };
  const uniqueIds = [];

const unique = tableauKanap.filter(element => {
  const isDuplicate = uniqueIds.includes(priceChild0);

  if (!isDuplicate) {
    uniqueIds.push(element.id);

    return true;
  }

  return false;
});
console.log("unique :", unique);
  //if (quantitySelector.length > 0) {
    let totalPrice =0;
    tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));
    //for (kanap of tableauKanap) {
      //let pPriceValue = finalPrice * parseInt(kanap.quantity);
      //console.log("pPriceValue :", pPriceValue, totalPrice);

      //for ( kanap of tableauKanap) { // On récupère le prix des canapés via l'API

      totalPrice += pPriceValue; // On calcule le prix total du panier
      console.log("totalPrice :", totalPrice);
      //}
    //}
    
    document.querySelector("#totalPrice").innerHTML = totalPrice; // On affiche le prix total
  //}




  /*
    console.log("fullPrice :", fullPrice);
    for (let i = 0; i < quantitySelector.length; i++) {
      fullPrice += (itemAmount * res[i].price);
    }
    console.log("fullPrice 2:", fullPrice);
    let totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = fullPrice;
    */
};
/*
const getCart = () => {
  let cart = localStorage.getItem('cart');
  if(cart == null){
      return [];
  }else{
      return JSON.parse(cart);
  }
}*/


const getCart = () => {
  let cart = localStorage.getItem('cart');
  if (cart == null) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

let totalPrice0 = 0; // Global a passer en tete de js
function totalPrice(res, kanap) {
  let kanapColor = kanap.color;
  let kanapPrice = res.price;
  let kanapId = res._id;

  //let kanapID = kanap[i];


  console.log('kanap', kanap);
  //for (kanap of tableauKanap) {
    let prod = tableauKanap.find(el => res._id === el.id);
    console.log("prod :", prod);
    /*
      let prodPrice = tableauKanap.filter(function (el) {
        return el.id === res._id
      });
      
      console.log("prodPrice :", prodPrice);
     
    } */


    tableauKanap.reduce((unique, kanapId) => {})
    //prodPrice = res.price * kanap.id;
    //console.log("prod.price:", prod.price);
    let totalPriceNew = (parseInt(res.price) * parseInt(kanap.quantity));
    totalPrice0 = totalPrice0 + totalPriceNew;
    console.log("totalPrice0:", totalPrice0);
    //console.log((res.price).reduce((x, y) => x + y));

  //}
  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerHTML =  totalPrice0;
  //return totalPrice;
}
/*
function totalPrice() {
  const cart = getCart()
  let totalPrice0 = 0;
  for(let article of cart){
      let prod = products.find(prod => prod._id === article.productId);
      totalPrice0 += parseInt(prod.price) * parseInt(article.quantity); 
  }
  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerHTML = totalPrice0;
  return totalPrice;
}

*/

function isCart(kanap) {
  fetch('http://localhost:3000/api/products/' + kanap.id)
    .then(function (res) {
      if (res.ok) {
        return res.json()
      }
    })
    .then(function (res) {
      createHTMLContent(res, kanap);
      changedQuantity(res, kanap);
      deleteKanap(kanap);
      totalKanap(res);
      totalPrice(res, kanap);

    })
    .catch(function (err) {
      console.log("erreur :", err)
    })
};

//--------PART 2 : récupération du formulaire

function getForm() {

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
      firstNameErrorMsg.innerHTML = "Veuillez renseigner votre prénom";
    }
  })
  document.getElementById("lastName").addEventListener("change", () => {
    if (otherRegExp.test(lastName.value)) {
      lastNameErrorMsg.innerHTML = "";
    } else {
      lastNameErrorMsg.innerHTML = "Veuillez renseigner votre nom";
    }
  })
  document.getElementById("address").addEventListener("change", () => {
    if (addressRegExp.test(address.value)) {
      addressErrorMsg.innerHTML = "";
    } else {
      addressErrorMsg.innerHTML = "Veuillez préciser le numéro, type de voie et nom de voie";
    }
  })
  document.getElementById("city").addEventListener("change", () => {
    if (otherRegExp.test(city.value)) {
      cityErrorMsg.innerHTML = "";
    } else {
      cityErrorMsg.innerHTML = "Veuillez retirer les accents";
    }
  })
  document.getElementById("email").addEventListener("change", () => {
    if (emailRegExp.test(email.value)) {
      emailErrorMsg.innerHTML = "";
    } else {
      emailErrorMsg.innerHTML = "Veuillez noter l'adresse email selon le standart";
    }
  })
}
getForm();

// ----- PARTIE 3 : SYNTHESE ET VALIDATION DE COMMANDE

function postForm() {

  let form = document.querySelector(".cart__order__form");

  form.addEventListener("submit", (event) => {
    //let order = document.getElementById("order").submit();

    event.preventDefault();

    // "Requête JSON contenant un objet de contact et un tableau de produits"

    let products = [];
    for (kanap of tableauKanap) {
      products.push(kanap.id);
    };

    // "Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs firstName,
    // lastName, address, city et email "

    let contact = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      email: document.getElementById('email').value,
    };

    // "Le tableau des produits envoyé au back-end doit être un
    //array de strings product-ID. Les types de ces champs et leur présence doivent être validés
    //avant l’envoi des données au serveur."

    function orderNumber(min, max) {
      return parseInt(Math.random() * (max - min) + min);
    }
    let orderNo = orderNumber(1, 10000);

    let dataToSend = JSON.stringify({
      "contact": contact,
      "products": products,
      //"orderNo": orderNo,
    });
    console.log(dataToSend);

    fetch("http://localhost:3000/api/products/" + {
        method: 'POST',
        headers: {
          //accept: "application/json",
          "content-type": "application/json",
        },
        body: dataToSend,
        //redirect: 'follow',
        //mode: "cors"})
      })
      .then(res =>
        res.json()
      )
      .then(dataToSend => {
        localStorage.setItem('orderNo', orderNo);
        let order = JSON.parse(localStorage.getItem('orderNo'));
        document.location.href = "./confirmation.html?orderNo=" + order;
      })
      .catch(error => console.log('error', error));
  })
}
postForm()