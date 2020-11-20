//++++++++++++++++++
//  側邊收闔效果
//++++++++++++++++++
const sidebar = document.querySelector(".l-container");
const menu = document.querySelector(".l-side");
const nametag = document.querySelector(".chinese__name");
const name = [];

//open menu
if (menu != null) {
  menu.addEventListener("mouseover", opemmenu);
  function opemmenu() {
    sidebar.classList.add("sidebar__is-open");
    menu.removeEventListener("mouseover", opemmenu);
    fullname();
  }
}
//close menu
const menu_btn = document.querySelector(".menu-btn");
if (menu_btn != null) {
  function closemenu() {
    sidebar.classList.remove("sidebar__is-open");
    setTimeout(function () {
      menu.addEventListener("mouseover", opemmenu);
    }, 500);
    firstname();
  }
  menu_btn.addEventListener("click", closemenu);
}

//get  username
if (nametag != null) {
  getname();
}
function getname() {
  let word = nametag.innerHTML.split("");
  name.push(word);
}

//get  firstname
function firstname() {
  nametag.innerHTML = name[0][0];
}
//get  fullname
function fullname() {
  nametag.innerHTML = name[0].join("");
}

//+++++++++++++++++++++++
//  點擊選單項目更改樣式
//+++++++++++++++++++++++

const menuItem = document.querySelectorAll(".c-sidebar-content__list__item");

for (let a = 0; a < menuItem.length; a++) {
  menuItem[a].addEventListener("click", changeItemStyle);
  function changeItemStyle() {
    const clickItem = document.querySelector(".sidebar__list__item__is-active");
    clickItem.classList.remove("sidebar__list__item__is-active");
    menuItem[a].classList.add("sidebar__list__item__is-active");
  }
}

//+++++++++++++++++++++++
//  subMenu 萬年曆
//+++++++++++++++++++++++

var Cal = function (divId) {
  //Store div id
  this.divId = divId;
  // Days of week, starting on Sunday
  this.DaysOfWeek = ["日", "一", "二", "三", "四", "五", "六"];
  // Months, stating on January
  this.Months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  // Set the current month, year
  var d = new Date();
  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();
};

// Goes to next month
Cal.prototype.nextMonth = function () {
  if (this.currMonth == 11) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  } else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Goes to previous month
Cal.prototype.previousMonth = function () {
  if (this.currMonth == 0) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  } else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Show current month
Cal.prototype.showcurr = function () {
  this.showMonth(this.currYear, this.currMonth);
};

// Show month (year, month)
Cal.prototype.showMonth = function (y, m) {
  var d = new Date(),
    // First day of the week in the selected month
    firstDayOfMonth = new Date(y, m, 1).getDay(),
    // Last day of the selected month
    lastDateOfMonth = new Date(y, m + 1, 0).getDate(),
    // Last day of the previous month
    lastDayOfLastMonth =
      m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  var html = "<table >";

  // Write selected month and year
  let title = document.querySelector(".calendar_month");

  title.innerHTML = y + " " + this.Months[m];

  // Write the header of the days of the week
  html += '<tr class="days">';
  for (var i = 0; i < this.DaysOfWeek.length; i++) {
    html += "<td>" + this.DaysOfWeek[i] + "</td>";
  }
  html += "</tr>";

  // Write the days
  var i = 1;
  do {
    var dow = new Date(y, m, i).getDay();

    // If Sunday, start new row
    if (dow == 0) {
      html += "<tr class='week'>";
    }
    // If not Sunday but first day of the month
    // it will write the last days from the previous month
    else if (i == 1) {
      html += "<tr class='week'>";
      var k = lastDayOfLastMonth - firstDayOfMonth + 1;
      for (var j = 0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + "</td>";
        k++;
      }
    }

    // Write the current day in the loop
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today" >' + i + "</td>";
    } else {
      html += '<td class="normal">' + i + "</td>";
    }
    // If Saturday, closes the row
    if (dow == 6) {
      html += "</tr>";
    }
    // If not Saturday, but last day of the selected month
    // it will write the next few days from the next month
    else if (i == lastDateOfMonth) {
      var k = 1;
      for (dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + "</td>";
        k++;
      }
    }

    i++;
  } while (i <= lastDateOfMonth);

  // Closes table
  html += "</table>";

  // Write HTML to the div
  document.getElementById(this.divId).innerHTML = html;
  //document.getElementsByClassName(this.divId)[0].innerHTML = html;
  document.querySelector("tbody").setAttribute("id", "clickDate");
};

// On Load of the window
window.onload = function () {
  // Start calendar
  var c = new Cal("divCal");
  c.showcurr();

  // Bind next and previous button clicks
  getId("btnNext").onclick = function () {
    c.nextMonth();
  };
  getId("btnPrev").onclick = function () {
    c.previousMonth();
  };
  thisweek();
};

// Get element by id
function getId(id) {
  return document.getElementById(id);
}

//today tag add thisweek
function thisweek() {
  let week = document.querySelectorAll(".week");
  for (let i = 0; i < week.length; i++) {
    let d = week[i].childNodes;
    for (let a = 0; a < d.length; a++) {
      if (d[a].className == "today") {
        week[i].classList.add("thisweek");
      }
    }
  }
}

//+++++++++++++++++++++++
//  subMenu 收闔
//+++++++++++++++++++++++
const submenuBtn = document.querySelector(".c-submenu-btn");
submenuBtn.addEventListener("click", function () {
  let container = document.querySelector(".l-container");
  container.classList.toggle("submenu__open");
});
