$(document).ready(function () {
  //TIMELINE DE ANIMAÇÃO AO ENTRAR NA PÁGINA

  let tl1 = gsap.timeline();
  tl1.from(".logo", { duration: 3, y: 300, ease: Back.easeOut.config(1.7) });
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
