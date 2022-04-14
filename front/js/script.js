const products = []






// récupération du json pour la page d'accueil:
fetch('http://localhost:3000/api/products')

    //Function "res" permet d'assurer la bonne récupération du fichier:
    .then(function(res)
    {
        if (res.ok) {
            return res.json();
        }
        function value (){
        console.log (products[items[1], items[2], items[3],items[4], items[5], items[6], items[7], items[8]])
        }
    
    }
    
    // //Constance pour ajouter dans le DOM un lien
    // 
    //     const a = document.createElement('<a>');
    //     .appendChild('link');
    
    //     const img = document.createElement('<img>');
    //     article.appendChild(img);
    
    
    //     //Function pour créer l'enfant article dans la balise lien
    //     const article = document.createElement('<article>');
    //     article.appendChild(newLink);

    //     //Function pour créer les enfants "img" "productName"dans balise h3 "productDescription" dans balise p


    //     const h3 = document.createElement('<h3>');
    //     article.appendChild(h3);

    //     let productName = document.createClass('productName')
    //     h3.appendChild(productName)

    //     const p = document.createElement('<p>');
    //     article.appendChild(p);

    //     const productDescription = document.createClass('productDescription')
    //     p.appendChild(productDescription)

    //     //retrouver les éléments qui correspondent aux contenus à afficher
    //     let elt = document.getElementById('items')
    //     const productImg = document.querySelector('section.items article > img');
    // ;})

    // JS REACT//
    // function products (_id, name, description)
    // {
    //     this._id='id',
    //     this.name='name',
    //     this.description='description'
        
    // }
    // const items = 
    //     <a href="./product.html?${products._id}">
    //         <article>
    //             <img src="${products.img}" alt="${products.altTxt"/>
    //             <h3 class="productName"></h3>
    //             <p class="productDescription"></p>
    //         </article>
    //     </a>

    // document.querySelector('.items').innerHTML = items;

    // FIN JS REACT