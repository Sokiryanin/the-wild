(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();let o=!0,a=(s=500)=>{document.documentElement.classList.contains("lock")?d(s):l(s)},d=(s=500)=>{if(o){const i=document.querySelectorAll("[data-lp]");setTimeout(()=>{i.forEach(t=>{t.style.paddingRight=""}),document.body.style.paddingRight="",document.documentElement.classList.remove("lock")},s),o=!1,setTimeout(function(){o=!0},s)}},l=(s=500)=>{if(o){const i=document.querySelectorAll("[data-lp]"),t=window.innerWidth-document.body.offsetWidth+"px";i.forEach(e=>{e.style.paddingRight=t}),document.body.style.paddingRight=t,document.documentElement.classList.add("lock"),o=!1,setTimeout(function(){o=!0},s)}};function u(){console.log("Меню бургер"),document.querySelector(".icon-menu")&&document.addEventListener("click",function(s){o&&s.target.closest(".icon-menu")&&(a(),document.documentElement.classList.toggle("menu-open"))})}class m{constructor(i){this.type=i}init(){this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=[...document.querySelectorAll("[data-da]")],this.nodes.forEach(i=>{const e=i.dataset.da.trim().split(","),n={};n.element=i,n.parent=i.parentNode,n.destination=document.querySelector(`${e[0].trim()}`),n.breakpoint=e[1]?e[1].trim():"767.98",n.place=e[2]?e[2].trim():"last",n.index=this.indexInParent(n.parent,n.element),this.оbjects.push(n)}),this.arraySort(this.оbjects),this.mediaQueries=this.оbjects.map(({breakpoint:i})=>`(${this.type}-width: ${i/16}em),${i}`).filter((i,t,e)=>e.indexOf(i)===t),this.mediaQueries.forEach(i=>{const t=i.split(","),e=window.matchMedia(t[0]),n=t[1],r=this.оbjects.filter(({breakpoint:c})=>c===n);e.addEventListener("change",()=>{this.mediaHandler(e,r)}),this.mediaHandler(e,r)})}mediaHandler(i,t){i.matches?t.forEach(e=>{this.moveTo(e.place,e.element,e.destination)}):t.forEach(({parent:e,element:n,index:r})=>{n.classList.contains(this.daClassname)&&this.moveBack(e,n,r)})}moveTo(i,t,e){if(t.classList.add(this.daClassname),i==="last"||i>=e.children.length){e.append(t);return}if(i==="first"){e.prepend(t);return}e.children[i].before(t)}moveBack(i,t,e){t.classList.remove(this.daClassname),i.children[e]!==void 0?i.children[e].before(t):i.append(t)}indexInParent(i,t){return[...i.children].indexOf(t)}arraySort(i){if(this.type==="min")i.sort((t,e)=>t.breakpoint===e.breakpoint?t.place===e.place?0:t.place==="first"||e.place==="last"?-1:t.place==="last"||e.place==="first"?1:0:t.breakpoint-e.breakpoint);else{i.sort((t,e)=>t.breakpoint===e.breakpoint?t.place===e.place?0:t.place==="first"||e.place==="last"?1:t.place==="last"||e.place==="first"?-1:0:e.breakpoint-t.breakpoint);return}}}const f=new m("max");f.init();setTimeout(()=>{},0);window.FLS=!0;u();
//# sourceMappingURL=main-9574e0f8.js.map