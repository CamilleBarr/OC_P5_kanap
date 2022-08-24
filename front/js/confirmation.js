let url = new URL(location.href); 

let order= url.searchParams.get('order'); 

document.getElementById("orderId").innerHTML = order;

