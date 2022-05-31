/* 
BUG : 
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

let tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));
console.log(tableauKanap);

//en fonction du retour consolelog faire boucle
//condition, si produit aux caractéristiques similaires = fusionner et additionner la quantité,
//sinon, new cart(kanap)
  for (let kanap of tableauKanap) {
    cart(kanap)
  }



//localStorage.setItem('listOfProduct', JSON.stringify(listOfProduct));
//1//
const createHTMLContent = (res, kanap) => {
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
      pPrice.innerHTML = (res.price + ",00 €"); //récupérer le prix du produit de l'API
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
      inputQuantity.name = 'itemQuantity'
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

function cart(kanap) {
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
    })
    .catch(function (err) {
      console.log("erreur", err)
    })
};


/*
  let cart__items = getToCart();
  cart__items = cart__items.filter(p => p.id != product.id);
  saveToCart(cart__items);
*/





// let howManyProduct = productSelected.length;
/*
element.addEventListener("DOMContentLoaded", changeColor() {
  document.querySelector('select[name="color-select"]').onchange = changeEventHandler;
}, false);

element.addEventListener("DOMContentLoaded", changeQuantity() {
  document.querySelector('select[name="itemQuantity"]').onchange = changeEventHandler;
}, false);
*/