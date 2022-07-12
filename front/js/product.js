// Affichage d'un produit à la selection par récupération de l'ID d'un produit
//1. je créer une nouvelle URL
let url = new URL(location.href);
//2. qui récupère seulement un objet du tableau JSON = un produit
let productId = url.searchParams.get('productId');
let kanap = {
    id: productId,
    quantity: quantity.value,
    color: document.getElementById('colors').value
}
//3. affichage d'une page avec vue d'un produit
// fetch avec promesse res = vérifie la bonne récupération des données
fetch('http://localhost:3000/api/products/' + productId)
    .then(function (res) {
        if (res.ok) {
            console.log('res', res);
            return res.json()
        }
    })
    // promesse / function showProduct permet de créer l'architecture de la fiche produit et y intégrer les données de l'API
    .then(function (product) {
        createHTML(product);
        addToCart2(product)
    })
let createHTML = (product) => {
    let imageClass = document.getElementsByClassName('item__img');
    let imageProduct = document.createElement("img");
    imageClass[0].appendChild(imageProduct);
    imageProduct.src = product.imageUrl;
    imageProduct.alt = product.name;
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
//function addProduct = au click du bouton, 
//1. je crée un tableau dans lequel j'intègrerai l'objet Kanap.
//   L'object kanap comprend l'ID, la quantité, la couleur sélectionnée
//2. J'ajoute des  conditions avant l'ajout du produit au panier (si =0, si >100 etc)
let addToCart2 = (product) => {
    let addProduct = document.getElementById('addToCart');
    // je créé un bloc de code qui s'éxectute au clic du bouton
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
            // permet d'ajouter autant de produit que l'on veut au tableau, si absent, le produit est remplacé par la nouvelle sélection, 
            // soit, on ne peut commander qu'une seule référence
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