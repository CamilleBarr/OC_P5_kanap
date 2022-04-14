fetch('http://localhost:3000/api/products')
//Function "res" permet d'assurer la bonne récupération du fichier:
.then(function(res)
{
        console.log(res);
        if (res.ok) 
        {
            return res.json();
        };
    })
.catch(function() 
{
    console.log(error);
})




    

        // class productItem 
        // {constructor ()
        //     {   this.name='array[products].name',
        //         this._id='array[products]._id',
        //         this.img='array[products].img',
        //         this.description='array[products].description'
        //     }
        // };
    