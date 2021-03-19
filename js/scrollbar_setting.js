//+++++++++++++++++++++++++++++++
//scrollbar 改變樣式顏色
//+++++++++++++++++++++++++++++++
document.addEventListener("DOMContentLoaded", function () {
  let l_main_content = document.querySelectorAll(".l-main-content");
  let l_main_writeHours = document.querySelectorAll(".l-main-writeHours");

  OverlayScrollbars(l_main_content, {
    className: "os-theme-dark",
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      clickScrolling: true,
      autoHide: "leave",
    },
  });

  OverlayScrollbars(l_main_writeHours, {
    className: "os-theme-dark",
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      clickScrolling: true,
      autoHide: "leave",
    },
  });
});
