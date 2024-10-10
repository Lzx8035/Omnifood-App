///////////////////////////////////////////////////////////
// Start
// console.log("Hello world!");

// const myName = "Lea Liang";

// // class selector
// const h1 = document.querySelector(".heading-primary");

// console.log(myName);
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work (menu come in and out)

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// in html create page anker like EL:id='cta', BTN:href='#cta'
// Don't forget #
// # is the id selector

// WOW
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
// when hero move out of viewport, make the nav sticky

const obs = new IntersectionObserver(
  function (entries) {
    console.log(entries);

    const ent = entries[0];
    // console.log(ent);

    if (!ent.isIntersecting) {
      // document.querySelector(".header").classList.add("sticky");
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      // document.querySelector(".header").classList.remove("sticky");
      document.body.classList.remove("sticky");
    }
  },

  {
    root: null, // In the viewport
    threshold: 0, // 0% in the view
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// ???
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
