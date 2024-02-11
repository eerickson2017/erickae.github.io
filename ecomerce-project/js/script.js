const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const star = document.getElementById('star');
const pro = document.getElementById('pro');
const proContainer = document.getElementById('pro-container');
const features = document.getElementById('feature');
const newArrivals = document.getElementById('pro');
let html = '';


if (bar){
    bar.addEventListener('click', () => {
    nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () => {
    nav.classList.remove('active');
    })
}



// addcart

var addcart = document.getElementsByClassName('addcart')


console.log(addcart);

//Product desc loop function 

function productdesc(){
    let html = '';
    for (let i = 0; i <= 8; i++){
        html += `<div class="pro">
        <div id="pro">
           ${getRandomPicture()}
        </div>
        <div class="desc">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>$74</h4>
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
    </div>`;
    }
    return html;
}
proContainer.innerHTML = productdesc();

//generate randompicture function

    function getRandomPicture(){
        let html = '';
        let randomNum = Math.floor(Math.random() * 8) +1;
        return html += `<img src="imgs/products/f${randomNum}.jpg" alt=""></img>`;
    }

    //featurebox loop
    
    let icons = '';
    for(let key in feature){
        
        icons += `<div class="fe-box">
        <img src=${feature[key].img} alt="">
        <h6>${feature[key].name}</h6>
        </div>`;
    }
    features.innerHTML = icons;

    //New Arrivals loop

    let descCard ='';

    for(let key in newArrival){
        descCard += `<div class="pro">
        <img src=${newArrival[key].img} alt="">
        <div class="desc">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>$ ${newArrival[key].price}</h4>
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
    </div>`;
    }

    newArrivals.innerHTML = descCard;

    








