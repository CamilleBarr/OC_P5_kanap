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
        addToCart(product)
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

let addToCart = (product) => {
    let addProduct = document.getElementById('addToCart');
    // je créé un bloc de code qui s'éxectute au clic du bouton
    addProduct.addEventListener('click', function () {

        let kanap = {
            id: productId,
            quantity: quantity.value,
            color: document.getElementById('colors').value
        };


        let savedLocalStorage = JSON.parse(localStorage.getItem('listOfProduct'));
        /*
                if (localStorage.getItem('listOfProduct') !== null) {
                    tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'))
                    //tableauKanap =[];
                    
                    console.log("tableauKanap :", tableauKanap);
                }

               
                /*} else {
                    //tableauKanap.push(kanap);
                    //localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
                    alert("Votre produit n'a pu être ajouté au panier.")
                */let checkQuantity = () =>
                    (kanap.quantity > 100 ||
                        kanap.quantity == 0 ||
                        kanap.quantity != parseInt(kanap.quantity)) //{
                         //   kanap.quantity == 0;
                       // alert("Merci de bien vouloir sélectionner une quantité comprise entre 1 et 100.");
                    //}
                     (kanap.color == 0);
                        //alert("Merci de bien vouloir sélectionner une couleur.");}
                        
                
         if (savedLocalStorage && checkQuantity == false) {
            let foundProduct = savedLocalStorage.find((kanap) => kanap.id == productId.name && kanap.color == productId.color);
            console.log("foundProduct :", foundProduct);

            if (foundProduct) {
                //let foundProduct = tableauKanap.find(kanap => kanap.id === productId.id && kanap.color === productId.color);
                //let foundProductColor = tableauKanap.find(kanap => kanap.color === productId.color);
                //console.log("tableauKanap", tableauKanap);
                //if (foundProduct != undefined) {
                let finalSelection = parseInt(foundProduct.quantity) + parseInt(productId.quantity);

                //let finalSelection = parseInt(kanap.quantity) + parseInt(productId.quantity);
                console.log("finalSelection :", finalSelection);
                /*
                let finalSelection = parseInt(foundProduct.quantity) + parseInt(kanap.quantity);
                
                */
                foundProduct.quantity = finalSelection;
                console.log("foundProduct.quantity : ", foundProduct);

                localStorage.setItem('listOfProduct', JSON.stringify(savedLocalStorage));
                alert("Votre produit a peut-être été ajouté ?");

            } else {
                savedLocalStorage.push(kanap);
                //productId.quantity = productId.quantity;
                localStorage.setItem("listOfProduct", JSON.stringify(savedLocalStorage));
                console.log(savedLocalStorage);
                alert("Votre produit a été ajouté au panier");
            }
        } else {
            savedLocalStorage = [];
            savedLocalStorage.push(kanap);
            localStorage.setItem("listOfProduct", JSON.stringify(savedLocalStorage));
        }
        /*else {
                if (kanap.quantity >= 100 ||
                    kanap.quantity == 0 ||
                    kanap.quantity != parseInt(kanap.quantity)) {
                        kanap.quantity =0;
                    alert("Merci de bien vouloir sélectionner une quantité comprise entre 1 et 100.");
                } else if (kanap.color == 0){
                    alert("Merci de bien vouloir sélectionner une couleur.");
            }
        }*/
    })
}

// or 
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