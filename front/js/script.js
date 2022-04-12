

fetch('http://localhost:3000/api/productses); 
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(value){
        document.getElementById ('items') ;
    })