        let cartSection = document.getElementById('cart__items')        
        
        let cartArticle  = document.createElement('article'); 

        cartSection.appendChild(cartArticle);
        cartArticle = document.createAttribute('class=cart__item');
        cartArticle.data-id("{product-Id}");
        cartArticle.data-color("{product-color}");

        let imageElt = document.createElement('img');
        imageElt.src = product.imageUrl;
        imageElt.alt = product.name;

        cartArticle.appendChild(imageElt); 
        let h3Elt = document.createElement('h3'); 
               
        h3Elt.innerHTML = product.name;
        articleElt.appendChild(h3Elt); 
        let pElt = document.createElement('p');
               
        pElt.innerHTML = product.altTxt;
                
        articleElt.appendChild(pElt); 
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