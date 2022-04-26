fetch('http://localhost:3000/api/products')
//Function "res" permet d'assurer la bonne récupération du fichier:
.then(function(res){        
    if (res.ok){
        return res.json()
    }
})
.then(function(products){ // j'appelle le tableau et récupère toutes les données du tableau
    console.log (products); // je vérifie que le tableau est bien intégré
    const sectionElt = document.getElementById("items"); // la constance correspondra dans le HTML à la section dont l'ID est items
                // je créé une boucle qui dit que chaque Items/objects/product dans le tableau/webapi products 
    for (let product of products){ 
                // on vérifie d'abord que les items/objects/product ooient bien récupérés
        console.log (product) 
                // création des éléments HTML 
                //1. lien du produit / Card
                // on créé la variable qui correspondra à l'élément du HTML
        let linkElt = document.createElement("a"); 
        linkElt.href = "./product.html?productId="+ product._id;
/*      
        let url = new URL(href);
        let productID = url.searchParams.get('product._id');
        console.log(productID);
//let str = "http://localhost:3000/api/products"; ce n'est pas une variable mais une requête, je dois fetch
*/
                // on intègre la variable en tant qu'enfant du parent "section id items" dans HTML
        sectionElt.appendChild(linkElt); 
                // 2. article
                // on créé la variable qui correspondra à l'élément du HTML
        let articleElt = document.createElement('article'); 

        // err, articleElt.innerHTML = product._id;
                // on intègre la variable en tant qu'enfant du parent "a " dans HTML
        linkElt.appendChild(articleElt);
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
    };
})
.catch(function(err)
{
})