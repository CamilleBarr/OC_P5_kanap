/* 
BUG : 

console.log de totalPrice affiche NAN
console.log de totalQuantity s'affiche à la suite en tant que string pas en tant que nombre
le prix s'affiche en fct de la quantité, mais ne se met pas à jour dans le localStorage
afficher un prix décimal avec 2 chiffres après la virgule
afficher le text couleur plutôt qu'un chiffre

7. je créé un évènement au clic "confirmation" avec localStorage etc.
PARTIE 3
6. je mets des conditions regex au formulaire
PARTIE 2
5. Je créé un calcul sur totalQuantity et totalPrice
4. je créé un évènement au clic "suppression" du produit
4. je créé une condition si doublon de produit
3. je récupère les données de l'API directement pour le prix, src et text image
2. j'affiche le localstorage en fonction du contenu
1. je récupère le localStorage avec lequel je cherche à travailler
PARTIE 1
*/
tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));
console.log(tableauKanap);


//en fonction du retour consolelog faire boucle
//condition, si produit aux caractéristiques similaires = fusionner et additionner la quantité,
//sinon, new cart(kanap)
for (let kanap of tableauKanap) {
  isCart(kanap)
}

//localStorage.setItem('listOfProduct', JSON.stringify(listOfProduct));
//1//
function createHTMLContent(res, kanap) {
  let cartSection = document.getElementById('cart__items');
  let cartArticle = document.createElement('article');

  cartSection.appendChild(cartArticle);
  cartArticle.className = 'cart__item';
  cartArticle.setAttribute('data-id', res.id); // récupéré de l'API
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
  pPrice.innerHTML = ((res.price * parseInt(kanap.quantity)) + ",00 €"); //récupérer le prix du produit de l'API
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
  inputQuantity.min = '1';
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
      //calcNumberByKanap(res, kanap);
      deleteKanap(res, kanap)

    })
    .catch(function (err) {
      console.log("erreur", err)
    })
};



let deleteKanap = (res, kanap) => {
    //je me positionne
    //let deleteButton = document.getElementsByClassName('deleteItem');
    pDelete.addEventListener("click", (e) => {
          e.preventDefault;

          // enregistrer l'id et la couleur séléctionnés par le bouton supprimer
          let deleteId = tableauKanap[i].kanap.id;
          let deleteColor = tableauKanap[i].kanap.color;

          // filtrer l'élément cliqué par le bouton supprimer
          tableauKanap = tableauKanap.filter(kanap => res.id !== deleteId || res.color !== deleteColor);

          // envoyer les nouvelles données dans le localStorage
          localStorage.setItem('cart', JSON.stringify(tableauKanap));

          // avertir de la suppression et recharger la page
          alert('Votre article a bien été supprimé.');

          //Si pas de produits dans le local storage on affiche que le panier est vide
          if (tableauKanap.length === 0) {
            localStorage.clear();
            //const removedItems = tableauKanap.splice(i);
          }
          //Refresh rapide de la page
          location.reload();
        })
      }