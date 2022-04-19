fetch('http://localhost:3000/api/products')
//Function "res" permet d'assurer la bonne récupération du fichier:
.then(function(res){        
    if (res.ok){
        return res.json()
    }
})
.then(function(products){ // j'appelle le tableau et récupère les données du tableau
    
    console.log (products); // je vérifie que le tableau est bien intégré
    
    const sectionElt = document.getElementById("items"); // la constance correspondra dans le HTML à la section dont l'ID est items
    
    for (let product of products){ // je créé une boucle qui dit que chaque Items/objects/product dans le tableau/webapi products 
        
        console.log (product) // on vérifie d'abord que les items/objects/product ooient bien récupérés
            // création des éléments HTML 
                //1. lien du produit / Card
        let linkElt = document.createElement("a"); // on créé la variable qui correspondra à l'élément du HTML
        sectionElt.appendChild(linkElt); // on intègre la variable en tant qu'enfant du parent "section id items" dans HTML
                // 2. article
        let articleElt = document.createElement('article'); // on créé la variable qui correspondra à l'élément du HTML
        linkElt.appendChild(articleElt);// on intègre la variable en tant qu'enfant du parent "a " dans HTML
                //3. img
            // on créé la variable qui correspondra à l'élément du HTML
        let imageElt = document.createElement('img'); 
        imageElt.src = product.imageUrl;
        articleElt.appendChild(imageElt); // on intègre la variable en tant qu'enfant du parent "article" dans HTML
                //4. h3 et creation de class
        let h3Elt = document.createElement('h3'); // on créé la variable qui correspondra à l'élément du HTML
        h3Elt.innerHTML = product.name; // on va chercher la clé de l'item/object/product que l'on souhaite voir apparaitre
        articleElt.appendChild(h3Elt); // on intègre la variable en tant qu'enfant du parent "article" dans HTML
                //5. p et creation de class
        let pElt = document.createElement('p'); // on créé la variable qui correspondra à l'élément du HTML
        pElt.innerHTML = product.altTxt; // on va chercher la clé de l'item/object/product que l'on souhaite voir apparaitre
        articleElt.appendChild(pElt); // on intègre la variable en tant qu'enfant du parent "article" dans HTML
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