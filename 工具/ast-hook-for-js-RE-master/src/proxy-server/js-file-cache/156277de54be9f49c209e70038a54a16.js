!function () {
  window;
  const e = cc11001100_hook("e", document.documentElement, "var-init");
  if (e.classList.remove("no-js"), e.classList.add("js"), document.body.classList.contains("has-animations")) {
    (window.sr = cc11001100_hook("window.sr", ScrollReveal(), "assign")).reveal(".feature, .pricing-table-inner", {
      duration: cc11001100_hook("duration", 600, "object-key-init"),
      distance: cc11001100_hook("distance", "20px", "object-key-init"),
      easing: cc11001100_hook("easing", "cubic-bezier(0.5, -0.01, 0, 1.005)", "object-key-init"),
      origin: cc11001100_hook("origin", "bottom", "object-key-init"),
      interval: cc11001100_hook("interval", 100, "object-key-init")
    }), e.classList.add("anime-ready"), anime.timeline({
      targets: cc11001100_hook("targets", ".hero-figure-box-05", "object-key-init")
    }).add({
      duration: cc11001100_hook("duration", 400, "object-key-init"),
      easing: cc11001100_hook("easing", "easeInOutExpo", "object-key-init"),
      scaleX: cc11001100_hook("scaleX", [.05, .05], "object-key-init"),
      scaleY: cc11001100_hook("scaleY", [0, 1], "object-key-init"),
      perspective: cc11001100_hook("perspective", "500px", "object-key-init"),
      delay: cc11001100_hook("delay", anime.random(0, 400), "object-key-init")
    }).add({
      duration: cc11001100_hook("duration", 400, "object-key-init"),
      easing: cc11001100_hook("easing", "easeInOutExpo", "object-key-init"),
      scaleX: cc11001100_hook("scaleX", 1, "object-key-init")
    }).add({
      duration: cc11001100_hook("duration", 800, "object-key-init"),
      rotateY: cc11001100_hook("rotateY", "-15deg", "object-key-init"),
      rotateX: cc11001100_hook("rotateX", "8deg", "object-key-init"),
      rotateZ: cc11001100_hook("rotateZ", "-1deg", "object-key-init")
    }), anime.timeline({
      targets: cc11001100_hook("targets", ".hero-figure-box-06, .hero-figure-box-07", "object-key-init")
    }).add({
      duration: cc11001100_hook("duration", 400, "object-key-init"),
      easing: cc11001100_hook("easing", "easeInOutExpo", "object-key-init"),
      scaleX: cc11001100_hook("scaleX", [.05, .05], "object-key-init"),
      scaleY: cc11001100_hook("scaleY", [0, 1], "object-key-init"),
      perspective: cc11001100_hook("perspective", "500px", "object-key-init"),
      delay: cc11001100_hook("delay", anime.random(0, 400), "object-key-init")
    }).add({
      duration: cc11001100_hook("duration", 400, "object-key-init"),
      easing: cc11001100_hook("easing", "easeInOutExpo", "object-key-init"),
      scaleX: cc11001100_hook("scaleX", 1, "object-key-init")
    }).add({
      duration: cc11001100_hook("duration", 800, "object-key-init"),
      rotateZ: cc11001100_hook("rotateZ", "20deg", "object-key-init")
    }), anime({
      targets: cc11001100_hook("targets", ".hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10", "object-key-init"),
      duration: cc11001100_hook("duration", anime.random(600, 800), "object-key-init"),
      delay: cc11001100_hook("delay", anime.random(600, 800), "object-key-init"),
      rotate: cc11001100_hook("rotate", [anime.random(-360, 360), function (e) {
        return e.getAttribute("data-rotation");
      }], "object-key-init"),
      scale: cc11001100_hook("scale", [.7, 1], "object-key-init"),
      opacity: cc11001100_hook("opacity", [0, 1], "object-key-init"),
      easing: cc11001100_hook("easing", "easeInOutExpo", "object-key-init")
    });
  }
}();