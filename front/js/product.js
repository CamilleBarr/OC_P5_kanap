fetch('http://localhost:3000/api/products')
//Function "res" permet d'assurer la bonne récupération du fichier:
.then(function(res){        
    if (res.ok){
        return res.json()
    }
})
.then(function(productsId){ // j'appelle le tableau et récupère les données du tableau
    
    console.log (productsId); // je vérifie que le tableau est bien intégré
    
    //const sectionElt = document.getElementById("items"); // la constance correspondra dans le HTML à la section dont l'ID est items
                // je créé une boucle qui dit que chaque Items/objects/product dans le tableau/webapi products 
    for (let product of productsId){ 
                // on vérifie d'abord que les items/objects/product ooient bien récupérés
        console.log (product) ;
                // ralliement des données
                //1. img
                // on créé la variable qui correspondra à l'élément du HTML
        //si je décommente, le nom et description ne s'affiche plus :
        /*
        let imageElt = document.getElementByClassName('item__img');
                // on récupère la valeur dans le json à afficher 
        imageElt.src = product.imageUrl;
        imageElt.alt = product.name;*/
                //2. id Title du produit
        let h3Elt = document.getElementById('title');
                // on va chercher la clé de l'item/object/product que l'on souhaite voir apparaitre
        h3Elt.innerHTML = product.name;
                //3. prix class price
        let priceProduct = document.getElementById('price');
                // on va chercher la clé de l'item/object/product que l'on souhaite voir apparaitre 
        priceProduct.innerHTML = product.price;
        console.log(priceProduct);
                //4. Description
        let description = document.getElementById('description');
        description.innerHTML = product.description;
                
        window.addEventListener("DOMContentLoaded", function(){
    
            const colorsSelect = document.getElementById('colors');
            /*for(var i = 0; i < select.options.length; i++) {
                console.log(select.options[i].label);
              }
            console.log(colorsSelect);
        */
            // 5. Couleurs
                    // on créé la variable qui correspondra à l'élément du HTML
                
                
                let colorsOption1 = document.createElement('option');
                let colorsOption2 = document.createElement('option');
                let colorsOption3 = document.createElement('option');
                
                colorsOption1.innerHTML = products.colors[0];
                colorsOption2.innerHTML = products.colors[1];
                colorsOption3.innerHTML = products.colors[2];
        
                colorsSelect.add(colorsOption1);
                colorsSelect.add(colorsOption2);
                colorsSelect.add(colorsOption3);
                
        }
        )

                // on intègre la variable en tant qu'enfant du parent "a " dans HTML
        //linkElt.appendChild(articleElt);
    };
})

.catch(function(err)
{
})


/*
 //link between the display of all products and the product page itself
 document
   .getElementById("items")
   .addEventListener("click", items);
*/
/*     class productItem {
     constructor (imageUrl, name, altTxt)
         {   this.imageUrl='products[].imgUrl',
             this.name='products[].name',
             this.altTxt='products[].altTxt',
         }
     };
*/