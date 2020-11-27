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
// let tab = document.querySelectorAll(".c-tabs__item__link");
// let content = document.querySelectorAll(".content");
// let clickTab;
// for (let i = 0; i < tab.length; i++) {
//   tab[i].addEventListener("click", function () {
//     clickTab = tab[i].getAttribute("data-num");
//     compare();
//   });
// }
// function compare() {
//   for (let a = 0; a < content.length; a++) {
//     let clickContent = content[a].getAttribute("data-content");
//     if (clickTab == clickContent) {
//       content[a].classList.add("is-show");
//       tab[a].classList.add("is-active");
//     } else {
//       content[a].classList.remove("is-show");
//       tab[a].classList.remove("is-active");
//     }
//   }
// }

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
  $(".accordion-header").click(function () {
    $(this).find(".vertical").toggleClass("open");
    $(this).find(".horizontal").toggleClass("open");
  });
});

//++++++++++++++++++
//  星星樣式改變
//++++++++++++++++++
let starBtn = document.querySelectorAll(".o-card__star");
if (starBtn != null) {
  for (let i = 0; i < starBtn.length; i++) {
    starBtn[i].addEventListener("click", function () {
      if (starBtn[i].classList.value == "o-card__star o-card__star-active") {
        starBtn[i].classList.value = "o-card__star o-card__star-default";
      } else {
        starBtn[i].classList.value = "o-card__star o-card__star-active";
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
//dropdown-input
//++++++++++++++++++
let dropdown = document.querySelectorAll(".dropdown");
let dropdownInput = document.querySelectorAll(".dropdown-input");
//let dropdownOverlay = document.querySelectorAll(".dropdown-overlay");
// for (let a = 0; a < dropdownInput.length; a++) {
//   //console.log(dropdownInput[a]);
//   dropdownInput[a].addEventListener("click", function () {
//     dropdown[a].classList.add("is-dropdown-open");
//     // let lay = document.getElementById("body");
//     // lay.classList.add("dropdown-overlay");
//     document.body.classList.add("dropdown-overlay");
//   });
// }

//++++++++++++++++++
//popover 效果
//++++++++++++++++++
//$(".dropdown-trigger").dropdown();
const pop_modal = document.querySelectorAll(".pop-modal");
const pop_btn = document.querySelectorAll(".pop-btn");
const pop_content = document.querySelectorAll(".pop-content");
const confirm__btn = document.querySelectorAll(".c-dropdown__title__confirm");

for (let a = 0; a < pop_modal.length; a++) {
  pop_btn[a].addEventListener("click", function () {
    let item = pop_content[a].classList.contains("pop-content");
    if (item === true) {
      pop_content[a].classList.toggle("is-pop-show");
    }
  });
  pop_content[a].addEventListener("click", function () {
    let content = pop_content[a].childNodes;
    for (let c = 0; c < content.length; c++) {
      if (content[c].tagName == "LI") {
        pop_content[a].classList.remove("is-pop-show");
      }
    }
  });
  if (confirm__btn[a] != null) {
    confirm__btn[a].addEventListener("click", function () {
      pop_content[a].classList.remove("is-pop-show");
    });
  }
}

// for (let a = 0; a < pop_modal.length; a++) {
//   pop_btn[a].addEventListener("click", function () {
//     let item = pop_modal[a].childNodes;
//     const pop_btn = document.querySelectorAll(".pop-btn");
//     for (let b = 0; b < item.length; b++) {
//       //console.log(item[b].classList);
//       if (item[b].tagName == "SPAN") {
//         pop_content[a].classList.toggle("is-pop-show");
//       }
//     }
//   });
//   pop_content[a].addEventListener("click", function () {
//     let content = pop_content[a].childNodes;
//     for (let c = 0; c < content.length; c++) {
//       if (content[c].tagName == "LI") {
//         pop_content[a].classList.remove("is-pop-show");
//       }
//     }
//   });
// }
