let url = new URL (location.href);
let productId = url.searchParams.get('productId');
console.log(productId);

fetch('http://localhost:3000/api/products/' + productId )
//Function "res" permet d'assurer la bonne récupération du fichier:
.then(function(res){        
    if (res.ok){
        return res.json()
    }
})
.then(function(products){ // j'appelle le tableau et récupère les données du tableau
    
    console.log (products); // je vérifie que le tableau est bien intégré
                // je créé une boucle qui dit que chaque Items/objects/product dans le tableau/webapi products 
    for (let product of products){ 
                // on vérifie d'abord que les items/objects/product ooient bien récupérés
        console.log (product) 
                // ralliement des données
                //1. img
                // on créé la variable qui correspondra à l'élément du HTML
        
        //si je décommente, le nom et description ne s'affiche plus :

        let imageProduct = document.createElement('img');
 
                // on récupère la valeur dans le json à afficher 
        imageProduct.src = product.imageUrl;
        imageProduct.alt = product.name;

        let itemImg = document.getElementByClassName ('item__img');
        // on intègre la variable en tant qu'enfant du parent "article" dans HTML
        itemImg.appendChild(imageProduct);

        
        
                //2. ID Title du produit
        let h3Elt = document.getElementById('title');
                // on va chercher la clé de l'item/object/product que l'on souhaite voir apparaitre
        h3Elt.innerHTML = product.name;
                //3. prix ID price
        let priceProduct = document.getElementById('price');
                // on va chercher la clé de l'item/object/product que l'on souhaite voir apparaitre 
        priceProduct.innerHTML = product.price;
        console.log(priceProduct);
                //4. Description
        let description = document.getElementById('description');
        description.innerHTML = product.description;
             // 5. Couleurs
                    // on créé la variable qui correspondra à l'élément du HTML
        /*
                    let productsColors = document.getElementsByName('value');
                    productsColors = products.colors;
         for (let productsColors=0; productsColors < select.options.lenght; productsColors++) {
         
         console.log(select.options[productsColors].label);
         }
        */  
         
                /*
                'option' déjà existant, pas besoin de recréer
                let colorOption = document.createElement('option');   

                colors.appendChild(colorOption);
                */

                

                let colorValue = document.createAttribute('value');

                

                //let colorOption1.value = document.getElementByTagName('option').value[0];
                let colorOption = document.getElementByTagName("option")[0];
                colorOption.setAttributeNode(colorValue);
                colorValue.value = products.colors;
                colorOption = new 

                // option 1 : nommer les options une par une
                //option 2 : faire une boucle if (value !== false) console.log(value) else consol.log (null)
        

                



                //let Value = select.options[products.colors].value;

/*
                colorOption.value = products.colors[''];
                colorOption.value = new products.colors[0];
                colorOption.value = new products.colors[1];
                colorOption.value = new products.colors[2];
*/

/*
colorOption.innerHTML.value = new products.colors[0];
colorOption.innerHTML.value = new products.colors[1];
colorOption.innerHTML.value = new products.colors[2];
*/
                //console.log(colorOption);

                
                


                
               
            /*    
             
                colorsSelect.add(colorsOption1);
                colorsSelect.add(colorsOption2);
                colorsSelect.add(colorsOption3);
                */
        document.addEventListener("DOMContentLoaded", function(){
            document.querySelector('select[name="color-select"]').onchange=changeEventHandler;
        }, false);

        function changeEventHandler(event) {
            if(!event.target.value) alert ("--SVP, choisissez une couleur--")
            else alert (event.target.value);
        }
        
        /*
            URLSearchParams.append(products.colors);
    
            let colorsOption = document.getElementById('colors.value');

            colorsOption = products.colors[0];
            console.log(colorsOption);
                colorsOption = products.colors[1];
            console.log(colorsOption);
                colorsOption = products.colors[2];
            console.log(colorsOption);
        */
            /*for(var i = 0; i < select.options.length; i++) {
                console.log(select.options[i].label);
              }
            console.log(colorsSelect);
            */
            
               
        

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
   .getElementsByTagName("a")
   .addEventListener("click", window.location);
   */
