gsap.registerPlugin(ScrollTrigger);
Shery.mouseFollower({
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

function skills() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".skills",
      pin: true,
      start: "50% 50%",
      end: "200% 50%",
      // markers: true,
      scrub: 1,
    },
  });
  tl.to(
    "#html",
    {
      opacity: 1,
      filter: "blur(0px)",
    },
    "a"
  );
  tl.to(
    "#git",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
  tl.to(
    "#react",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
  tl.to(
    "#javascript",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
  tl.to(
    "#mongo",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
  tl.to(
    "#github",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
  tl.to(
    "#css",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
  tl.to(
    "#tailwind",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
  tl.to(
    "#node",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
  tl.to(
    "#gsap",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
  tl.to(
    "#express",
    {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    },
    "a"
  );
}
skills();

gsap.to(".content img", {
  rotate: 360,
  duration: 15,
  repeat: -1,
  ease: "linear",
});
Shery.makeMagnet(".nav a", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

var elems = document.querySelectorAll(".elem");
var page3 = document.querySelector(".page3");
elems.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var bgImage = elem.getAttribute("data-img");

    page3.style.backgroundImage = `url(${bgImage})`;
  });
});

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-150%)",
      duration: 3,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 3,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});

gsap.registerPlugin(ScrollTrigger);

// scroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length
//       ? scroll.scrollTo(value, 0, 0)
//       : scroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: document.querySelector(".main").style.transform
//     ? "transform"
//     : "fixed",
// });

// Refresh ScrollTrigger on load
ScrollTrigger.refresh();

Shery.makeMagnet(".page3 h2", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

document
  .getElementById("contact-button")
  .addEventListener("click", function () {
    const email = "aryashubh08@gmail.com";
    const subject = "Contact Us";
    const body = "Hello,\n\n";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });

Shery.makeMagnet(".page7 button,a,.top", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// gsap.registerPlugin(ScrollTrigger);

gsap.to(".page5 .item", {
  transform: "translateX(-580%)",

  scrollTrigger: {
    trigger: ".page5",

    pin: true,
    start: "50% 50%",
    end: "300% 50%",
    scrub: 10,
  },
});

// Get the button element
const button = document.querySelector(".top");

// Function to scroll the page from bottom to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // This makes the scroll smooth
  });
}

// Add event listener to the button to trigger the scroll
button.addEventListener("click", scrollToTop);
