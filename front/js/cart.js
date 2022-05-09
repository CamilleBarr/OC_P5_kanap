        let cartSection = document.getElementById('cart__items')
        let cartArticle  = document.createElement('article'); 
        cartSection.appendChild(cartArticle);

        cartArticle.className = 'class=cart__item';
        cartArticle.data-id("{product-Id}");// ajouter un data id à vérifier
        cartArticle.data-color("{product-color}");

        let divImage  = document.createElement('div');
        divImage.className ='cart__item__image';
        cartArticle.appendChild(divImage);

        let imageElt = document.createElement('img');
        imageElt.src = product.imageUrl;
        imageElt.alt = product.name;
        divImage.appendChild(imageElt);
        
        let divContent = document.createElement('div');
        divContent.className ='cart__item__content';
        cartArticle.appendChild(divContent);

        let description = document.createElement('div');
        description.className='cart__item__content__description';
        divContent.appendChild(description);

        let h3Elt = document.createElement('h2'); 
        h2Elt.innerHTML = "kanap " //product.name; // récupérer le titre du produit
        divContentDescription.appendChild(h2Elt); 
        
        let pColor = document.createElement('p');       
        pColor.innerHTML = " kanap 3 places" //product.altTxt;//récupérer la couleur sélectionnée
        divContentDescription.appendChild(pColor); 

        let pPrice = document.createElement('p');       
        pPrice.innerHTML = //product.altTxt;//récupérer le prix du produit
        divContentDescription.appendChild(pPrice); 

        let settings = document.createElement('div');
        settings.className='cart__item__content__settings';
        divContent.appendChild(settings);

        let settingsQuantity = document.createElement('div');
        settingsQuantity.className='cart__item__content__settings__quantity';
        settings.appendChild(settingsQuantity);

        let pQuantity = document.createElement('p');
        settingsQuantity.appendChild(pQuantity);

        let inputQuantity = document.createElement('input');
        inputQuantity.type= 'number';
        inputQuantity.className = 'itemQuantity';
        inputQuantity.name = 'itemQuantity'
        inputQuantity.min = '1';
        inputQuantity.max = '100';
        inputQuantity.value = '42';
        settingsQuantity.appendChild(inputQuantity);

        let settingsDelete = document.createElement('div');
        settingsDelete.className='cart__item__content__settings__delete';
        settings.appendChild(settingsDelete);

        let pDelete = document.createElement('p');
        pDelete.className = 'deleteItem';
        settingsQuantity.appendChild(pDelete);

/*
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

function saveToCart (cart__items) {
  localStorage.setItem('sendToBasket', JSON.stringify(cart__items));
}

function getToCart (){
  let cart__items = localStorage.getItem('cart__items');
  if (cart__items === null){
      return [];
  }else
  return JSON.parse(cart__items); 
  //return JSON.parse(localStorage.getItem('basket'));
}

function addToCart(product){
  let cart__items = getToCart();
  let foundProduct =cart__items.find(p => p.id == product.id);
  if (foundProduct != undefined){
      foundProduct.quantity++
  }
  else{
      product.quantity = 1;
      cart__items.push(product);
  }
  saveToCart(basket);
}

function removeFromCart (product){
  let cart__items = getToCart();
  cart__items = cart__items.filter(p => p.id != product.id);
  saveToCart(cart__items);
}

function changeQuantity(product, quantity){
  let cart__items = getToCart();
  let foundProduct = cart__items.find(p => p.id == product.id);
  if (foundProduct != undefined) {
      foundProduct.quantity += quantity;
      if (foundProduct.quantity <= 0) {
          removeFromCart(foundProduct);
      }else {
          saveToCart(cart__items);
      }
  }
}

function changeColor(product, colorSelect){
  let cart__items = getToCart();
  let foundProduct = cart__items.find(p => p.id == product.id);
  if (foundProduct != undefined) {
      foundProduct.colorSelect += colorSelect;
      if (foundProduct.colorSelect <= 0) {
          removeFromCart(foundProduct);
      }else {
          saveToCart(cart__items);
      }
  }
}

element.addEventListener("DOMContentLoaded", function colorSelect () {
  document.querySelector('select[name="color-select"]').onchange = changeEventHandler;
}, false );

element.addEventListener("DOMContentLoaded", function changeQuantity() {
  document.querySelector('select[name="itemQuantity"]').onchange = changeEventHandler;
}, false );