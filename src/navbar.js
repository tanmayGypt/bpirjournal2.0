function test() {
  var tabsNewAnim = document.querySelector("#navbarSupportedContent");
  var selectorNewAnim = tabsNewAnim.querySelectorAll("li").length;
  var activeItemNewAnim = tabsNewAnim.querySelector(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
  var activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
  var itemPosNewAnimTop = activeItemNewAnim.getBoundingClientRect();
  var itemPosNewAnimLeft = activeItemNewAnim.getBoundingClientRect();
  document.querySelector(".hori-selector").style.top =
    itemPosNewAnimTop.top + "px";
  document.querySelector(".hori-selector").style.left =
    itemPosNewAnimLeft.left + "px";
  document.querySelector(".hori-selector").style.height =
    activeWidthNewAnimHeight + "px";
  document.querySelector(".hori-selector").style.width =
    activeWidthNewAnimWidth + "px";

  tabsNewAnim.addEventListener("click", function (e) {
    var target = e.target;
    if (target.tagName === "LI") {
      var liElements = tabsNewAnim.querySelectorAll("li");
      liElements.forEach(function (li) {
        li.classList.remove("active");
      });
      target.classList.add("active");
      var activeWidthNewAnimHeight = target.clientHeight;
      var activeWidthNewAnimWidth = target.clientWidth;
      var itemPosNewAnimTop = target.getBoundingClientRect();
      var itemPosNewAnimLeft = target.getBoundingClientRect();
      document.querySelector(".hori-selector").style.top =
        itemPosNewAnimTop.top + "px";
      document.querySelector(".hori-selector").style.left =
        itemPosNewAnimLeft.left + "px";
      document.querySelector(".hori-selector").style.height =
        activeWidthNewAnimHeight + "px";
      document.querySelector(".hori-selector").style.width =
        activeWidthNewAnimWidth + "px";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    test();
  });
});

window.addEventListener("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    var navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.style.display =
      navbarCollapse.style.display === "none" ? "block" : "none";
    setTimeout(function () {
      test();
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.split("/").pop();
  if (path === "") {
    path = "index.html";
  }
  var target = document.querySelector(
    '#navbarSupportedContent ul li a[href="' + path + '"]'
  );
  if (target) {
    target.parentElement.classList.add("active");
  }
});
