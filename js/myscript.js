// Dropdown toggle
document.querySelectorAll('.dropdown-parent > a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling;
    if (dropdown) {
      dropdown.classList.toggle('open');
    }
  });
});

// Counter animation
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
    if (!isNaN(target)) {
      animateCounter(counter, target);
    }
  });
});

// Owl Carousel initializations
$(document).ready(function () {
  $('.brand-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoHeight: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    autoplaySpeed: 1500,
    navText: false,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 }
    }
  });

  $(".case-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    smartSpeed: 800,
    dots: true,
    nav: true,
    responsive: {
      0: { items: 1 },
      750: { items: 2 },
      1000: { items: 4 }
    }
  });
  $('.latest_main_div').owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: false,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:3 }
      }
    });

});

// Toggle dropdown on parent click
document.querySelectorAll('.dropdown-parent > a').forEach(a => {
  a.addEventListener('click', e => {
    const parent = a.parentElement;
    parent.classList.toggle('open');
    e.preventDefault();
  });
});

// Typing effect
const config = {
  "t_animated_words_banner": {
    "show_cursor": "0",
    "typing_speed": "low",
    "text_items": [
      ["customers", "audience", "clients", "patience", "viewers", "stakeholders"],
      ["content", "legal documents", "treatment plan", "voice-over", "communication"]
    ]
  }
};

const banners = [
  {
    textId: 'text-1',
    caretId: 'caret-1',
    words: config.t_animated_words_banner.text_items[0]
  },
  {
    textId: 'text-2',
    caretId: 'caret-2',
    words: config.t_animated_words_banner.text_items[1]
  }
];

banners.forEach(({ textId, caretId, words }) => {
  const textEl = document.getElementById(textId);
  const caretEl = document.getElementById(caretId);

  if (config.t_animated_words_banner.show_cursor === "0" && caretEl) {
    caretEl.style.display = "none";
  }

  if (!textEl) return;

  let wordIndex = 0;
  let charIndex = 0;

  function typeWord() {
    const word = words[wordIndex];
    textEl.textContent = word.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex < word.length) {
      setTimeout(typeWord, 100);
    } else {
      setTimeout(() => {
        eraseWord(() => {
          wordIndex = (wordIndex + 1) % words.length;
          charIndex = 0;
          typeWord();
        });
      }, 3000);
    }
  }

  function eraseWord(callback) {
    const current = textEl.textContent;
    if (current.length > 0) {
      textEl.textContent = current.slice(0, -1);
      setTimeout(() => eraseWord(callback), 50);
    } else {
      callback();
    }
  }

  typeWord();
});

$(document).ready(function(){
    $('.case-study-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
          slideTransition: "linear",
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        }
      }
    });
  });
   $(document).ready(function () {
    var rows = $(".case-row");
    var rowsToShow = 4;
    var increment = 2;

    rows.hide();
    rows.slice(0, rowsToShow).show();

    $("#loadMoreBtn").click(function () {
      rowsToShow += increment;
      rows.slice(0, rowsToShow).slideDown();

      if (rowsToShow >= rows.length) {
        $(this).hide();
      }
    });
  });

// pagination

var items = $(".blog-detailmain .main-blog-div");
var numItems = items.length;
var perPage = 9;

items.slice(perPage).hide();

if (numItems > perPage) {
  $('.blog-listing-con #pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    }
  });
} else {
  $('.blog-listing-con #pagination-container').hide(); // Hides pagination if not needed
}

$(document).ready(function(){
  $('.featured_blog_main').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
    ],
    responsive:{
      0:{ items:1 },
      768:{ items:1 },
      1200:{ items:1 }
    }
  });
});


  const loadCount = 3; // Number of FAQs to load at a time
  let currentIndex = 3; // Start from index 3 (after first 3 visible)
  const allFaqs = document.querySelectorAll('.faq-box');
  const loadMoreBtn = document.querySelector('.load-more-btn');

  function loadMoreFAQs() {
    let shown = 0;
    for (let i = currentIndex; i < allFaqs.length && shown < loadCount; i++) {
      if (allFaqs[i].style.display === "none") {
        allFaqs[i].style.display = "block";
        shown++;
        currentIndex++;
      }
    }

    // Hide button if all FAQs are now visible
    if (currentIndex >= allFaqs.length) {
      loadMoreBtn.style.display = "none";
    }
  }