let url = new URL(location.href); 

let orderNo= url.searchParams.get("order", order); 
console.log("orderNo:", orderNo);

let order = JSON.parse(localStorage.getItem('orderNo'));
console.log("order:", order)

document.getElementById("orderId").innerHTML = order;
localStorage.clear();

