/* empty css                      */import{S as o,P as l,N as a}from"./assets/vendor-84e493ee.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".dropdown-btn"),n=document.querySelector(".dropdown-content");r.addEventListener("click",function(){window.innerWidth<1200&&(n.style.display=n.style.display==="block"?"none":"block")}),document.addEventListener("click",function(i){window.innerWidth<1200&&!r.contains(i.target)&&!n.contains(i.target)&&(n.style.display="none")})});new Accordion(".accordion-container",{duration:300,showMultiple:!0});o.use([l,a]);new o(".reviews-swiper",{direction:"horizontal",slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},breakpoints:{1200:{slidesPerView:2,spaceBetween:20}}});o.use([l,a]);new o(".gallery-swiper",{direction:"horizontal",loop:!0,slidesPerView:2,spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:4,loop:!1}}});
//# sourceMappingURL=commonHelpers2.js.map
