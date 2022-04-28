        let cartSection = document.getElementById('cart__items')        
        
        let cartArticle  = document.createElement('article'); 

        cartSection.appendChild(cartArticle);

        cartArticle.data-[id] = (productId)
                //3. img
                // on créé la variable qui correspondra à l'élément du HTML
        let imageElt = document.createElement('img');
                // on récupère la valeur dans le json à afficher 
        imageElt.src = product.imageUrl;
        imageElt.alt = product.name;
                // on intègre la variable en tant qu'enfant du parent "article" dans HTML
        articleElt.appendChild(imageElt); 
                //4. h3 et creation de class
                // on créé la variable qui correspondra à l'élément du HTML
        let h3Elt = document.createElement('h3'); 
                // on va chercher la clé de l'item/object/product que l'on souhaite voir apparaitre
        h3Elt.innerHTML = product.name;
                // on intègre la variable en tant qu'enfant du parent "article" dans HTML 
        articleElt.appendChild(h3Elt); 
                //5. p et creation de class
                // on créé la variable qui correspondra à l'élément du HTML
        let pElt = document.createElement('p');
                // on va chercher la clé de l'item/object/product que l'on souhaite voir apparaitre 
        pElt.innerHTML = product.altTxt;
                 // on intègre la variable en tant qu'enfant du parent "article" dans HTML 
        articleElt.appendChild(pElt); 
