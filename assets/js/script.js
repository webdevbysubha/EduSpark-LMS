'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElem);

const filterButtons = document.querySelectorAll(".filter-btn");
const courseItems = document.querySelectorAll(".course-card-wrap");


filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const selectedCategory = btn.getAttribute("data-category");

    courseItems.forEach(item => {
      const itemCategory = item.getAttribute("data-category");
      if (itemCategory === selectedCategory) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const defaultCategory = "popular";

  filterButtons.forEach(btn => {
    if (btn.getAttribute("data-category") === defaultCategory) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  courseItems.forEach(item => {
    const itemCategory = item.getAttribute("data-category");
    if (itemCategory === defaultCategory) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
});

const slider = document.querySelector(".testimonial-slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let autoScroll;

function startAutoScroll() {
  autoScroll = setInterval(() => {
    slider.scrollBy({ left: 320, behavior: "smooth" });

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 2000);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 320, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -320, behavior: "smooth" });
});

slider.addEventListener("mouseenter", stopAutoScroll);
slider.addEventListener("mouseleave", startAutoScroll);

startAutoScroll();


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


document.getElementById("notifBtn").addEventListener("click", () => {
  document.getElementById("notifDropdown").classList.toggle("active");
});

