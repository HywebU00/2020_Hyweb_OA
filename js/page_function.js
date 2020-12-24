//++++++++++++++++++++++
//  更換卡片及列表樣式
//++++++++++++++++++++++

const o_list = document.querySelectorAll(".o-list");
const o_card = document.querySelectorAll(".o-card");
const l_main = document.querySelectorAll(".l-main ");
const l_Main_ChangeStyle = document.querySelectorAll(".l-main-changeStyle");
const manhourSofarCard = document.querySelectorAll(".c-card-manhourSofar");
const cardChineseName = document.querySelectorAll(
  ".c-card-manhourSofar__userName"
);
const cardEnglishName = document.querySelectorAll(
  ".c-card-manhourSofar__englishName"
);
const appendUserName = document.querySelectorAll(".c-card__appendUserName");

//增加節點
let addUserName = function () {
  for (let a = 0; a < cardChineseName.length; a++) {
    let chineseName = cardChineseName[a].innerHTML;
    let englishName = cardEnglishName[a].innerHTML;

    let beforeChild = document.querySelectorAll(".c-card__content");
    let div = document.createElement("div");
    div.setAttribute("class", "c-card__appendUserName");
    div.innerHTML = `<h2>${chineseName}</h2><h3>${englishName}</h3>`;
    manhourSofarCard[a].insertBefore(div, beforeChild[a]);
  }
};
//刪除節點
let removeAppendName = function () {
  let appendUserName = document.querySelectorAll(".c-card__appendUserName");
  if (manhourSofarCard != null) {
    for (let q = 0; q < manhourSofarCard.length; q++) {
      manhourSofarCard[q].removeChild(appendUserName[q]);
    }
  }
};

for (let r = 0; r < l_Main_Content.length; r++) {
  if (o_list[r] != null) {
    o_list[r].addEventListener("click", function () {
      l_Main_ChangeStyle[r].classList.add("change-card-to-list");
      o_list[r].style.display = "none";
      o_card[r].style.display = "inline";
      if (cardChineseName != null) {
        addUserName();
      }
      if (
        l_Main_ChangeStyle[r].classList.contains("l-main-list-width") === true
      ) {
        let listTitle = document.querySelectorAll(".l-main-content-item");
        listTitle[r].classList.add("list-width");
      }
    });
  }
  if (o_card[r] != null) {
    o_card[r].addEventListener("click", function () {
      l_Main_ChangeStyle[r].classList.remove("change-card-to-list");
      o_card[r].style.display = "none";
      o_list[r].style.display = "inline";
      if (appendUserName != null) {
        removeAppendName();
      }
      if (
        l_Main_ChangeStyle[r].classList.contains("l-main-list-width") === true
      ) {
        let listTitle = document.querySelectorAll(".l-main-content-item");
        listTitle[r].classList.remove("list-width");
      }
    });
  }
}
