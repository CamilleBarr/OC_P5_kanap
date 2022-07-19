// Affichage d'un produit à la selection par récupération de l'ID d'un produit
//1. New URL
let url = new URL(location.href);
//2. that only gets one product from our localStorage/JSON
let productId = url.searchParams.get('productId');
let kanap = {
    id: productId,
    quantity: quantity.value,
    color: document.getElementById('colors').value
}
//3. Displaying the page 
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
//function addProduct = on click of button, 
//1. Creating an arrayin which we add product object
//   Product object (kanap) contains an ID, the quantity and color selected
//2. Adding conditions before adding the product in cart e.g.(if =0, if >100 etc)
let addToCart2 = (product) => {
    let addProduct = document.getElementById('addToCart');
    // création d'un bloc de code qui s'éxectute au clic du bouton
    addProduct.addEventListener('click', function () {
        let tableauKanap = [];
        let kanap = {
            id: productId,
            quantity: document.getElementById('quantity').value,
            color: document.getElementById('colors').value
        }
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
            console.log("tableauKanap", tableauKanap);
            console.log("foundProduct :", foundProduct);
            if (foundProduct != undefined) {
                let finalSelection = (parseInt(foundProduct.quantity) + parseInt(kanap.quantity));
                foundProduct.quantity = finalSelection;
                console.log("finalSelection :", finalSelection);
                alert("Ce produit a déjà été ajouté. La quantité sélectionnée a été ajouté");
            }
            else {
                tableauKanap.push(kanap);
                alert("Votre produit a bien été ajouté au panier");
                localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
            }
            localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
        } else {
            tableauKanap.push(kanap);
            alert("Votre produit a bien été ajouté au panier");
        }
        localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
    })
    

}