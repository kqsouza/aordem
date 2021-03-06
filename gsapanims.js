$(document).ready(function () {
  //TIMELINE DE ANIMAÇÃO AO ENTRAR NA PÁGINA

  let tl1 = gsap.timeline();

  tl1.to(".line--top", 0.6, { width: "100%", ease: Power2.easeIn });
  tl1.to(".line--right", 0.6, { height: "100%", ease: Power0.easeNone });
  tl1.to(".line--bottom", 0.6, { width: "100%", ease: Power0.easeNone });
  tl1.to(".line--left", 0.6, { height: "100%", ease: Power2.easeOut });
  tl1.to(".mask", 1, { left: "100%" });
  tl1.to(".transition-wrapper", { duration: 1, display: "none" });

  tl1.from(
    ".logo",
    { duration: 3, y: 300, ease: Back.easeOut.config(1.7) },
    "-=1"
  );
  tl1.from(".logo", { duration: 2.5, opacity: 0 }, "-=2.5");
  tl1.from(".redessociais i", {
    duration: 0.8,
    stagger: 0.25,
    opacity: 0,
    x: 40,
  });
  tl1.from(
    "#menuBox",
    { duration: 1, x: 40, opacity: 0, ease: Expo.easeOut },
    "-=1"
  );
  tl1.from(".navbar-brand", { duration: 2, x: -20, opacity: 0 }, "-=0.5");
  tl1.from(".wrapper-arrow", {
    duration: 1,
    y: 30,
    ease: Expo.easeOut,
    opacity: 0,
  });
  tl1.from(".a .spin svg", { duration: 1, y: 20, opacity: 0 }, "-=2.5");
  tl1
    .fromTo(
      ".a .spin svg",
      {
        rotation: 0,
      },
      {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
      },
      0
    )
    .timeScale(1);
  //FIM DA TIMELINE DE ANIMAÇÃO AO ENTRAR NA PÁGINA.

  let tlInfiniteArrow = gsap.timeline({ repeat: -1, yoyo: true });
  tlInfiniteArrow.to(".wrapper-arrow i", {
    duration: 0.5,
    y: -10,
    ease: Back.easeOut.config(1.7),
  });

  function mouseOverItems(target, name) {
    let tlOverItem = gsap.timeline();
    tlOverItem.to(`${name}${target}`, {
      duration: 0.5,
      scale: 1.3,
      ease: Expo.easeOut,
    });
  }

  function mouseOutItems(target, name) {
    let tlOutItem = gsap.timeline();
    tlOutItem.to(`${name}${target}`, {
      duration: 0.5,
      scale: 1,
      ease: Power1.easeOut,
    });
  }

  $(".redessociais i").hover(
    function (evt) {
      mouseOverItems(evt.target.id, "#");
    },
    function (evt) {
      mouseOutItems(evt.target.id, "#");
    }
  );

  $(".navbar-brand").hover(
    function () {
      let riseLogo = gsap.timeline();
      riseLogo.to(".b img", { duration: 3, y: -23, ease: Expo.easeOut });
    },
    function () {
      let downLogo = gsap.timeline();
      downLogo.to(".b img", { duration: 3, y: 0, ease: Expo.easeOut });
    }
  );

  var menu = document.getElementById("menuBox");
  var bar1 = document.querySelector(".bar1");
  var bar2 = document.querySelector(".bar2");
  var bar3 = document.querySelector(".bar3");
  var isChangingState = false;
  var isOpen = false;
  var menuTL = new TimelineMax();

  function menuOver() {
    if (!isChangingState) {
      menuTL.clear();
      if (!isOpen) {
        menuTL
          .to(bar1, 0.35, { x: 12, ease: Power1.easeOut }, "one")
          .to(bar3, 0.35, { x: -16, ease: Power1.easeOut }, "one");
      }
    }
  }
  function menuOut() {
    if (!isChangingState) {
      menuTL.clear();
      if (!isOpen) {
        menuTL
          .to(bar1, 0.35, { x: 0, ease: Power1.easeOut }, "one")
          .to(bar3, 0.35, { x: 0, ease: Power1.easeOut }, "one");
      }
    }
  }

  $("#menuBox").hover(
    function () {
      menuOver();
    },
    function () {
      menuOut();
    }
  );
});
