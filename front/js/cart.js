//--------PART 1 : création de l'architecture HTML et récupération de la sélection produit

let tableauKanap = JSON.parse(localStorage.getItem('listOfProduct'));

if (!tableauKanap || tableauKanap == 0) {
  let subtitle1 = document.createElement('h1');
  subtitle1.setAttribute('style', 'text-align:center');
  subtitle1.innerHTML = "est vide."
  cart__items.appendChild(subtitle1);

  let subtitle2 = document.createElement('h2');
  subtitle2.setAttribute('style', 'text-align:center');
  subtitle2.innerHTML = "Avez-vous vu notre page d'accueil ?"
  cart__items.appendChild(subtitle2);
} else {
  for (let kanap of tableauKanap) {
    isCart(kanap);
  }
}

function createHTMLContent(res, kanap) {
  let cartSection = document.getElementById('cart__items');
  let cartArticle = document.createElement('article');

  cartSection.appendChild(cartArticle);
  cartArticle.className = 'cart__item';
  cartArticle.setAttribute('data-id', res._id);
  cartArticle.setAttribute('data-color', kanap.color);

  let divImage = document.createElement('div');
  divImage.className = 'cart__item__img';
  cartArticle.appendChild(divImage);

  let imageElt = document.createElement('img');
  imageElt.src = res.imageUrl;
  imageElt.alt = res.description;
  divImage.appendChild(imageElt);

  let divContent = document.createElement('div');
  divContent.className = 'cart__item__content';
  cartArticle.appendChild(divContent);

  let description = document.createElement('div');
  description.className = 'cart__item__content__description';
  divContent.appendChild(description);

  let h2Elt = document.createElement('h2');
  h2Elt.innerHTML = res.name;
  description.appendChild(h2Elt);

  let pColor = document.createElement('p');
  pColor.textContent = kanap.color;
  description.appendChild(pColor);

  let pPrice = document.createElement('p');
  let pPriceValue = (parseFloat(res.price) * parseInt(kanap.quantity));
  pPrice.innerHTML = pPriceValue + ",00 €";
  description.appendChild(pPrice);

  let settings = document.createElement('div');
  settings.className = 'cart__item__content__settings';
  divContent.appendChild(settings);

  let settingsQuantity = document.createElement('div');
  settingsQuantity.className = 'cart__item__content__settings__quantity';
  settings.appendChild(settingsQuantity);

  let pQuantity = document.createElement('p');
  settingsQuantity.appendChild(pQuantity);
  pQuantity.innerHTML = "Qté : ";

  let inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.className = 'itemQuantity';
  inputQuantity.name = 'itemQuantity';
  inputQuantity.setAttribute('min', '1');
  inputQuantity.max = '100';
  inputQuantity.value = kanap.quantity;
  settingsQuantity.appendChild(inputQuantity);

  let settingsDelete = document.createElement('div');
  settingsDelete.className = 'cart__item__content__settings__delete';
  settings.appendChild(settingsDelete);

  let pDelete = document.createElement('p');
  pDelete.className = 'deleteItem';
  settingsDelete.appendChild(pDelete);
  pDelete.innerHTML = "Supprimer";
}

function changedQuantity(kanap) {
  const quantityItems = document.querySelectorAll('.itemQuantity');
  for (let i = 0; i < quantityItems.length; i++) {
    quantityItems[i].addEventListener('click', function () {
      let originalQuantity = kanap.quantity;
      let changedQuantity = quantityItems[i].valueAsNumber;



      let findProduct = tableauKanap.find((kanap) => kanap.originalQuantity !== changedQuantity);
      findProduct.quantity = changedQuantity;

      let finalSelection = changedQuantity;
      originalQuantity = finalSelection;

      localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));
      window.location.reload(calcTotalKanap)
      
    })
  }
}

function deleteKanap() {
  const deleteSelectors = document.querySelectorAll('.deleteItem');
  for (let i = 0; i < deleteSelectors.length; i++) {
    let deleteSelector = deleteSelectors[i];
    deleteSelector.addEventListener("click", () => {

      let deleteId = deleteSelector.closest('article').getAttribute('data-id');
      let deleteColor = deleteSelector.closest('article').getAttribute('data-color');

      filterProduct = tableauKanap.filter((kanap) => (deleteId != kanap.id, deleteColor != kanap.color));
      tableauKanap = filterProduct;
      localStorage.setItem('listOfProduct', JSON.stringify(tableauKanap));

      alert('Votre article a bien été supprimé.');
      window.location.reload();
    })
  }
}

