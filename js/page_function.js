//++++++++++++++++++++++
//  更換卡片及列表樣式
//++++++++++++++++++++++

const o_list = document.querySelectorAll(".o-list");
const o_card = document.querySelectorAll(".o-card");
const l_main = document.querySelectorAll(".l-main ");
for (let r = 0; r < l_main.length; r++) {
  if (o_list[r] != null) {
    o_list[r].addEventListener("click", function () {
      l_main[r].classList.add("change-card-to-list");
      o_list[r].style.display = "none";
      o_card[r].style.display = "inline";
    });
  }
  if (o_card[r] != null) {
    o_card[r].addEventListener("click", function () {
      l_main[r].classList.remove("change-card-to-list");
      o_card[r].style.display = "none";
      o_list[r].style.display = "inline";
    });
  }
}

// if (o_list != null) {
//   o_list.addEventListener("click", function () {
//     l_main.classList.add("change-card-to-list");
//     o_list.style.display = "none";
//     o_card.style.display = "inline";
//   });
// }
// if (o_card != null) {
//   o_card.addEventListener("click", function () {
//     l_main.classList.remove("change-card-to-list");
//     o_card.style.display = "none";
//     o_list.style.display = "inline";
//   });
// }
