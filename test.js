//++++++++++++++++++
//  星星樣式改變
//++++++++++++++++++
let star = document.querySelector(".o-starBtn");
let starStatus = false;
if (star != null) {
  star.addEventListener("click", function () {
    if (starStatus === false) {
      //star.classList.add("js-star--active");
      star.classList.add("fa-star");
      star.classList.remove("fa-star-o");
      starStatus = true;
    } else {
      //star.classList.remove("js-star--active");
      star.classList.remove("fa-star");
      star.classList.add("fa-star-o");
      starStatus = false;
    }
  });
}

//++++++++++++++++++
//  側邊收闔效果
//++++++++++++++++++
const menu_btn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const name = document.querySelector(".name");
if (menu_btn != null) {
  menu_btn.addEventListener("click", function () {
    sidebar.classList.toggle("close");
    name.classList.toggle("name_sm");
  });
}

//++++++++++++++++++
//  拖拉卡片
//++++++++++++++++++
dragula(
  [
    document.querySelector("#left"),
    document.querySelector("#right"),
    document.querySelector("#new"),
  ]
  //   {
  //     // or 'horizontal'
  //     direction: "vertical",

  //     // determine whether to copy elements rather than moving
  //     // if a method is passed, it'll be called whenever an element starts being dragged in order to decide whether it should follow copy behavior or not.
  //     copy: false,

  //     // determine whether to sort elements in copy-source containers.
  //     copySortSource: false,

  //     // spilling will put the element back where it was dragged from, if this is true
  //     revertOnSpill: false,

  //     // spilling will `.remove` the element, if this is true
  //     removeOnSpill: false,

  //     // set the element that gets mirror elements appended
  //     mirrorContainer: document.body,

  //     // allows users to select input text
  //     ignoreInputTextSelection: true,

  //     // allows users to select the amount of movement on the X axis before it is considered a drag instead of a click
  //     slideFactorX: 0,

  //     // allows users to select the amount of movement on the Y axis before it is considered a drag instead of a click
  //     slideFactorY: 0,

  //     // only elements in drake.containers will be taken into account
  //     isContainer: function (el) {
  //       return false;
  //     },

  //     // elements are always draggable by default
  //     moves: function (el, source, handle, sibling) {
  //       return true;
  //     },

  //     // elements can be dropped in any of the `containers` by default
  //     accepts: function (el, target, source, sibling) {
  //       return true;
  //     },

  //     // don't prevent any drags from initiating by default
  //     invalid: function (el, handle) {
  //       return false;
  //     },
  //   }
);
//拖拉卡片
// var dragulaCards = dragula([
//   document.querySelector("#todo"),
//   document.querySelector("#in-progress"),
//   document.querySelector("#done"),
// ]);

// dragulaCards.on("drop", function (el, target, source, sibling) {
//   console.log(source); // from
//   console.log(target); // to
//   console.log(sibling); // next card
// });

// var dragulaKanban = dragula([document.querySelector("#kanban")], {
//   moves: function (el, container, handle) {
//     return handle.classList.contains("panel-title");
//   },
// });

//++++++++++++++++++
//  switch效果
//++++++++++++++++++
var myCheckbox = document.getElementById("myCheck");
function foo(event) {
  console.log(this.checked);
  this.removeEventListener("click", foo, true);
}
if (myCheckbox != null) {
  myCheckbox.addEventListener("click", foo, true);
}

//++++++++++++++++++
//  側邊收闔效果
//++++++++++++++++++

//  手風琴摺疊單
/*-----------------------------------*/
//////////// Accordion設定 ////////////
/*-----------------------------------*/
$(".accordion").each(function () {
  $(this).find(".accordion-content").hide();
  var _accordionItem = $(this).children("ul").children("li").children("a");
  _accordionItem.each(function () {
    function accordion(e) {
      $(this).parent("li").siblings().children("a").removeClass("active");
      $(this).toggleClass("active");
      $(this).parent("li").siblings().children(".accordion-content").slideUp();
      $(this).next(".accordion-content").slideToggle();
      e.preventDefault();
    }
    $(this).click(accordion);
    $(this).keyup(accordion);
  });
});

//++++++++++++++++++
//  tab切換效果
//++++++++++++++++++
let btn = document.querySelectorAll(".btn");
let box = document.querySelectorAll(".box");
let clickBtn;
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    clickBtn = btn[i].getAttribute("data-num");
    compare();
  });
}
function compare() {
  for (let a = 0; a < box.length; a++) {
    let clickBox = box[a].getAttribute("data-box");
    if (clickBox == clickBtn) {
      box[a].classList.add("show");
    } else {
      box[a].classList.remove("show");
    }
  }
}

//++++++++++++++++++
//  雙日曆元件
//++++++++++++++++++
$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left",
    },
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD")
      );
    }
  );
});