function calcTotalKanap() {

  const quantitySelector = document.getElementsByClassName('itemQuantity');
  let totalQuantity = 0;

  for (let i = 0; i < quantitySelector.length; i++) {
    totalQuantity += quantitySelector[i].valueAsNumber;
  };

  let idTotalQuantity = document.getElementById("totalQuantity");
  idTotalQuantity.innerHTML = totalQuantity;
};

let totalPrice = 0;

function calcTotalPrice(res, kanap) {

  let findId = tableauKanap.find(el => res._id === el.id);

  let totalPriceCalc = (parseInt(res.price) * parseInt(kanap.quantity));
  totalPrice += totalPriceCalc;

  let idTotalPrice = document.getElementById("totalPrice");
  idTotalPrice.innerHTML = totalPrice;
}


function isCart(kanap) {
  fetch('http://localhost:3000/api/products/' + kanap.id)
    .then(function (res) {
      if (res.ok) {
        return res.json()
      }
    })
    .then(function (res) {
      createHTMLContent(res, kanap);
      changedQuantity(kanap);
      deleteKanap(kanap);
      calcTotalKanap();
      calcTotalPrice(res, kanap);

    })
    .catch(function (err) {
      console.log("erreur :", err)
    })
};

//--------PART 2 : récupération du formulaire

function getForm() {

  let otherRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
  let addressRegExp = new RegExp("^[0-9]{1,4}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

  let firstNameErrorMsg = document.querySelector("#firstNameErrorMsg");
  let lastNameErrorMsg = document.querySelector("#lastNameErrorMsg");
  let addressErrorMsg = document.querySelector("#addressErrorMsg");
  let cityErrorMsg = document.querySelector("#cityErrorMsg");
  let emailErrorMsg = document.querySelector("#emailErrorMsg");

  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

  document.getElementById("firstName").addEventListener("change", () => {
    if (otherRegExp.test(firstName.value)) {
      firstNameErrorMsg.innerHTML = "";
    } else {
      firstNameErrorMsg.innerHTML = "Veuillez renseigner votre prénom";
    }
  })
  document.getElementById("lastName").addEventListener("change", () => {
    if (otherRegExp.test(lastName.value)) {
      lastNameErrorMsg.innerHTML = "";
    } else {
      lastNameErrorMsg.innerHTML = "Veuillez renseigner votre nom";
    }
  })
  document.getElementById("address").addEventListener("change", () => {
    if (addressRegExp.test(address.value)) {
      addressErrorMsg.innerHTML = "";
    } else {
      addressErrorMsg.innerHTML = "Veuillez préciser le numéro, type de voie et nom de voie";
    }
  })
  document.getElementById("city").addEventListener("change", () => {
    if (otherRegExp.test(city.value)) {
      cityErrorMsg.innerHTML = "";
    } else {
      cityErrorMsg.innerHTML = "Veuillez retirer les accents";
    }
  })
  document.getElementById("email").addEventListener("change", () => {
    if (emailRegExp.test(email.value)) {
      emailErrorMsg.innerHTML = "";
    } else {
      emailErrorMsg.innerHTML = "Veuillez noter l'adresse email selon le standart";
    }
  })
}
getForm();

// ----- PARTIE 3 : SYNTHESE ET VALIDATION DE COMMANDE

function postForm() {

  let form = document.querySelector(".cart__order__form");

  form.addEventListener("submit", (event) => {

    event.preventDefault();

    let products = [];
    for (kanap of tableauKanap) {
      products.push(kanap.id);
    };

    let contact = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      email: document.getElementById('email').value,
    };

    function orderNumber(min, max) {
      return parseInt(Math.random() * (max - min) + min);
    }
    let orderNo = orderNumber(1, 10000);

    let dataToSend = JSON.stringify({
      "contact": contact,
      "products": products,
    });
    console.log(dataToSend);

    fetch("http://localhost:3000/api/products/" + {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: dataToSend,
      })
      .then(res =>
        res.json()
      )
      .then(dataToSend => {
        localStorage.setItem('orderNo', orderNo);
        let order = JSON.parse(localStorage.getItem('orderNo'));
        document.location.href = "./confirmation.html?orderNo=" + order;
      })
      .catch(error => console.log('error', error));
  })
}
postForm()