/* 
3. je vérifie le formulaire
2bis. je récupère les données de l'API directement pour prix, image
2. j'affiche le localstorage
1. je récupère le localStorage avec lequel je cherche à travailler
*/

//let myLocalStorageStringify = localStorage.getItem('listOfProduct', JSON.stringify('listOfProduct'));

let tableauKanap = [];
tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));

let kanap = {
  
};

//boucleProduit = (kanap) => {
  if (tableauKanap != null) {
    for (let kanap of tableauKanap){ 
      
    //for (i = 0; i <= myLocalStorageParse.length; i++) {
     cart(kanap)
   }
   
    //console.log(myLocalStorage)
     //tableauKanap = localStorage.getItem('listOfProduct', JSON.stringify('listOfProduct'))
 } else if (tableauKanap = null) {
   alert ("Votre panier est vide.")
}
//}



 



getPrice = () => {
  //let priceId = url.searchParams.get('price');
  //let showPrice = fetch('http://localhost:3000/api/localStorage/') + priceId;
  //let priceKanap = tableauKanap + showPrice + " €";
  console.log(priceKanap)

}

//}
//localStorage.setItem('listOfProduct', JSON.stringify(listOfProduct));


//1//

//let myLocalStorage = localStorage.getItem('listOfProduct');
//let myLocalStorageStringify = localStorage.getItem('listOfProduct', JSON.stringify('listOfProduct'));
//let myLocalStorageParse = JSON.parse(localStorage.getItem('listOfProduct'));
//let i = myLocalStorage.productId;
//let tableauKanap = [0];
//let listOfProduct = tableauKanap;



function cart(productId) {
  //kanap = tableauKanap[i];

  let cartSection = document.getElementById('cart__items');
  let cartArticle = document.createElement('article');

  cartSection.appendChild(cartArticle);
  cartArticle.className = 'cart__item';
  cartArticle.setAttribute('data-id', 'productId._id'); // récupéré de l'API
  cartArticle.setAttribute('data-color', 'kanap.color'); // récupéré de localStorage

  let divImage = document.createElement('div');
  divImage.className = 'cart__item__image';
  cartArticle.appendChild(divImage);

  let imageElt = document.createElement('img');
  imageElt.src = productId.imageURL; // récupérer de l'API
  imageElt.alt = productId.altText; // récupérer de l'API
  divImage.appendChild(imageElt);

  let divContent = document.createElement('div');
  divContent.className = 'cart__item__content';
  cartArticle.appendChild(divContent);

  let description = document.createElement('div');
  description.className = 'cart__item__content__description';
  divContent.appendChild(description);

  let h2Elt = document.createElement('h2');
  h2Elt.innerHTML = productId.name; // récupérer le titre du produit de l'API
  description.appendChild(h2Elt);

  let pColor = document.createElement('p');
  pColor.innerHTML = kanap.color; //récupérer la couleur sélectionnée de localStorage
  description.appendChild(pColor);

  let pPrice = document.createElement('p');
  pPrice.innerHTML = (productId.price + "€"); //récupérer le prix du produit de l'API
  description.appendChild(pPrice);

  let settings = document.createElement('div');
  settings.className = 'cart__item__content__settings';
  divContent.appendChild(settings);

  let settingsQuantity = document.createElement('div');
  settingsQuantity.className = 'cart__item__content__settings__quantity';
  settings.appendChild(settingsQuantity);

  let pQuantity = document.createElement('p');
  settingsQuantity.appendChild(pQuantity);

  let inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.className = 'itemQuantity';
  inputQuantity.name = 'itemQuantity'
  inputQuantity.min = '1';
  inputQuantity.max = '100';
  inputQuantity.value = 'tableauKanap.quantity';
  settingsQuantity.appendChild(inputQuantity);
  inputQuantity.innerHTML = tableauKanap.quantity;

  let settingsDelete = document.createElement('div');
  settingsDelete.className = 'cart__item__content__settings__delete';
  settings.appendChild(settingsDelete);

  let pDelete = document.createElement('p');
  pDelete.className = 'deleteItem';
  settingsDelete.appendChild(pDelete);
  //pDelete.innerHTML = removeFromCart();

 
}

  //for (let kanap of tableauKanap) 
  //for (i=0; i<= myLocalStorage.length; i++) {


/*  ce que je dois créer pour intégrer mes données : 

        <!--  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
        <div class="cart__item__img">
          <img src="../images/product01.jpg" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>Nom du produit</h2>
            <p>Vert</p>
            <p>42,00 €</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article> -->
*/

/*
let removeFromCart = (product) => {

  let minusQuantity = document.getElementsByClassName('deleteItem');
  for (minusQuantity of minusQuantity) {
    itemQuantity.delete(minusQuantity)
  }
  console.log(minusQuantity);

}
*/
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
/* 
for (i=0; i< listOfProduct.length; i++){
    let productOffer = fetch("http:LLlocalhost:3000/api/products/" + tableauKanap[].id)
    .then((res) => {return res.json();})

    let tableauKanap = 
    
}
*/