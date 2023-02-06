// cart open/close

let cartIcon = document.querySelector('#cartIcon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#closeCart');

cartIcon.addEventListener ('click', () => {
    cart.classList.add('active');
})

closeCart.addEventListener ('click', () => {
    cart.classList.remove('active');
})

// cart itself

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready () {
    const removeCartButtons = document.getElementsByClassName('cartRemove');
    for(i=0; i<removeCartButtons.length; i++) {
        const button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);

        let quantityInputs = document.getElementsByClassName('cartQuantity');
        for(i=0; i<quantityInputs.length; i++) {
            let input = quantityInputs[i];
            input.addEventListener('change', quantityChanged);
        }
    }
    let addCart = document.getElementsByClassName('cartIcon');
    for(i=0; i<addCart.length; i++){
        let button = addCart[i];
        button.addEventListener('click', addCartClicked)
    }
}

function removeCartItem (e) {
    let buttonClicked = e.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function quantityChanged(event) {
    let itemQuantity = event.target;
    if (isNaN (itemQuantity.value) || itemQuantity.value <= 0) {
        itemQuantity.value = 1;
    }
    updateTotal();
}

function addCartClicked (e) {
    let button = e.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName('productTitle')[0].innerText;
    let price = shopProducts.getElementsByClassName('price')[0].innerText;
    let productImg = shopProducts.getElementsByClassName('productImg')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    const cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cartBox')

    let cartItems = document.getElementsByClassName('cartContent')[0];
    let cartItemsNames = cartItems.getElementsByClassName('cartProductTitle');

    for(i=0; i<cartItemsNames.length; i++) {
        alert('You have already added this item to cart');
        return;
    }
}

let cartBoxContent = `
            <img src="/stuff/shop img/product2.jpg" alt="" class="cartImg">
            <div class="detailBox">
            <div class="cartProductTitle">Earbuds</div>
            <div class="cartPrice">$100</div>
            <input type="number" value="1" class="cartQuantity">
            </div>  

            <i class="fa-solid fa-trash cartRemove"></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cartRemove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cartQuantity')[0].addEventListener('change', quantityChanged);

function updateTotal() {
    let total = 0;
    let cartContent = document.getElementsByClassName('cartContent')[0];
    let cartBoxes = cartContent.getElementsByClassName('cartBox');
    
    for (let i=0; i<cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName('cartPrice')[0];
        let quantityElement = cartBox.getElementsByClassName('cartQuantity')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total += price * quantity;

        total=Math.round(total * 100/100 )

        document.getElementsByClassName('totalPrice')[0].innerText = '$' + total;
    }
}