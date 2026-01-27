let menuIcon = document.body.querySelector(".menu-icon");
let sidebar = document.body.querySelector(".sidebar");
let container = document.body.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container") ;
}