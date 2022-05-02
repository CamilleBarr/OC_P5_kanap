// Affichage d'un produit à la selection par récupération de l'ID d'un produit

let url = new URL (location.href);
let productId = url.searchParams.get('productId');
console.log('productId', productId);
//let jsonResponse = {}; 

// Fonction d'affichage des propriétés du produit
fetch('http://localhost:3000/api/products/' + productId )
    /* code de Lilian 
    .then((data) => {
        console.log('data', data.json())
        console.log('Promise', data.PromiseResult)
        //jsonResponse = data.json();
        //console.log('response', jsonResponse.productID);
    })
    .catch((error) => {
        console.log('error');
    })

    */
    //.then ((res) => (res.json)) =
     .then(function(res){        
         if (res.ok){
             console.log('res', res);
             return res.json()
         }
     })
    
     .then(function appelProduit (product) {
         console.log('product', productId)
         
            let imageClass = document.getElementsByClassName('item__img');
            console.log('imageClass', imageClass);
                
            let imageProduct = document.createElement("img");
            imageClass[0].appendChild(imageProduct);
            //return imageProduct;

            imageProduct.src = product.imageUrl;
            imageProduct.alt = product.name;

            let h1Product = document.getElementById('title');
                h1Product.innerHTML = product.name;
            console.log('h1', h1Product);

            let priceProduct = document.getElementById('price');
                priceProduct.innerHTML = product.price;
            console.log('priceProduct', priceProduct);

           let description = document.getElementById('description');
                description.innerHTML = product.description;
            console.log ('description', description);
/*
            let colorsOption = document.getElementById('colors');
            //colorsOption.value.innerHTML = product.colors;
            for ( let colorsOption=0; colorsOption<0; i++){
                colorsOption.value.innerHTML = product.colors;
                
             }
            
            //console.log(select.options[colorsOption].label);
            console.log ('colorsOption', colorsOption);
*/
            let colorsOption = document.getElementsById('colors');
            colorsOption.innerHTML = product.colors['']

           // colorsOption = product.colors[''];
            console.log('colorsOption', colorsOption);
/*
            colorsOption = product.colors[1];
            console.log('colorsOption' , colorsOption);
                colorsOption = product.colors[2];
            console.log('colorsOption',colorsOption);
*/
            for ( let colorsOption=0; colorsOption<product.colors; i++){
                colorsOption.innerHTML = product.colors;
        }

        let maxOrder = getElementById('quantity');
        maxOrder <= 100;
        if (maxOrder = true){
           return "Vous avez dépassé le volume de commande autorisé." + "Merci de passer une deuxième commande.";}
        else (maxOrder = false) =>{
            return "N'oubliez pas de valider votre commande";}
        console.log (maxOrder);

        
    }
    )
    
     
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
                //option 3 : tant que j'ai du contenu, soit opposé à null, j'affiche. sinon, je stop.
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
            let colorsOption = document.getElementById('colors');

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

/*
    //link between the display of all products and the product page itself
    document
   .getElementsByTagName("a")
   .addEventListener("click", window.location);
   
*/