function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}
window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})
// slider 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  // slider 
  if (document.getElementsByClassName('testi-slider')[0] != undefined) {
    var slider = tns({
        container: '.testi-slider',
        loop: true,
        navPosition: "bottom",
        speed : 400,
        center : true,
        mouseDrag: true,
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        responsive: {        
            640: {
                edgePadding: 20,
                gutter: 20,
                items: 1
              },
              700: {
                edgePadding: 20,
                gutter: 30,
                items: 1
              },
              900: {
                edgePadding: 20,
                items: 1
              }
        }
    });
    }