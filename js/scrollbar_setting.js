//+++++++++++++++++++++++++++++++
//scrollbar 改變樣式顏色
//+++++++++++++++++++++++++++++++
document.addEventListener("DOMContentLoaded", function () {
  let l_main_content = document.querySelectorAll(".l-main-content");
  let l_main_writeHours = document.querySelectorAll(".l-main-writeHours");
  let scrollbar_style = document.querySelectorAll(".js-scrollbar-style");
  let c_modal_content_sidebar = document.querySelectorAll(
    ".c-modal-content__sidebar"
  );
  let c_modal_content_calendar_content = document.querySelectorAll(
    ".c-modal-content__calendar__content"
  );

  let c_dropdown_content_height = document.querySelectorAll(
    ".c-dropdown__content__height"
  );

  //menu scroll
  let c_sidebar_content_listGroup = document.querySelectorAll(
    ".c-sidebar-content__listGroup"
  );
  let addMember_content = document.querySelectorAll(".addMember-content");

  //modal scroll
  OverlayScrollbars(c_modal_content_sidebar, {
    className: "os-theme-dark",
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      clickScrolling: true,
      autoHide: "leave",
    },
  });
  OverlayScrollbars(c_modal_content_calendar_content, {
    className: "os-theme-dark",
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      clickScrolling: true,
      autoHide: "leave",
    },
    overflowBehavior: {
      x: "hidden",
      y: "scroll",
    },
  });

  //dropdown scroll
  OverlayScrollbars(c_dropdown_content_height, {
    className: "os-theme-dark",
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      clickScrolling: true,
      autoHide: "leave",
    },
    overflowBehavior: {
      x: "hidden",
      y: "scroll",
    },
  });

  OverlayScrollbars(c_sidebar_content_listGroup, {
    className: "os-theme-dark",
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      clickScrolling: true,
      autoHide: "leave",
    },
  });
  OverlayScrollbars(l_main_content, {
    className: "os-theme-dark",
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      clickScrolling: true,
      autoHide: "leave",
    },
    overflowBehavior: {
      x: "hidden",
      y: "scroll",
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
    overflowBehavior: {
      x: "hidden",
      y: "scroll",
    },
  });
  OverlayScrollbars(scrollbar_style, {
    className: "os-theme-dark",
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      clickScrolling: true,
      autoHide: "leave",
    },
    overflowBehavior: {
      x: "hidden",
      y: "scroll",
    },
  });
  OverlayScrollbars(addMember_content, {
    className: "os-theme-dark",
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      clickScrolling: true,
      autoHide: "leave",
    },
    overflowBehavior: {
      x: "hidden",
      y: "scroll",
    },
  });
});
