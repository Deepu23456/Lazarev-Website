function locomotiveScrolltrigger() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function navAnimation() {
  let nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    if (window.innerWidth > 500) {
      tl.to(".nav-bottom", {
        height: "200px",
      });
      tl.to(".nav-part2 h5", {
        display: "block",
      });
      tl.to(".nav-part2 h5 span", {
        y: 0,
        stagger: {
          amount: 0.4,
        },
      });
    } else if (window.innerWidth < 500) {
      tl.to(".nav-bottom", {
        height: "0px",
      });
    }
  });
  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.1,
      },
      duration: 0.2,
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to(".nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

function page2Animation() {
  let rightElems = document.querySelectorAll(".right-elem");
  rightElems.forEach((elem) => {
    if(window.innerWidth > 500) {
      elem.addEventListener("mouseenter", () => {
        gsap.to(elem.childNodes[3], {
          opacity: 1,
          scale: 1,
        });
      });
  
      elem.addEventListener("mouseleave", () => {
        gsap.to(elem.childNodes[3], {
          opacity: 0,
          scale: 0,
        });
      });
  
      elem.addEventListener("mousemove", (dets) => {
        gsap.to(elem.childNodes[3], {
          x: dets.x - elem.getBoundingClientRect().x - 50,
          y: dets.y - elem.getBoundingClientRect().y - 150,
        });
      });
    } else if(window.innerWidth < 500) {
      return
    }
  });
}

function videoAnimation() {
  let page3Center = document.querySelector(".page3-center");
  let video = document.querySelector(".page3 video");

  page3Center.addEventListener("click", () => {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
    gsap.to("nav", {
      opacity: 0,
    });
  });

  video.addEventListener("click", () => {
    video.load();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
    gsap.to("nav", {
      opacity: 1,
    });
  });
}

function page6Animation() {
  let sections = document.querySelectorAll(".sec-right");
  sections.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });

    elem.addEventListener("mouseleave", () => {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
      elem.childNodes[5].style.opacity = 0;
      elem.childNodes[5].style.scale = 0;
    });

    elem.addEventListener("mousemove", (dets) => {
      elem.childNodes[5].style.opacity = 1;
      elem.childNodes[5].style.scale = 1;
      gsap.to(elem.childNodes[5], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 120,
      });
    });
  });

  let videoSection = document.querySelectorAll(".video-section");
  videoSection.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });

    elem.addEventListener("mouseleave", () => {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}

function page9Animation() {
  gsap.from(".btm-parts h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".btm-parts",
      scroller: "body",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}

function loadingAnimation() {
  let tl = gsap.timeline();
  tl.from("body", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("body", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(30%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from(".page1 h1", {
    opacity: 0,
    stagger: 0.2,
    duration: 0.3,
    y: 30,
  });
  tl.from(".page1 p, .page1 div", {
    opacity: 0,
    stagger: 0.2,
    duration: 0.3,
  });
}

function mobileNavOpen() {
  let open = document.querySelector(".menu-open");
  let body = document.querySelector("body");
  let flag = 0;
  open.addEventListener("click", () => {
    if (flag == 0) {
      body.classList.add("open");
      open.innerHTML = `<i class="ri-close-line"></i>`;
      flag = 1;
    } else if (flag == 1) {
      body.classList.remove("open");
      open.innerHTML = `<i class="ri-menu-3-line"></i>`;
      flag = 0;
    }
  });
}
page9Animation()
navAnimation()
// locomotiveScrolltrigger()
page2Animation();
videoAnimation()
page6Animation()
loadingAnimation()
mobileNavOpen()