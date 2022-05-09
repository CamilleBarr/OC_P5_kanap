// Affichage d'un produit à la selection par récupération de l'ID d'un produit

let url = new URL(location.href);
let productId = url.searchParams.get('productId');
console.log('productId', productId);

// Fonction d'affichage des propriétés du produit
fetch('http://localhost:3000/api/products/' + productId)
    .then(function (res) {
        if (res.ok) {
            console.log('res', res);
            return res.json()
        }
    })
    .then(function appelProduit(product) {
            console.log('product', productId)

            let imageClass = document.getElementsByClassName('item__img');
            console.log('imageClass', imageClass);

            let imageProduct = document.createElement("img");
            imageClass[0].appendChild(imageProduct);

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
            console.log('description', description);
            
            let selectOption = document.getElementById('colors').options;
            selectOption.value= selectOption.text;
            //selectOption.createAttribue = 'value[colors]'; //j'essaye d'indiquer la référence de la couleur dans la value
            //selectOption.options.setAttribute = ('value', 'colors');    
            let i = [0];
            //i.innerHTML = ('value', 'product.colors[""]');
        
            for (colors of product.colors) {
                selectOption.add(new Option(colors, i))
                i++
            };
            //console.log(value=product.colors[''])

            let quantity = document.getElementById('quantity');
/*
            if (quantitySelected >= 100) {
                return ("100");
                //console.log (100);
            } else (quantitySelected <= 100) 
                console.log (quantitySeleted);
*/
    })   
//let cart = array.prototype.map(cartProduct);


let productSelected = ['h1product', 'quantity', 'selectOption'];
let sendToBasket = productSelected;

let howManyProduct = productSelected.length;

function saveToCart (cart__items) {
    localStorage.setItem('sendToBasket', JSON.stringify(cart__items));
}

function getToCart (){
    let cart__items = localStorage.getItem('cart__items');
    if (cart__items === null){
        return [];
    }else
    return JSON.parse(cart__items); 
    //return JSON.parse(localStorage.getItem('basket'));
}

function addToCart(product){
    let cart__items = getToCart();
    let foundProduct =cart__items.find(p => p.id == product.id);
    if (foundProduct != undefined){
        foundProduct.quantity++
    }
    else{
        product.quantity = 1;
        cart__items.push(product);
    }
    saveToCart(basket);
}

//let cart = new cartProduct (push.cart);


/*

for (pour chaque click/event ajout au panier){
basket.add (new cartProduct), i++ };

    monLocalStockage = localStorage;
    localStorage.setItem = cartProduct;

    let totalProduct = monLocalStorage.lenght;
*/


/*
let addProduct = document.getElementById('addToCart');
addProduct.addEventListener('click', function () {
    if (!selectOption || !quantity ) {
        alert ("Merci de sélectionner une couleur et une quantité");
    }
    else {
    addProduct.innerHTML = 'Ajouté au panier';}

})          
*/
/*
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('addToCart').onchange = changeEventHandler;
}, false );
*/
/*
function changeEventHandler(event) {
    if (!event.target.value) alert("--SVP, choisissez une couleur--")
    else alert(event.target.value);
}
*/
/*
const selectColor = document.getElementById('colors')
//document.option.value = products.colors[]
selectColors.forEach((item) => {
item.addEventListenner ('click', (event) => {
    console.log (e.target.id);
    
})
})

*/

/*
    //link between the display of all products and the product page itself
    document
   .getElementsByTagName("a")
   .addEventListener("click", window.location);
   
*/

/* ce n'est pas nécessaire ici
class cartProduct {
    constructor (productId, quantity, color) {
         this.productId = 'productId';
         this.quantity = 'quantity';
         this.selectOption = 'color';
        } 
}
*/  