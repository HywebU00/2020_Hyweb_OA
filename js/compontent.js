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

//++++++++++++++++++
//  星星樣式改變
//++++++++++++++++++
let starBtn = document.querySelectorAll(".o-card__iconBtn");
if (starBtn != null) {
  for (let i = 0; i < starBtn.length; i++) {
    starBtn[i].addEventListener("click", function (e) {
      e.preventDefault();
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
//popover 效果
//++++++++++++++++++

const pop_modal = document.querySelectorAll(".pop-modal");
const pop_btn = document.querySelectorAll(".pop-btn");
const pop_content = document.querySelectorAll(".pop-content");
const confirm_btn = document.querySelectorAll(".pop-confirm-btn");
const datePicker_btn = document.querySelectorAll(".datePicker-confirm-btn");
const c_popover_filter_item = document.querySelectorAll(
  ".c-popover-filter_item"
);

for (let a = 0; a < pop_btn.length; a++) {
  pop_btn[a].addEventListener("click", function () {
    //移除所有打開的視窗
    let closepop = document.querySelectorAll(".pop-content");
    closepop.forEach((item, index) => {
      if (item.classList.contains("is-pop-show") && index !== a) {
        item.classList.remove("is-pop-show");
      }
    });
    //將點擊的視窗打開
    let item = pop_content[a].classList.contains("pop-content");
    console.log(item);
    let popDisable = pop_content[a].classList.contains("pop-disable");
    if (item === true && popDisable === false) {
      pop_content[a].classList.toggle("is-pop-show");
    }
  });

  if (confirm_btn[a] != null) {
    confirm_btn[a].addEventListener("click", function () {
      let parentlist = confirm_btn[a].parentNode.parentNode;
      parentlist.classList.remove("is-pop-show");
    });
  }
}

//點擊Filter子項目關閉視窗
let closeFilterFn = function () {
  c_popover_filter_item.forEach(function (item) {
    item.addEventListener("click", function () {
      this.parentNode.classList.remove("is-pop-show");
    });
  });
};
closeFilterFn();

let colsePopFn = function () {
  document.body.addEventListener("click", (e) => {
    let colsepop = document.querySelector(".is-pop-show");
    if (e.target.classList.contains("pop-btn") === false && colsepop != null) {
      let colsepop = document.querySelector(".is-pop-show");
      colsepop.classList.toggle("is-pop-show");
    }
  });
};
colsePopFn();

//pop-content 設置監聽
let popcontent = document.querySelectorAll(".pop-content");
function OpenPopFn() {
  popcontent.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
}
if (popcontent != null) {
  OpenPopFn();
}
//++++++++++++++++++
//accordion 效果
//++++++++++++++++++
//點擊 accordion-header 底圖顏色變色
const collapsible = document.querySelectorAll(".collapsible-header");
collapsible.forEach(function (item) {
  item.addEventListener("click", function () {
    let clickHeader = item.parentNode.parentNode.classList.contains(
      "is-accordion-active"
    );
    let clickItem = item.parentNode.parentNode;
    if (clickHeader === false) {
      clickItem.classList.add("is-accordion-active");
    } else {
      clickItem.classList.remove("is-accordion-active");
    }
  });
});

//點擊 accordion-header 打開選單
document.addEventListener("DOMContentLoaded", function () {
  let elems = document.querySelectorAll(".collapsible");
  let instances = M.Collapsible.init(elems, open());
  let header = document.querySelectorAll(".collapsible-header");
  //點擊 o-accordion_arrow 旋轉點擊icon
  header.forEach((item, index) => {
    item.addEventListener("click", function () {
      this.classList.toggle("is-arrow-active");
    });
  });
});

//點擊 accordion-header 增加 c-accordion-addIcon 的圖示
const accordionIcon = document.querySelectorAll(".c-accordion-addIcon");
accordionIcon.forEach(function (item, index) {
  item.addEventListener("click", function () {
    if (this.classList.contains("is-accordion-active")) {
      let div = document.createElement("div");
      div.setAttribute("class", "collapsible-activeIcon");
      let li = document.querySelectorAll(".c-accordion-addIcon li");
      //獲取li裡的第一個children 增加icon
      li[index].prepend(div);
      //li[index].children[0].prepend(div);
    } else {
      //抓出li標籤下有的 collapsible-activeIcon的標籤 並檢查是否是第[0]個 並刪除
      item.childNodes.forEach(function (item) {
        if (
          item.tagName === "LI" &&
          item.childNodes[0].classList.contains("collapsible-activeIcon")
        ) {
          item.childNodes[0].remove();
        }
      });
    }
  });
});

//++++++++++++++++++
//tooltip 效果
//++++++++++++++++++

$(document).ready(function () {
  $(".tooltipped").tooltip();
});

//++++++++++++++++++
//card alertPlan 改變卡片顏色 效果
//++++++++++++++++++

const alertPlanInput = document.querySelectorAll(".js-inputStyle");

alertPlanInput.forEach((item) => {
  item.addEventListener("click", inputChangeCardColor);

  function inputChangeCardColor() {
    item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.toggle(
      "is-changeBackground"
    );
  }
});

//+++++++++++++++++++++++++++++++
//card alertPlan 改變卡片顏色 效果
//+++++++++++++++++++++++++++++++
const percentCheckInput = document.querySelectorAll(
  ".js-percentCheck-inputStyle"
);

percentCheckInput.forEach((item) => {
  item.addEventListener("click", inputChangeCardColor);

  function inputChangeCardColor() {
    item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.toggle(
      "is-changeBackground"
    );
  }
});
//+++++++++++++++++++++++++++++++
//switch-workTime 改變卡片顏色 效果
//+++++++++++++++++++++++++++++++
const switchBtn = document.querySelectorAll(".js-switch-workTime");
const switchSubtext = document.querySelectorAll(
  ".l-main-content__switchSubtext"
);

const switchText = document.querySelectorAll(".switch-text");
for (let s = 0; s < switchBtn.length; s++) {
  switchBtn[s].addEventListener("click", function () {
    let switchActive = switchSubtext[s].classList.contains("is-switch-active");
    if (switchActive === false) {
      switchSubtext[s].classList.add("is-switch-active");
      switchSubtext[
        s
      ].innerHTML = `(目前成員<span class="text-danger" >可</span> 填前月工時)`;
      switchText[s].innerHTML = `開啟`;
    } else {
      switchSubtext[s].classList.remove("is-switch-active");
      switchSubtext[
        s
      ].innerHTML = `(目前成員<span class="text-danger" >不可</span> 填前月工時)`;
      switchText[s].innerHTML = `關閉`;
    }
  });
}

//+++++++++++++++++++++++++++++++
// c-card-lablePerson 改變樣式
//+++++++++++++++++++++++++++++++

const cardLablePerson = document.querySelectorAll(
  ".c-card-lablePerson__additem"
);
for (let a = 0; a < cardLablePerson.length; a++) {
  cardLablePerson[a].addEventListener("click", function () {
    this.classList.toggle("is-active");
  });
}

//+++++++++++++++++++++++++++++++
// personAllCalendar  改變樣式
//+++++++++++++++++++++++++++++++
const CalendarBtn = document.querySelectorAll(".item__months__btn");
CalendarBtn.forEach((item) => {
  item.addEventListener("click", changeStyle);

  //月份按鈕點擊更改顏色
  function changeStyle() {
    let activeBtn = document.querySelector(".is-month-active");
    activeBtn.classList.remove("is-month-active");
    item.classList.add("is-month-active");
  }
});

//日期點擊更改顏色
const CalendarBtn_date = document.querySelectorAll(".item__date");
CalendarBtn_date.forEach((item) => {
  item.addEventListener("click", changeDateStyle);
  function changeDateStyle() {
    let activeBtn = document.querySelector(".is-date-active");
    activeBtn.classList.remove("is-date-active");
    item.classList.add("is-date-active");
  }
});

//專案點擊更改顏色
const CalendarBtn_project = document.querySelectorAll(".item__projects__btn");
CalendarBtn_project.forEach((item) => {
  item.addEventListener("click", changeProjectStyle);
  function changeProjectStyle() {
    let activeBtn = document.querySelector(".is-project-active");
    activeBtn.classList.remove("is-project-active");
    item.classList.add("is-project-active");
  }
});

//+++++++++++++++++++++++++++++++
// loginBtn  改變眼睛樣式
//+++++++++++++++++++++++++++++++

const passwordBtn = document.querySelector(".o-password-btn ");
if (passwordBtn != null) {
  passwordBtn.addEventListener("click", function () {
    let list = this.classList;
    let passwordInput = document.querySelector(".o-input-password");
    if (list.contains("login__eyeClose") === true) {
      list.remove("login__eyeClose");
      list.add("login__eyeOpen");
      passwordInput.type = "text";
    } else {
      list.remove("login__eyeOpen");
      list.add("login__eyeClose");
      passwordInput.type = "password";
    }
  });
}
