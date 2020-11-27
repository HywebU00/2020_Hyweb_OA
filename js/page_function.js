//++++++++++++++++++++++
//  更換卡片及列表樣式
//++++++++++++++++++++++

const o_list = document.querySelector(".o-list");
const o_card = document.querySelector(".o-card");
const l_main = document.querySelector(".l-main ");
if (o_list != null) {
  o_list.addEventListener("click", function () {
    l_main.classList.add("change-card-to-list");
    o_list.style.display = "none";
    o_card.style.display = "inline";
  });
}
if (o_card != null) {
  o_card.addEventListener("click", function () {
    l_main.classList.remove("change-card-to-list");
    o_card.style.display = "none";
    o_list.style.display = "inline";
  });
}
