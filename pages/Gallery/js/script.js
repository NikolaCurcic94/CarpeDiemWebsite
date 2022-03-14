/*****************************Menu button**********************************/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    hamburger.classList.add("open");
    menuOpen = true;
    navLinks.classList.add("nav__links--open");
  } else {
    hamburger.classList.remove("open");
    menuOpen = false;
    navLinks.classList.remove("nav__links--open");
  }
});

/*****************************Carousel**********************************/

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

/*****************************Map**********************************/

var myMap = L.map("map", {
  center: [44.81528196157618, 20.418752497461206],
  zoom: 14,
  doubleClickZoom: true,
  scrollWheelZoom: false,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

var marker = L.marker([44.81528196157618, 20.418752497461206]).addTo(myMap);
