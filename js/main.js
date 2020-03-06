! function(e, n, t, o) {
  "use strict";

  function i() {
    e(".loader__svg text").attr("fill", "url(#pattern" + d + ")"), d = d < e(".loader__svg pattern").length ? d + 1 : 1
  }

  function a() {
    e(".preloader-svg").fadeOut(300), clearInterval(h)
  }

  function s(n, t, o) {
    if (!n) return console.info("no img selector"), !1;
    var i, a;
    e(n).each(function() {
      a = e(this), i = a.closest(t), i = i.length ? i : a.parent(), o ? (i.css("background-image", "url(" + this.src + ")"), a.css("visibility", "hidden")) : (i.css("background-image", "url(" + this.src + ")"), a.hide())
    })
  }

  function r(n) {
    var t = e(n).attr("href");
    e("html, body").animate({
      scrollTop: e(t).offset().top - 50
    }, 1e3)
  }

  function l() {
    e(n).width() > 1024 ? e.stellar() : (e.stellar("destroy"), e(".parallax").css("background-position", "center"))
  }

  function c() {
    e(n).height();
    e(".home-banner").css("height", "100vh")
  }
  var h, d = 1;
  e(t).on("ready", function() {
    e(".loader__svg pattern").length && (h = setInterval(function() {
      i()
    }, 200))
  }), e(n).on("load", function() {
    e(".loader__svg pattern").length && setTimeout(a, 900)
  });
  var u = e(".navigation");
  e(".nav-menu-icon").click(function(n) {
    e(this).toggleClass("active"), u.find(".main-menu").slideToggle()
  }), s(".js-bg-img > img", ".js-bg-img"), s(".js-bg-img_with-height > img", ".js-bg-img_with-height", !0), e(".scroll-top-arrow").on("click", function() {
    return e("html, body").animate({
      scrollTop: 0
    }, 800), !1
  });
  var g = (new Swiper(".swiper-container.presentation", {
    slidesPerView: 4,
    centeredSlides: !0,
    spaceBetween: 30,
    autoplay: 3e3,
    autoplayDisableOnInteraction: !0,
    preventClicks: !0,
    loop: !0,
    loopedSlides: 4,
    breakpoints: {
      991: {
        spaceBetween: 20,
        slidesPerView: 2,
        autoplay: 3e3
      },
      550: {
        spaceBetween: 15,
        slidesPerView: 1,
        autoplay: 3e3
      }
    }
  }), new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 100,
    mobile: !1,
    live: !0
  }).init(), e(".zoom-gallery"));
  g.magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: !1,
    closeBtnInside: !1,
    gallery: {
      enabled: !0
    },
    zoom: {
      enabled: !0,
      duration: 300,
      opener: function(e) {
        return e.find("img")
      }
    }
  });
  var f = e(".menu-item a:not(.url)");
  f.click(function(e) {
    e.preventDefault(), r(this)
  }), e(n).on("load", function() {
    l(), c()
  }), e(n).on("resize", function() {
    c()
  });
  var m = e(".fix-header").offset().top;
  e(n).scroll(function() {
    e(this).scrollTop() > 300 ? e(".scroll-top-arrow").fadeIn("slow") : e(".scroll-top-arrow").fadeOut("slow"), e(this).scrollTop() >= m ? e(".fix-header").addClass("sticky") : e(this).scrollTop() <= m && e(".fix-header").removeClass("sticky")
  }), e(n).on("load resize", function() {
    var t = e("section.home-banner .banner-content").outerHeight(),
        o = e(".home-banner").outerHeight();
    e(n).width() < 767 ? t + 120 > o && e(".home-banner").css("min-height", t + 70) : e(n).width() < 992 ? t + 170 > o && e(".home-banner").css("min-height", t + 170) : e(".home-banner").css("min-height", "100vh")
  })
}(jQuery, window, document);