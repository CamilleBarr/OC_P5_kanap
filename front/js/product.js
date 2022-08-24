// Affichage d'un produit à la selection par récupération de l'ID d'un produit

let url = new URL(location.href);
let productId = url.searchParams.get('productId');

//Fn that save/update the LS
function saveTableauKanap (tableauKanap) {
    localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
}
//3. Displaying the page / Architecture
fetch('http://localhost:3000/api/products/' + productId)
    .then(function (res) {
        if (res.ok) {
            console.log('res', res);
            return res.json()
        }
    })
    .then(function (product) {
        createHTML(product);
        addToCart2(product)
    })
let createHTML = (product) => {
    let imageClass = document.getElementsByClassName('item__img');
    let imageProduct = document.createElement("img");
    imageClass[0].appendChild(imageProduct);
    imageProduct.src = product.imageUrl;
    imageProduct.alt = product.altTxt;
    let h1Product = document.getElementById('title');
    h1Product.innerHTML = product.name;
    let priceProduct = document.getElementById('price');
    priceProduct.innerHTML = parseInt(product.price);
    let description = document.getElementById('description');
    description.innerHTML = product.description;
    let selectOption = document.getElementById('colors').options;
    for (colors of product.colors) {
        selectOption.add(new Option(colors, colors))
    };
    let quantity = document.getElementById('quantity');
}

//function addToCart = on click of button, 
let addToCart2 = (product) => {
    let addProduct = document.getElementById('addToCart');
    addProduct.addEventListener('click', function () {
        //1. Creating an array in which we add product object
        //  Product object (kanap) contains an ID, the quantity and color selected
        let tableauKanap = [];
        let kanap = {
            id: productId,
            quantity: document.getElementById('quantity').value,
            color: document.getElementById('colors').value
        }
        //2. Adding conditions before adding the product in cart e.g.(if =0, if >100 etc)
        if (kanap.color == 0) {
            alert('Merci de sélectionner une teinte.')
            return kanap == undefined;
        } else if (kanap.quantity > 100 ||
            kanap.quantity <= 0 ||
            kanap.quantity != parseInt(kanap.quantity)) {
            alert("Merci de bien vouloir sélectionner une quantité comprise entre 1 et 100.");
            return kanap == undefined;
        }
        if (localStorage.getItem('listOfProduct')) {
            // allows adding as much products as we want in the array.
            tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'))
            let foundProduct = tableauKanap.find(el => el.id == kanap.id && el.color == kanap.color);
            if (foundProduct != undefined) {
                let finalSelection = (parseInt(foundProduct.quantity) + parseInt(kanap.quantity));
                foundProduct.quantity = finalSelection;
                alert("Ce produit a déjà été ajouté. La quantité sélectionnée a été ajouté");
            }
            else {
                tableauKanap.push(kanap);
                alert("Votre produit a bien été ajouté au panier");
                saveTableauKanap(tableauKanap);
            }
            saveTableauKanap(tableauKanap);
        } else {
            tableauKanap.push(kanap);
            alert("Votre produit a bien été ajouté au panier");
        }
        saveTableauKanap(tableauKanap);
    })
    

}