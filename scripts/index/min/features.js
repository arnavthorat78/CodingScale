let list=document.querySelectorAll(".list");function setActiveClass(){list.forEach(s=>s.classList.remove("active")),this.classList.add("active")}list.forEach(s=>s.addEventListener("mouseover",setActiveClass));