//+++++++++++++++++++++
//   彈跳視窗
//+++++++++++++++++++++
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, open);
});

//++++++++++++++++++
//  tab切換效果
//++++++++++++++++++
$(document).ready(function () {
  $(".tabs").tabs();
});

//++++++++++++++++++
//  select效果
//++++++++++++++++++
$(document).ready(function () {
  $("select").formSelect();
});

//+++++++++++++++++++++++++
//  accordion手風琴效果
//+++++++++++++++++++++++++

document.addEventListener("DOMContentLoaded", function () {
  let elem = document.querySelectorAll(".collapsible");
  var instance = M.Collapsible.init(elem, {
    accordion: false,
  });
  $(".collapsible-btn").click(function () {
    $(this).find(".vertical").toggleClass("open");
    $(this).find(".horizontal").toggleClass("open");
    //$(this).parent().parent().parent().addClass("is-accordion-active");
  });
});

//++++++++++++++++++
//  星星樣式改變
//++++++++++++++++++
let starBtn = document.querySelectorAll(".o-card__iconBtn");
if (starBtn != null) {
  for (let i = 0; i < starBtn.length; i++) {
    starBtn[i].addEventListener("click", function () {
      if (starBtn[i].classList.contains("o-card__star-active") === true) {
        starBtn[i].classList.remove("o-card__star-active");
        starBtn[i].classList.add("o-card__star-default");
      } else {
        starBtn[i].classList.remove("o-card__star-default");
        starBtn[i].classList.add("o-card__star-active");
      }
    });
  }
}

//++++++++++++++++++
// datePicker days
//++++++++++++++++++
if ($("#demo") != null) {
  $("#demo").daterangepicker(
    {
      timePickerSeconds: true,
      locale: {
        format: "MM/DD/YYYY",
        separator: " - ",
        applyLabel: "確認",
        cancelLabel: "取消",
        fromLabel: "From",
        toLabel: "To",
        customRangeLabel: "Custom",
        weekLabel: "W",
        daysOfWeek: ["日", "ㄧ", "二", "三", "四", "五", "六"],
        monthNames: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        firstDay: 1,
      },
      linkedCalendars: false,
      alwaysShowCalendars: true,
      startDate: "11/07/2020",
      endDate: "11/13/2020",
    },
    function (start, end, label) {
      console.log(
        "New date range selected: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD") +
          " (predefined range: " +
          label +
          ")"
      );
    }
  );
}
//++++++++++++++++++
// datePicker day
//++++++++++++++++++
if ($("#SingleDatePicker") != null) {
  $("#SingleDatePicker").daterangepicker(
    {
      singleDatePicker: true,
      locale: {
        format: "MM/DD/YYYY",
        separator: " - ",
        applyLabel: "確認",
        cancelLabel: "Cancel",
        fromLabel: "From",
        toLabel: "To",
        customRangeLabel: "Custom",
        weekLabel: "W",
        daysOfWeek: ["日", "ㄧ", "二", "三", "四", "五", "六"],
        monthNames: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        firstDay: 1,
      },
      startDate: "11/07/2020",
      endDate: "11/13/2020",
    },
    function (start, end, label) {
      console.log(
        "New date range selected: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD") +
          " (predefined range: " +
          label +
          ")"
      );
    }
  );
}

//++++++++++++++++++
//popover 效果
//++++++++++++++++++
//$(".dropdown-trigger").dropdown();
const pop_modal = document.querySelectorAll(".pop-modal");
const pop_btn = document.querySelectorAll(".pop-btn");
const pop_content = document.querySelectorAll(".pop-content");
const confirm_btn = document.querySelectorAll(".pop-confirm-btn");
const datePicker_btn = document.querySelectorAll(".datePicker-confirm-btn");

for (let a = 0; a < pop_modal.length; a++) {
  pop_btn[a].addEventListener("click", function () {
    let item = pop_content[a].classList.contains("pop-content");
    if (item === true) {
      pop_content[a].classList.toggle("is-pop-show");
    }
  });
  pop_content[a].addEventListener("click", function () {
    let content = pop_content[a].childNodes;
    // console.log(content);
    for (let c = 0; c < content.length; c++) {
      if (content[c].tagName == "LI") {
        pop_content[a].classList.remove("is-pop-show");
      }
    }
  });
  if (confirm_btn[a] != null) {
    console.log(confirm_btn[a]);
    confirm_btn[a].addEventListener("click", function () {
      let parentlist = confirm_btn[a].parentNode.parentNode;
      parentlist.classList.remove("is-pop-show");
    });
  }
}
//++++++++++++++++++
//accordion 效果
//++++++++++++++++++
//點擊 accordion-header 底圖顏色變色
const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach(function (item) {
  item.addEventListener("click", function () {
    let a = item.classList.contains("is-accordion-active");
    if (a === false) {
      item.classList.add("is-accordion-active");
    } else {
      item.classList.remove("is-accordion-active");
    }
  });
});
