let url = new URL(location.href); 
let finalOrderId = url.searchParams.get("orderId"); 
console.log("orderId :", orderId);

document.getElementById("orderId").innerHTML = finalOrderId;
localStorage.clear();