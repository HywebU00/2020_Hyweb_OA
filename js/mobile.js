const hamBtn = document.querySelector(".js-hamBtn");
const loginContent = document.querySelector(".l-mobile-login-content");
const loginCloseBtn = document.querySelector(
  ".l-mobile-login-content_close_btn"
);
const worksheetBtn = document.querySelector(".js-worksheetBtn");
const worksheetContent = document.querySelector(".l-mobile-footer-worksheet");
const mobileMain = document.querySelector(".l-mobile-main");

//點擊漢堡選單 展開登入頁
if (hamBtn != null) {
  hamBtn.addEventListener("click", function () {
    let opacity = 0;
    loginContent.style.display = "flex";
    function fadeIn(el, time) {
      el.style.opacity = 0;
      el.style.display = "flex";
      let last = +new Date();
      // 增加opacity的數值
      let tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();
        if (+el.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
            setTimeout(tick, 1);
        }
      };
      tick();
    }
    fadeIn(loginContent, 16);
  });
}

//關閉登入頁
if (loginCloseBtn != null) {
  loginCloseBtn.addEventListener("click", function () {
    loginContent.style.display = "none";
  });
}

//展開下方選取區塊
if (worksheetBtn != null) {
  worksheetBtn.addEventListener("click", function () {
    worksheetContent.classList.toggle("js-worksheet-show");
  });
}

//scrollbar 控制視窗收合
const dateNavbar = document.querySelector(".l-mobile-date-navbar");
const homepage = document.querySelector(".l-mobile-homepage");
const navbarName = document.querySelector(".l-mobile-navbar_name");
// let scrollBarPosition = 11.43;
if (mobileMain != null) {
  mobileMain.addEventListener("scroll", function () {
    if (mobileMain.scrollTop > 45) {
      dateNavbar.classList.add("js-dateNavbar-close");
      navbarName.classList.add("js-navbar-name-show");
    }
    if (mobileMain.scrollTop < 45) {
      dateNavbar.classList.remove("js-dateNavbar-close");
      navbarName.classList.remove("js-navbar-name-show");
    }
  });
}
