(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector("#enotify"),s=document.querySelector("#en-mesage"),c=document.querySelector("#notify-close-icon");emailjs.init("g70KoS0-DpI52h-6O");var r=document.getElementById("feedback-form");r.addEventListener("submit",function(o){o.preventDefault();var l=new FormData(r),a=!0,u={};l.forEach(function(i,f){if(u[f]=i,!i){t("All field are required",!0);var d=document.getElementsByName(f)[0];console.log(d),d.style.border="1px solid red",a=!1}}),console.log(u),a&&emailjs.send("service_gsv7lo4","template_fushnce",u).then(function(i){t("Email sent successfully",!1),console.log("Email sent successfully"),r.reset()},function(i){t("Something went wrong",!0),console.error("Error sending email:",i)})});var e=r.querySelectorAll("input, textarea, select");e.forEach(function(o){o.addEventListener("input",function(){this.value&&(this.style.border="none")})}),c.addEventListener("click",()=>{n.style.display="none"});function t(o,l=!1){n.style.display="flex",s.innerHTML=o,n.style.background=l?"#c40233":"#9cda8a",l&&(c.style.color="white",s.style.color="white"),n.classList.add("bounce"),setTimeout(()=>{n.style.display="none",n.classList.remove("bounce")},5e3)}});
