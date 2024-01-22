!function () {
  window.login = cc11001100_hook("window.login", true, "assign");
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
function submit() {
  $.ajax({
    url: cc11001100_hook("url", '/api/answer', "object-key-init"),
    dataType: cc11001100_hook("dataType", "json", "object-key-init"),
    async: cc11001100_hook("async", false, "object-key-init"),
    data: {
      'serial': cc11001100_hook('serial', parseInt(location.href.split('/')[location.href.split('/').length - 1]), "object-key-init"),
      'answer': cc11001100_hook('answer', $('#result_value').val(), "object-key-init")
    },
    type: cc11001100_hook("type", "GET", "object-key-init"),
    beforeSend: function (request) {},
    success: function (data) {
      let result = cc11001100_hook("result", data.status_code, "var-init");
      if (result === "1") {
        successAlert('答案正确，恭喜通关~ 即将跳转回列表页');
        setTimeout(() => {
          location.href = cc11001100_hook("location.href", '/list', "assign");
        }, 2000);
      } else if (result === "5") {
        failedAlert('未登录，请检查登录状态\n您的IP：' + data.IP);
      } else {
        failedAlert('答案错误，请再思考一下吧~ 如遇数据消失，刷新即可');
      }
    },
    complete: function () {},
    error: function () {}
  });
}
;

// let ad_close = document.createElement('span')
// ad_close.innerHTML = '广告  X'
// ad_close.setAttribute('class', 'ad_close')
// ad_close.setAttribute('onclick', "document.getElementsByClassName('ad')[0].style.display = 'none'")
//
// let ad_div = document.createElement('div')
// ad_div.setAttribute('class', 'ad')
// // 广告
// let ad_a_1 = document.createElement('a')
// ad_a_1.href = 'https://kip.ipzan.com'
// let ad_img_1 = document.createElement('img')
// ad_img_1.src = '/static/match2023/ad/pinzan.jpg'
// ad_a_1.setAttribute('target', '_blank')
//
// ad_a_1.appendChild(ad_img_1)
//
//
// let ad_a_2 = document.createElement('a')
// ad_a_2.href = 'https://www.yescaptcha.com/i/YoqNk4'
// ad_a_2.style.marginTop = '10px'
// let ad_img_2 = document.createElement('img')
// ad_img_2.src = '/static/match2023/ad/yes.jpg'
// ad_a_2.setAttribute('target', '_blank')
// ad_a_2.appendChild(ad_img_2)
//
//
// ad_div.appendChild(ad_close)
// ad_div.appendChild(ad_a_1)
// ad_div.appendChild(ad_a_2)
// document.body.appendChild(ad_div)