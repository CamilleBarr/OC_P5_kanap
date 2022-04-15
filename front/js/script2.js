fetch('http://localhost:3000/api/products')
//Function "res" permet d'assurer la bonne récupération du fichier:
.then(function(res){        
    if (res.ok){
        return res.json()
    }
})
.then(function(value){
    console.log (value);
})
.catch(function(err)
{
})
// création des éléments HTML 
//1. lien du produit / Card

const linkElt = document.createElement("a");
let sectionElt = document.getElementById("items");

sectionElt.appendChild(linkElt);

// 2. article
const articleElt = document.createElement('article');

linkElt.appendChild(articleElt);

//3. img
const imageElt = document.createElement('img');

articleElt.appendChild(imageElt);
//4. h3
const h3Elt = document.createElement('h3');

articleElt.appendChild(h3Elt);
h3Elt.classList.add('productName');

//5. p
const pElt = document.createElement('p');

articleElt.appendChild(pElt);
pElt.classList.add('productDescription');

// récupération du contenu du tableau
const items = document.getElementsByTagName('items');
const firstItem = items[0];
const secondtItem = items[1];
const thirdItem = items[2];
const fourthItem = items[3];
const fifthItem = items[4];
const sixthItem = items[5];
const seventhItem = items[6];
const eighthItem = items[7];

//Constance pour ajouter dans le DOM un lien
// 
     

    //const a = document.getElementsByName('imageURL')

//     const img = document.createElement('<img>');
//     article.appendChild(img); 

const numberOfProductByPage = 8;
for (let i = 0; i < numberOfProductByPage; i++) {
//console.log('Object'[0,'...','Object'[1]);

}// Csq 11 message
/*  const numberOfProductByPage = 9;
for (let i = 0; i < numberOfProductByPage; i++) {
   console.log(items[i]);
}
// Csq rien
*/   
/*    const numberOfProductByPage = 8;
for (let i = 0; i < numberOfProductByPage; i++) {
   console.log(items[i]);
}    
//Csq 9 messages
*/
/*for (let i in items) {
console.log(items[i]);
}
//csq 307 messages d'infos
*/

// link between the display of all products and the product page itself
// document
//   .getElementById("items")
//   .addEventListener("click", items);





    // class productItem 
    // {constructor ()
    //     {   this.name='array[].name',
    //         this._id='array[]._id',
    //         this.img='array[].img',
    //         this.description='array[].description'
    //     }
    // };
