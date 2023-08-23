// new Swiper(".swiper", {
//   //Стрелки
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   //Буллеты
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },


// })

let menuBtn = document.querySelector('.header-btn');
let menu = document.querySelector('.navigation');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})