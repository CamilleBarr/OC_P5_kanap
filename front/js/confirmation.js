let url = new URL(window.location.href); 
let finalOrderId = url.searchParams.get("finalOrderId"); 
console.log(finalOrderId);

document.getElementById("orderId").innerHTML = finalOrderId;