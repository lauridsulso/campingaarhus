"use strict";

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  setActiveTab(pageId);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  }
}

// navigate to a new view/page by changing href
function navigateTo(pageId) {
  location.href = `#${pageId}`;
}

// set default page or given page by the hash url
// function is called 'onhashchange'
function pageChange() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);

  // Maja og Pernille
  if (page === "onboard1" || page === "onboard2" || page === "antalspillere" || page === "indtastjeresnavne" || page === "tillykke" || page === "hul1") {
    hideHeader(true);
    hideFooter(true);
  } else {
    hideHeader(false);
    hideFooter(false);
  }
}
pageChange(); // called by default when the app is loaded for the first time

// Maja og Pernille
function hideHeader(hide) {
  let header = document.querySelector('.header');
  if (hide) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
}

// Tine og Maja
function hideFooter(hide) {
  let footer = document.querySelector('.footer');
  if (hide) {
    footer.classList.add("hide");
  } else {
    footer.classList.remove("hide");
  }
}

// slut her
