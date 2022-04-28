// Affichage d'un produit à la selection par récupération de l'ID d'un produit

let url = new URL (location.href);
let productId = url.searchParams.get('productId');
console.log(productId);

// Fonction d'affichage des propriétés du produit
fetch('http://localhost:3000/api/products/' + productId )
    //.then ((res) => (res.json)) =
    .then(function(res){        
        if (res.ok){
            return res.json()
        }
    })
    .then(function(products) { // j'appelle le tableau et récupère toutes les données du tableau
        console.log (products); // je vérifie que le tableau est bien intégré
        for (let productDisplay of productId){
            //let imageProduct = document.getElementByClass('item__img');
            /*let imageProduct = document.createElement('img');
            article.div.appendChild(imageProduct);
                imageProduct.src = products.imageUrl;
                imageProduct.alt = products.name;}
            */

            let h3Product = document.getElementById('title');
                h3Product.innerHTML = products.name;

            let priceProduct = document.getElementById('price');
                priceProduct.innerHTML = products.price;

            let description = document.getElementById('description');
                description.innerHTML = products.description;

        }
    })
    .then ((err)=> console.log ("erreur"));

// fonction de récupération de l'image


    /* 
    dataImage ()  => {
        
    }
    */


// j'appelle le tableau et récupère les données du tableau
    
     // je vérifie que le tableau est bien intégré
    //        for (let productImage of imageDuProduit){ 
        




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
               /*
                let colorValue = document.createAttribute('value');

                //let colorOption1.value = document.getElementByTagName('option').value[0];
                let colorOption = document.getElementByTagName("option")[0];
                colorOption.setAttributeNode(colorValue);
                colorValue.value = products.colors;
                colorOption = new 

                // option 1 : nommer les options une par une
                //option 2 : faire une boucle if (value !== false) console.log(value) else consol.log (null)
        
                  //let Value = select.options[products.colors].value;
                */
            /*
                colorOption.value = products.colors[0];
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
        const selectColor = document.getElementById('colors')
        //document.opinion.value = products.colors[]
        selectColors.forEach((item) => {
        item.addEventListenner ('click', (event) => {
            console.log (e.target.id);
            
        })
        })

        */
        /*
            let colorsOption = document.getElementById('colors.value');

            colorsOption = products.colors[0];
            console.log(colorsOption);
                colorsOption = products.colors[1];
            console.log(colorsOption);
                colorsOption = products.colors[2];
            console.log(colorsOption);
        */
        /*
            for(var i = 0; i < select.options.length; i++) {
                console.log(select.options[i].label);
              }
            console.log(colorsSelect);
        */
                // on intègre la variable en tant qu'enfant du parent "a " dans HTML
        //linkElt.appendChild(articleElt);



/*
    //link between the display of all products and the product page itself
    document
   .getElementsByTagName("a")
   .addEventListener("click", window.location);
   
*/