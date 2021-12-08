let carts = document.querySelectorAll('.add-cart');

const products = [
    {
        name: "Iphone 12 Pro",
        tag: "12pro",
        price: 1500,
        inCart: 0
    },
    {
        name: "Iphone 13",
        tag: "13",
        price: 1600,
        inCart: 0
    },
    {
        name: "Iphone 13 Pro",
        tag: "13pro",
        price: 1700,
        inCart: 0
    },
    {
        name: "Iphone 13 Pro max",
        tag: "13promax",
        price: 2000,
        inCart: 0
    },
    
];

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totoCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');  
    
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItem(product);
}


function setItem(product){
    let cartItems = localStorage.getItem('productInCarts');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
    product.inCart += 1;
    console.log(product.name + " AMOUNT : " + product.inCart);
    }else {
        cartItems = {
            [product.tag] : product
        }
    }

    localStorage.setItem("productInCarts", JSON.stringify
    (cartItems));

}

function totoCost(product){
    // console.log("The product price is", product.price);

    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cost is", cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
    localStorage.setItem("totalCost", product.price);
    }
}


onLoadCartNumbers();