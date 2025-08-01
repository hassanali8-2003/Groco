let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick= () =>{
    searchForm.classList.toggle('active');
    cartShopping.classList.remove('active');
    userLogin.classList.remove('active');
    navbar1.classList.remove('active');
}

let cartShopping=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick= () =>{
    cartShopping.classList.toggle('active');
    searchForm.classList.remove('active');
    userLogin.classList.remove('active');
    navbar1.classList.remove('active');   
}


let userLogin=document.querySelector('.login-form');

document.querySelector('#user-btn').onclick= () =>{
    userLogin.classList.toggle('active');
    searchForm.classList.remove('active');
    cartShopping.classList.remove('active');
    navbar1.classList.remove('active');  
}



let navbar1=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick= () =>{
    navbar1.classList.toggle('active');
}

window.onscroll=()=>{
    searchForm.classList.remove('active');
    cartShopping.classList.remove('active');
    navbar1.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
    
    
    breakpoints: {
    0:{
        slidesPerView:1,
    },
768:{
    sldesPerView:2,
},
1020:{
    slidesPerView:5,
},
    },
  });

  
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
    
    breakpoints: {
    0:{
        slidesPerView:1,
    },
768:{
    sldesPerView:2,
},
1020:{
    slidesPerView:5,
},
    },
  });