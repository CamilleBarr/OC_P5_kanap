/* 
BUG : 

console.log de totalPrice affiche NAN
console.log de totalQuantity s'affiche à la suite en tant que string pas en tant que nombre
le prix s'affiche en fct de la quantité, mais ne se met pas à jour dans le localStorage
afficher un prix décimal avec 2 chiffres après la virgule
afficher le text couleur plutôt qu'un chiffre

7. je créé un évènement au clic "confirmation" avec localStorage etc.
PARTIE 3
6. je mets des conditions regex au formulaire
PARTIE 2
5. Je créé un calcul sur totalQuantity et totalPrice
4. je créé un évènement au clic "suppression" du produit
4. je créé une condition si doublon de produit
3. je récupère les données de l'API directement pour le prix, src et text image
2. j'affiche le localstorage en fonction du contenu
1. je récupère le localStorage avec lequel je cherche à travailler
PARTIE 1
*/
let tableauKanap = [];
 tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));
console.log(tableauKanap);

//Object.keys(localStorage).forEach(function(key){
//  console.log(localStorage.getItem(key));
//});

//en fonction du retour consolelog faire boucle
//condition, si produit aux caractéristiques similaires = fusionner et additionner la quantité,
//sinon, new cart(kanap)
for ( let kanap of tableauKanap) {
  isCart(kanap)
}

//localStorage.setItem('listOfProduct', JSON.stringify(listOfProduct));
//1//
function createHTMLContent(res, kanap) {
  let cartSection = document.getElementById('cart__items');
  let cartArticle = document.createElement('article');

  cartSection.appendChild(cartArticle);
  cartArticle.className = 'cart__item';
  cartArticle.setAttribute('data-id', res.id); // récupéré de l'API
  cartArticle.setAttribute('data-color', kanap.color); // récupéré de localStorage

  let divImage = document.createElement('div');
  divImage.className = 'cart__item__img';
  cartArticle.appendChild(divImage);

  let imageElt = document.createElement('img');
  imageElt.src = res.imageUrl; // récupérer de l'API
  imageElt.alt = res.description; // récupérer de l'API
  divImage.appendChild(imageElt);

  let divContent = document.createElement('div');
  divContent.className = 'cart__item__content';
  cartArticle.appendChild(divContent);

  let description = document.createElement('div');
  description.className = 'cart__item__content__description';
  divContent.appendChild(description);

  let h2Elt = document.createElement('h2');
  h2Elt.innerHTML = res.name; // récupérer le titre du produit de l'API
  description.appendChild(h2Elt);

  let pColor = document.createElement('p');
  pColor.textContent = kanap.color; //récupérer la couleur sélectionnée de localStorage
  description.appendChild(pColor);

  let pPrice = document.createElement('p');
  pPrice.innerHTML = ((res.price * kanap.quantity) + ",00 €"); //récupérer le prix du produit de l'API
  description.appendChild(pPrice);

  let settings = document.createElement('div');
  settings.className = 'cart__item__content__settings';
  divContent.appendChild(settings);

  let settingsQuantity = document.createElement('div');
  settingsQuantity.className = 'cart__item__content__settings__quantity';
  settings.appendChild(settingsQuantity);

  let pQuantity = document.createElement('p');
  settingsQuantity.appendChild(pQuantity);
  pQuantity.innerHTML = "Qté : ";

  let inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.className = 'itemQuantity';
  inputQuantity.name = 'itemQuantity';
  inputQuantity.min = '1';
  inputQuantity.max = '100';
  inputQuantity.value = kanap.quantity;
  settingsQuantity.appendChild(inputQuantity);

  let settingsDelete = document.createElement('div');
  settingsDelete.className = 'cart__item__content__settings__delete';
  settings.appendChild(settingsDelete);

  let pDelete = document.createElement('p');
  pDelete.className = 'deleteItem';
  settingsDelete.appendChild(pDelete);
  pDelete.innerHTML = "Supprimer";
}

let calcNumberByKanap = () => {

//let inputQuantity = document.getElementsByClassName('itemQuantity');
//let originalQuantity = kanap.quantity;
/*
    for (let i = 0; i <= inputQuantity.length; i++) {
      let changedQuantity = inputQuantity[i];
      //changedQuantity.addEventListener("DOMContentLoaded", resultQuantity() {
      //document.querySelector('select[name="itemQuantity"]').onchange = changeEventHandler;
      //}, false);
      changedQuantity.addEventListener("change", (e) => {
          //e.preventDefault();
          tableauKanap[i].quantity = e.target.value;

          //let result = kanap.find((el) => el.changedQuantity !== kanap[i].quantity);
          if (tableauKanap[i].quantity <= 0) {
            
          localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap)) 
          location.reload();
          }
          //originalQuantity = inputQuantity;
          //kanap.quantity = result.quantity;
        })
        localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap)) 
        location.reload();

      }*/
//}
//console.log(inputQuantity)
}




function isCart(kanap) {
  console.log('kanap', kanap);
  fetch('http://localhost:3000/api/products/' + kanap.id)
    .then(function (res) {
      if (res.ok) {
        console.log('res', res);
        return res.json()
      }
    })
    .then(function (res) {
      createHTMLContent(res, kanap);
      //calcNumberByKanap(kanap);

    })
    .catch(function (err) {
      console.log("erreur", err)
    })
};

function calcNumberAllKanap(res, kanap) {
  let totalQuantity = document.getElementById('totalQuantity')
  //totalQuantity.innerHTML = allItemQuantity[i]

  //const calcFullPrice = () => {

  //for (i=0; i <= allItemPrice.length; i++){
  //allItemPrice[i];
  //}

  //}
  //}

  //const calcTotalKanap = (res, kanap) => {
  let allKanap = document.getElementsByClassName('itemQuantity');


  //totalQuantity.innerHTML = 
  for (var i = 0; i < allKanap.length; ++i) {
    //kanap.forEach(allKanap => {
    totalQuantity += allKanap[i]
    //totalQuantity += allKanap;
  };

  console.log(totalQuantity);
}
calcNumberAllKanap()
/*
const calcTotalPrice = (res, kanap) => {
  //sumPrice = "0";
  let allKanap = document.getElementsByClassName('itemQuantity');
  //let allKanapPrice = 
  for (let i = 0; i < isCart.length; i++) {
    
    sumPrice += (isCart.inputQuantity[i] * listOfProduct)                                            
  }
  
  let totalPrice = document.getElementById('totalPrice');
  totalPrice.innerHTML = sumPrice;
  console.log(sumPrice)
}
calcTotalPrice();
*/



/*
element.addEventListener("DOMContentLoaded", changeColor() {
  document.querySelector('select[name="color-select"]').onchange = changeEventHandler;
}, false);


*/
/*
function deleteKanap() {
  //je me positionne
  let deleteButton = document.querySelectorAll('.deleteItem');
  
  console.log(deleteButton)
      
  for (let i = 0; i< deleteButton.length; i++) {
    
    let button = deleteButton[i];
    //je crée un évènement au clic
    button.addEventListener("click", function (event) {
    //for (deleteButton of cartArticle) {
      for (btn in btnDelete){
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove(i)
  
      //tableauKanap.splice(i, 1); //supp le produits du tableau localStorage
      //cartArticle[i].remove(); //supp l'article du DOM
      
      //localStorage.setItem("listOfProduct", JSON.stringify(tableauKanap)); //MAJ du localStorage
      //location.reload(); //rechargement de la page pour mettre à jour le Panier
      alert ("Article supprimé");
      }
    })
  }
// au clic, je déclare "remove"

}
*/