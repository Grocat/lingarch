
 document.querySelectorAll('.dropdown-parent > a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const dropdown = this.nextElementSibling;
      dropdown.classList.toggle('open');
    });
  });

function animateCounter(element, target) {
  let count = 0;
  const screenSize = window.innerWidth;
  const speed = screenSize < 768 ? 100 : 200;
  const increment = target / speed;

  const updateCounter = () => {
    count += increment;
    if (count >= target) {
      element.textContent = target;
    } else {
      element.textContent = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"));
    animateCounter(counter, target);
  });
});
$(document).ready(function () {
$('.brand-carousel').owlCarousel({
   autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: "linear",
  autoHeight:true,
  autoplayTimeout: 1000,
  autoplayHoverPause: false,
  autoplaySpeed: 1500,
  navText: false, // Consistent speed calculations
    responsive: {
        0: { items: 2 },
        600: { items: 4 },
        1000: { items: 6 }
    }
});

  $(".case-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false ,
    smartSpeed: 800,
    dots: true,
    nav:true,
    responsive: {
      0: {
        items: 1
      },
      750: {
        items: 2
      },
      1000: {
        items: 4
      } // Changed from 3 to 4 for desktop view
    }
  });
});
