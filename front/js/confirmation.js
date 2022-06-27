let url = new URL(location.href); 

let order = JSON.parse(localStorage.getItem('orderNo'));

let orderNo= url.searchParams.get("order", order); 

document.getElementById("orderId").innerHTML = order;
localStorage.clear();

