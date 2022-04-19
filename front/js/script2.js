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

            let linkElt = document.createElement("a");

            sectionElt.appendChild(linkElt);

            // 2. article
            let articleElt = document.createElement('article');

            linkElt.appendChild(articleElt);

            //3. img
            let imageElt = document.createElement('img');

            articleElt.appendChild(imageElt);
            imageElt.classList.add('imageUrl')
            //4. h3 et creation de class
            let h3Elt = document.createElement('h3');

            h3Elt.innerHTML = product.name

            articleElt.appendChild(h3Elt);
            h3Elt.classList.add('name');

            //5. p et creation de class
            let pElt = document.createElement('p');

            articleElt.appendChild(pElt);
            pElt.classList.add('altText');

    };
})
.catch(function(err)
{
})

// récupération du contenu du tableau

/*let products=['object1','object2']
console.log(products[0]);
console.log(products[1]);
//n'affiche rien, juste les creation d'élément, base d'une card
*/
/*
const products = 8;

for (let i=0; i<10; i++);
//console.log(products);
//affiche qu'une card vierge*/

/*
let products = []


}
*/
/*
let products = [ object2];
for (let i in products){
console.log (products [i]);
}
// affiche une card vierge et dans la console affiche 1 et 2.
*/
/*
let products = ['object'[1], 'object'[2]];
for (let i in products){
console.log (products [i]);
}
// s'affiche une card vierge et dans la console on voit b et j.
*/

/*const product = [
    {imageUrl
    }
    
]*/

/*for (let products of product) {
     console.log([]);
 }
 */

/*let products=["index[1]", "index[2]"];
let allProducts=products.length;
*/

// il faut associer altText au paragraphe, associer name à h3 et associer imageUrl 

/*    let products = 8;
for (let i = 0; i < products; i++) {
   console.log(items[i]);
}    
//Csq 9 messages
*/
/*
products = []
for (let i in products) {
console.log(products[i]);
}
*/

//elementList = parentNode.querySelectorAll('imageUrl','name', 'altText');


//let products = document.getElementsByArray(products);

/*
const firstItem = products[0];
const secondtItem = products[1];
const thirdItem = products[2];
const fourthItem = products[3];
const fifthItem = products[4];
const sixthItem = products[5];
const seventhItem = products[6];
const eighthItem = products[7];
*/

// Csq 11 message
/*  const numberOfProductByPage = 9;
for (let i = 0; i < numberOfProductByPage; i++) {
   console.log(items[i]);
}
// Csq rien
*/   





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