    

fetch('http://localhost:3000/api/products')

//Function pour ajouter dans le DOM un lien
.then (function(addElt) {
    const Link = document.createElement('a');
    Link.appendChild('section.items');

    let img = document.createElement('img');
    img.appendChild(article);


    //Function pour créer l'enfant article dans la balise lien
    let article = document.createElement('article');
    article.appendChild(newLink);

    //Function pour créer les enfants "img" "productName"dans balise h3 "productDescription" dans balise p

    let h3 = document.createElement('h3');
    img.appendChild(article);

    let productName = document.createClass('productName')
    productName.appendChild(h3)

    let p = document.createElement('p');
    img.appendChild(article);

    let productDescription = document.createClass('productDescription')
    productDescription.appendChild(p)
})

    //Function "res" permet d'assurer la bonne récupération du fichier:
    .then(function(res)
    {
        if (res.ok) 
        {
            return res.json();
        };

        class productItem 
        {constructor ()
            {   this.name='array[products].name',
                this._id='array[products]._id',
                this.img='array[products].img',
                this.description='array[products].description'
            }
        };

        let new productItem()
        {
            
        }

        then (function(value)
        {
        console.log(value);
        })

        // function productItem ()
        // {
        //     console.log 
        //     (products[items[1], items[2], items[3],items[4], items[5], items[6], items[7], items[8]])
        // };
    })