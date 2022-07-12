var url = 'http://localhost:3000/api/products';

let mainFunction =(products) => {
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
};

fetch(url)
.then(function(res){        
    if (res.ok){
        return res.json()
    }
})
.then(function(products){
    mainFunction(products)
})
.catch(function(err)
{
    console.log(err, "erreur")
})