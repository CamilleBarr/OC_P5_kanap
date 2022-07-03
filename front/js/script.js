//Function "res" permet d'assurer la bonne récupération de l'API products
fetch('http://localhost:3000/api/products')
.then(function(res){        
    if (res.ok){
        return res.json()
    }
})
//Promesse / function "product" permet de créer l'architecture de la page et y intégrer les données de l'API
.then(function(products){
    const sectionElt = document.getElementById("items");
    for (let product of products){
        let linkElt = document.createElement("a"); 
        linkElt.href = "./product.html?productId="+ product._id;
        sectionElt.appendChild(linkElt); 
        let articleElt = document.createElement('article'); 
        linkElt.appendChild(articleElt);
        let imageElt = document.createElement('img');
        imageElt.src = product.imageUrl;
        imageElt.alt = product.name;
        articleElt.appendChild(imageElt); 
        let h3Elt = document.createElement('h3'); 
        h3Elt.innerHTML = product.name;
        articleElt.appendChild(h3Elt); 
        let pElt = document.createElement('p');
        pElt.innerHTML = product.altTxt;
        articleElt.appendChild(pElt); 
    };
})
//Promesse / Function catch permet de nous renvoyer une erreur en place de la promesse res et affichage de l'architecture produit
.catch(function(err)
{
    console.log(err, "erreur")
})