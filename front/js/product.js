// Affichage d'un produit à la selection par récupération de l'ID d'un produit
//1. je créer une nouvelle URL
//2. qui récupère seulement un objet du tableau JSON = un produit

let url = new URL(location.href);
let productId = url.searchParams.get('productId');
console.log('productId', productId);


//3. affichage d'une page avec vue d'un produit

// function res = vérifie la bonne récupération des données
fetch('http://localhost:3000/api/products/' + productId)
    .then(function (res) {
        if (res.ok) {
            console.log('res', res);
            return res.json()
        }
    })

    // function showProduct = affichage des données de l'API en créant l'espace de l'image, nom etc
    .then(function (product) {
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
        priceProduct.innerHTML = parseInt(product.price);
        console.log('priceProduct', priceProduct);

        let description = document.getElementById('description');
        description.innerHTML = product.description;
        console.log('description', description);

        let selectOption = document.getElementById('colors').options;

        for (colors of product.colors) {
            selectOption.add(new Option(colors, colors))
        };

        let quantity = document.getElementById('quantity');
        addToCart(product)

    })

//function getSelection = au click du bouton, 
//1. je récupère les données selected sous forme d'objet
//2. J'ajoute des  conditions
//3.  


let addToCart = (product) => {

    let addProduct = document.getElementById('addToCart');
    // je créé un bloc de code qui s'éxectute au clic du bouton
    addProduct.addEventListener('click', function () {

        let tableauKanap = [];

        let kanap = {
            id: productId,
            quantity: document.getElementById('quantity').value,
            color: document.getElementById('colors').value
        }

        if (localStorage.getItem('listOfProduct') !== null) {
            console.log('listOfProduct')
            tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'))
        }

        if (kanap.color == 0) {
            alert('Merci de sélectionner une teinte.')
        } else if (kanap.quantity >= 100 ||
            kanap.quantity == 0)
        // || kanapSelected.quantity != numberInteger 
        {
            alert("Merci de bien vouloir sélectionner une quantité comprise entre 1 et 100.");
            
        } else {
            //tableauKanap.push(kanap);
            localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
            alert('Votre produit a bien été ajouté au panier.')
        }


        //let originalQuantity = tableauKanap.find(kanap => kanap.quantity );

        let foundProduct = tableauKanap.find(kanap => kanap.id === productId.id && kanap.color === productId.color);
        //let foundProductColor = tableauKanap.find(kanap => kanap.color === productId.color);
        console.log("tableauKanap", tableauKanap);
        if (foundProduct != undefined) {
         let finalSelection = parseInt(foundProduct.quantity) + parseInt(productId.quantity);
            foundProduct.quantity = finalSelection

        } else {
            productId.quantity = productId.quantity;
            tableauKanap.push(kanap);
        }
        localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));

    })

}