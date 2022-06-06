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
        priceProduct.innerHTML = product.price;
        console.log('priceProduct', priceProduct);

        let description = document.getElementById('description');
        description.innerHTML = product.description;
        console.log('description', description);

        let selectOption = document.getElementById('colors').options;

        for (colors of product.colors) {
            selectOption.add(new Option(colors, colors))
        };

        let quantity = document.getElementById('quantity');

    })

    //function getSelection = au click du bouton, 
    //1. je récupère les données selected sous forme d'objet
    //2. J'ajoute des  conditions
    //3.  

    
    .then(function () {

            //for ( addProduct of addProduct) {
            let addProduct = document.getElementById('addToCart');
            // je créé un bloc de code qui s'éxectute au clic du bouton
            addProduct.addEventListener('click', function () {

                let tableauKanap = [];

                let kanap = {
                    id: productId,
                    quantity: document.getElementById('quantity').value,
                    color: document.getElementById('colors').selectedIndex
                }

                if (localStorage.getItem('listOfProduct') !== null )
                 {console.log('listOfProduct')
                    tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'))   
                }

                if (kanap.color == 0) {
                    alert('Merci de sélectionner une teinte.')
                } else if (kanap.quantity >= 100 ||
                    //kanap.quantity == "" ||
                    kanap.quantity == 0)
                // || kanapSelected.quantity != numberInteger 
                {
                    alert("Merci de bien vouloir sélectionner une quantité comprise entre 1 et 100.");
                    quantity.value = 0;
                } else {
                    //new tableauKanap;
                    //cart.push(tableauKanap);
                    //console.log(tableauKanap);           
                    //cart.push(tableauKanap);
                    tableauKanap.push(kanap);
                    localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
                    alert('Votre produit a bien été ajouté au panier.')
                }
            /*        
                let foundProduct = cart.find(kanap => kanap.id === productId.id);
                let foundProductColor = cart.find(kanap => kanap.color === productId.color)
                if (foundProduct && foundProductColor) {
                    kanap.quantity += kanap.value;

                    
                } else {
                    kanap.quantity = kanap.value;
                    cart.push(kanap);
                }
                //localStorage.setItem('listOfProduct', JSON.stringify(listOfProduct));
            */
            })
        })
      

            /*
                    function addToCart() {
                        let cart = getCart();
                        let foundProduct = cart.find(kanap => kanap.id == product.id);
                        if (foundProduct != undefined
                            //&& foundProduct.color == kanap.color 
                        ) {
                            foundProduct.quantity += kanap.quantity;
                            //tableauKanap.push(kanap);
                            // alert ('Votre produit a bien été ajouté.')
                        }
                        else if (foundProduct != undefined  && foundProduct.color != kanap.color ) {

                            cart.push(kanap);

                        } 
                        else {
                            //cart.push(kanap);
                            alert('Votre produit a bien été ajouté.')
                        }
                        saveCart(cart);
                    }
            */

            //let cart__items = tableauKanap();

            /*
           
            */


            /*
            function getToCart (){
                let cart__items = localStorage.getItem('sendToBasket');
                if (cart__items === null){
                    return [];
                }else
                return JSON.parse(cart__items); 
                //return JSON.parse(localStorage.getItem('basket'));
            }
            */
            /*
            function addToCart(productId){
                let cart__items = getToCart();
                let foundProduct =cart__items.find(p => p.id == product.id);
                if (foundProduct != undefined){
                    foundProduct.quantity++
                }
                else{
                    product.quantity ++;
                    cart__items.push(productId);
                }
            }
            */
            //let cart = new cartProduct (push.cart);
            /*
            for (pour chaque click/event ajout au panier){
            basket.add (new cartProduct), i++ };

                monLocalStockage = localStorage;
                localStorage.setItem = cartProduct;

                let totalProduct = monLocalStorage.lenght;
            */

                /*
                let addToCart = (product) => {
  let cart__items = getToCart();
  let foundProduct = cart__items.find(p => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity++
  } else {
    product.quantity = 1;
    cart__items.push(productSelected);
  }
}

let changeColor = (product, colorSelect) => {
  let cart__items = getToCart();
  let foundProduct = cart__items.find(p => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.colorSelect += colorSelect;
    if (foundProduct.colorSelect <= 0) {
      removeFromCart(foundProduct);
    } else {
      saveToCart(cart__items);
    }
  }
}

let changeQuantity = (productId, quantity) => {
  let cart__items = getToCart();
  let foundProduct = cart__items.find(p => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      removeFromCart(foundProduct);
    } else {
      saveToCart(cart__items);
    }
  }
}

                */