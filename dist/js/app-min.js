"use strict";const headerBtn=document.querySelector(".header-button"),headerMenu=document.querySelector(".header-nav__list");headerBtn.addEventListener("click",()=>{headerBtn.classList.toggle("header-button--active"),headerMenu.classList.toggle("header-nav__list--active")});const links=document.querySelectorAll("a");links.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()})});