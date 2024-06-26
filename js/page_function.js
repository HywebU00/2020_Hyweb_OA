//++++++++++++++++++++++
//  更換卡片及列表樣式
//++++++++++++++++++++++
const o_list = document.querySelectorAll(".o-list");
const o_card = document.querySelectorAll(".o-card");
const l_main = document.querySelectorAll(".l-main ");
const l_Main_ChangeStyle = document.querySelectorAll(".l-main-changeStyle");
const addNameCard = document.querySelectorAll(".js-c-card-addName");
const cardChineseName = document.querySelectorAll(".js-c-card__userName");
const cardEnglishName = document.querySelectorAll(".js-c-card__englishName");
const appendUserName = document.querySelectorAll(".js-c-card__appendUserName");

//增加節點
let addUserName = function () {
  let arr = [];
  for (let p = 0; p < addNameCard.length; p++) {
    //抓出有改變樣式的列表
    let name = addNameCard[p].parentNode.parentNode.classList;
    //第二層頁籤的改變樣式的位置
    let name_sec = addNameCard[p].parentNode.parentNode.parentNode.classList;
    if (
      name.contains("change-card-to-list") === true ||
      name_sec.contains("change-card-to-list") === true
    ) {
      //將變成列表的卡片抓出來放入陣列arr中
      arr.push(addNameCard[p]);
    }
  }
  for (let a = 0; a < arr.length; a++) {
    let chineseName = arr[a].querySelector(".js-c-card__userName").innerHTML;
    let englishName = arr[a].querySelector(".js-c-card__englishName").innerHTML;
    let userNumber = arr[a].querySelector(".js-c-card__userNumber").innerHTML;
    let ResignTextDom = arr[a].querySelector(".c-card-manhourSofar__Resign");

    let ResignText;
    // 已離職的ＤＯＭ元素
    if (ResignTextDom !== null) {
      ResignText = ResignTextDom.innerHTML;
    } else {
      ResignText = "";
    }

    let beforeChild = arr[a].querySelector(".c-card__content");
    let div = document.createElement("div");
    //將陣列中尚未append姓名的卡片抓出來 塞入姓名
    div.setAttribute("class", "js-c-card__appendUserName");
    div.innerHTML = `<h2>${userNumber}</h2><h2>${chineseName}</h2><h3><span>${englishName}</span><span>${ResignText}</span></h3>`;

    //檢查是否為 人員工時的卡片 c-card-percent
    let percentCard = arr[a]
      .querySelector(".js-c-card__userName")
      .parentElement.parentElement.parentElement.parentElement.classList.contains(
        "c-card-percent"
      );
    if (percentCard === true) {
      div.innerHTML = `<h2>${userNumber}</h2><h2>${chineseName}</h2><h3><span>${englishName}</span></h3>`;

      //抓取 c-card__item__time請假時間的節點
      let timeDom = arr[a].querySelector(".c-card-percent__leaveTime");
      let ResignDiv = document.createElement("div");
      ResignDiv.setAttribute("class", "js-c-card__appendResignDiv");
      ResignDiv.textContent = ResignText;
      timeDom.appendChild(ResignDiv);
    }

    //將Dom字串放入
    if (arr[a].querySelector(".js-c-card__appendUserName") === null) {
      arr[a].children[0].insertBefore(div, beforeChild);
    }
  }
};
//刪除節點
let removeAppendName = function () {
  for (let b = 0; b < addNameCard.length; b++) {
    //將轉成卡片樣式的列表抓出來
    if (
      addNameCard[b].parentNode.parentNode.classList.contains(
        "change-card-to-list"
      ) === false
    ) {
      //抓到有append姓名的並刪除
      let append = addNameCard[b].querySelector(".js-c-card__appendUserName");
      if (append !== null) {
        addNameCard[b].children[0].removeChild(append);
      }
      //抓到有 "已離職" 字樣
      let appendResign = addNameCard[b].querySelector(
        ".js-c-card__appendResignDiv"
      );
      if (appendResign !== null) {
        //抓取 c-card__item__time請假時間的節點
        let timeDom = addNameCard[b].querySelector(
          ".c-card-percent__leaveTime"
        );
        timeDom.removeChild(appendResign);
      }
    }
  }
};

for (let r = 0; r < l_Main_Content.length; r++) {
  if (o_list[r] != null) {
    o_list[r].addEventListener("click", function () {
      l_Main_ChangeStyle[r].classList.add("change-card-to-list");
      //修改icon樣式
      o_list[r].style.display = "none";
      o_card[r].style.display = "flex";
      //append 中文及英文姓名
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
      o_list[r].style.display = "flex";
      //remove 中文及英文姓名
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
