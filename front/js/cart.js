/* 
BUG : 
si deux produits même ID et que j'en supprime 1, les deux lignes sont supprimées
console.log de totalPrice affiche NAN
console.log de totalQuantity s'affiche à la suite en tant que string pas en tant que nombre
le prix s'affiche en fct de la quantité, mais ne se met pas à jour dans le localStorage 
afficher un prix décimal avec 2 chiffres après la virgule - parseFloat()

7. je créé un évènement au clic "confirmation" avec localStorage etc.
PARTIE 3
6. je mets des conditions regex au formulaire
PARTIE 2
5. Je créé un calcul sur totalQuantity et totalPrice(se fait directement dans create element)
4. je créé un évènement au clic "suppression" du produit - fonctionne le 08/06/22
4. je créé une condition si doublon de produit
3. je récupère les données de l'API directement pour le prix, src et text image // fonctionne
2. j'affiche le localstorage en fonction du contenu / fonctionne
1. je récupère le localStorage avec lequel je cherche à travailler / fonctionne
PARTIE 1
*/
tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));
console.log(tableauKanap);

if (!tableauKanap) {
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
      3. enregistrer localStorage
      */

      let storageQuantity = parseInt(kanap.quantity);
      console.log('storageQuantity : ', storageQuantity);

      let inputQuantityValue = inputQuantity.value;
      inputQuantityValue = e.target.value;
      console.log('localQuantity :', inputQuantityValue);

      let kanapId = res.id;
      let kanapName = kanap.name;

      if (e.target.value > 100 || e.target.value != parseInt(e.target.value)) {
        alert('Merci de sélectionner un nombre entier entre 1 et 100');
        e.target.value = kanap.quantity;
      } else if (e.target.value <= 0) {
        alert("Merci de sélectionner une quantité supérieur à 0 ou supprimer l'article de votre panier")
      } else {
        let findResult = tableauKanap.filter((kanap) => e.target.value !== storageQuantity && e.target.name === kanapName);
        console.log('find', findResult);
        findResult.quantity = inputQuantityValue;
        storageQuantity = findResult.quantity;
        console.log("finalStorage :", storageQuantity);

        //3. j'enregistre dans le localStorage
        localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
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

      // enregistrer l'id et la couleur séléctionnés par le bouton supprimer
      let deleteId = kanap.id;

      let deleteColor = kanap.color;
      console.log('test delete', deleteId, deleteColor);
      // filtrer l'élément cliqué par le bouton supprimer
      tableauKanap = tableauKanap.filter(kanap => tableauKanap.id !== deleteId || tableauKanap.color !== deleteColor);

      // envoyer les nouvelles données dans le localStorage
      localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));

      // avertir de la suppression et recharger la page
      alert('Votre article a bien été supprimé.');

      //Si pas de produits dans le local storage on affiche que le panier est vide
      if (tableauKanap.length === 0) {
        localStorage.clear();
        alert("Il n'y a pas d'article dans votre panier.");
        //const removedItems = tableauKanap.splice(i);
      }
      //Refresh rapide de la page
      location.reload();
    })
  }
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
      //calcTotalKanap(kanap);
      //calcTotalPrice(res, kanap);

    })
    .catch(function (err) {
      console.log("erreur", err)
    })
};

function getForm() {
  let form = document.querySelector(".cart__order__form");

  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
  let charRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
  let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

  getForm();

  //voir comment est crée l'objet contact et bien relire la demande technique
}

/*
let calcTotalKanap = (kanap) => {
  let totalQuantity = document.getElementById('totalQuantity');
  let allKanap = document.getElementsByClassName('itemQuantity').value;
   
  
  //totalQuantity.innerHTML = 
  for (i=0; i < allKanap.length; i++) {
    let allKanap=kanap.quantity;//allKanap = itemQuantity.value;
  //for (let allKanap in TableauKanap) {
      //kanap.forEach(allKanap => {
      //totalQuantity += allKanap.quantity;
      //totalQuantity += allKanap;
     
      totalQuantity.innerHTML = kanap.quantity*kanap;

  };
  console.log(allKanap);
  console.log(totalQuantity);
}
*/