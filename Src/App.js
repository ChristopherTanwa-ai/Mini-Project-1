var cart_arr = [
    { id: 0, pic: "/Images/AlberoDeLimone.jpg.webp", name: "AlberoDeLimone", format: "A4", quan: 1, price: 200 },
    { id: 1, pic: "/Images/APpeacock.png", name: "A.P. Peacock", format: "A4", quan: 1, price: 300 },
    { id: 2, pic: "/Images/Berggruen&cie.jpg", name: "Berggruen & Cie", format: "A4", quan: 1, price: 250 },
    { id: 3, pic: "/Images/HilmaArtExhibition.png", name: "Art exhibition III", format: "A4", quan: 1, price: 250 },
    { id: 4, pic: "/Images/Hilma af Klint - The Ten Largest Childhood No. 2 Plakat.png", name: "The Ten Largest Childhood", format: "A4", quan: 1, price: 250 },
    { id: 5, pic: "/Images/JohnMillerSummer.png", name: "Summer Estuary", format: "A4", quan: 1, price: 150 },
    { id: 6, pic: "/Images/Screenshot 2023-02-21 at 19-51-39 SELF-PORTRAIT 02.png", name: "Self Portrait", format: "A4", quan: 1, price: 255 },
    { id: 7, pic: "/Images/LifeandLove.jpg", name: "How can I have enough of life and love?", format: "A4", quan: 1, price: 150 },
    { id: 8, pic: "/Images/MaThooArtSimply.png", name: "Simply Living x The Breakfast", format: "A4", quan: 1, price: 250 },
    { id: 9, pic: "/Images/Monet - The Artist's Garden at Vétheuil Plakat.png", name: "The Artist's Aarden at Vétheuil", format: "A4", quan: 1, price: 200 },
    { id: 10, pic: "/Images/Screenshot 2023-03-06 at 12-24-15 Et La Paix exhibition poster - Picasso.png", name: "Paix", format: "A4", quan: 1, price: 150 },
    { id: 11, pic: "/Images/PortraitdeMarie-ThereseWalter.png", name: "Portrait de Marie-Therese Walter", format: "A4", quan: 1, price: 300 },
    { id: 12, pic: "/Images/TaishoSundayMorning.png", name: "Sunday Morning", format: "A4", quan: 1, price: 230 },
    { id: 13, pic: "/Images/TaishoUdon.png", name: "Udon", format: "A4", quan: 1, price: 230 },
    { id: 14, pic: "/Images/Un Po' Di Blu No2 Plakat.png", name: "The indigo collection No2", format: "A4", quan: 1, price: 300 },
];

//var storedIDs = JSON.parse(localStorage.getItem("plakater"));

function addName() {
    const Navn = localStorage.Name;
    if (Navn !== undefined) {
        document.getElementById("message").innerHTML =
            "Welcome " + Navn + "!";
    }
}

function addNameToBasket() {
    const Navn = localStorage.Name;
    if (Navn !== undefined) {
        document.getElementById("message").innerHTML =
            Navn + "'s Shopping Cart";
    }
}

//Cart things
function addToCart(id) {
    var cartItemJSON = JSON.stringify(cart_arr[id]);
    var cartArray = new Array();
    if (sessionStorage.getItem('shopping-cart')) {
        cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
    }
    cartArray.push(cartItemJSON);
    var cartJSON = JSON.stringify(cartArray);
    sessionStorage.setItem('shopping-cart', cartJSON);
    alert("Succesfully added to the cart");
}

function removeItemFromCart(ids) {
    if (sessionStorage.getItem('shopping-cart')) {
        var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
        shoppingCart.splice(ids,1);
        var cartJSON = JSON.stringify(shoppingCart);
        sessionStorage.setItem('shopping-cart', cartJSON);
        showCartTable()
    }
}

function showCartTable() {
    var cartHTML = "";
    var itemCount = 0;
    var grandTotal = 0;

    var price = 0;
    var quantity = 0;
    var subTotal = 0;

    if (sessionStorage.getItem('shopping-cart')) {
        var idArry = []
        var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
        itemCount = shoppingCart.length;
        shoppingCart.forEach(function (item) {
            var cartItem = JSON.parse(item);
            idArry.push(cartItem.id);
            price = parseInt(cartItem.price);
            quantity = parseInt(cartItem.quan);
            subTotal = price * quantity
            var index = idArry.indexOf(cartItem.id);
            cartHTML += '<div class="card mb-4">' +
                '<div class="card-body p-4">' +

                '<div class="row align-items-center">' +
                '<div class="col-md-2">' +
                '<img src="' + cartItem.pic + '"' +
                'class="img-fluid" alt="Picture">' +
                '</div>' +
                '<div class="col-md-2 d-flex justify-content-center">' +
                '<div>' +
                '<p class="small text-muted mb-4 pb-2">Name</p>' +
                '<p class="lead fw-normal mb-0">' + cartItem.name + '</p>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-2 d-flex justify-content-center">' +
                '<div>' +
                '<p class="small text-muted mb-4 pb-2"> Size</p>' +
                '<p class="lead fw-normal mb-0"><i class="fas fa-circle me-2"></i>'
                + cartItem.format + '</p>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-2 d-flex justify-content-center">' +
                '<div>' +
                '<p class="small text-muted mb-4 pb-2">Quantity</p>' +
                '<p class="lead fw-normal mb-0">' + quantity + '</p>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-2 d-flex justify-content-center">' +
                '<div>' +
                '<p class="small text-muted mb-4 pb-2">Price</p>' +
                '<p class="lead fw-normal mb-0">' + subTotal + 'kr</p>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-2 d-flex justify-content-center">' +
                '<button type="button" class="btn btn-danger btn-rounded" onclick = "removeItemFromCart(\'' + index + '\')">Remove</button>' +
                '</div>' +
                '</div>' +

                '</div>' +
                '</div>'

            grandTotal += subTotal;
        });
    }

    document.getElementById("basket").innerHTML = cartHTML;
    document.getElementById("itemCount").innerHTML = '&nbsp (' + itemCount + ' item(s) in your cart)';
    document.getElementById("totalAmount").innerHTML = grandTotal;
}


