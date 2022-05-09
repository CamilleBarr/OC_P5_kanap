fetch('http://localhost:3000/api/products')
//Function "res" permet d'assurer la bonne récupération du fichier:
.then(function(res){        
    if (res.ok){
        return res.json()
    }
})
//Fonction "product" permet de récupérer tous les produits 
.then(function(products){
    console.log (products);
    const sectionElt = document.getElementById("items");
    for (let product of products){ 
        console.log (product) 
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
.catch(function(err)
{
})