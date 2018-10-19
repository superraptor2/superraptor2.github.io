// function myFunction() {
//     var x = document.getElementById("nav");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

//1. Testen of app.js werkt
console.log("Hello world");

(function(){
    //2. Testen of Self invoking function werkt
    console.log("Self invoking function");
    
    "use strict";

    // 3. Strict gebruiken + lets aanmaken
    let btnMenu;
    let btnClose;

    //4. Function init aanmaken + initialize & events
    function init(){
        initializeControls();
        addEvents();
    }

    //5. Init uitvoeren
    init();
    
    //6. Buttons en dergelijke controls initializeren
    function initializeControls(){
        btnMenu = document.querySelector(".btnMenu");
        btnClose = document.querySelector(".btnClose");
        btnServices = document.querySelector(".btnServices");
        btnTeam = document.querySelector(".btnTeam");
        btnContact = document.querySelector(".btnContact");
    }

    //7. Events toevoegen
    function addEvents(){
        btnMenu.addEventListener("click", btnMenuClicked)
        btnClose.addEventListener("click", btnMenuClicked)
        btnServices.addEventListener("click", btnMenuClicked)
        btnTeam.addEventListener("click", btnMenuClicked)
        btnContact.addEventListener("click", btnMenuClicked)
    }

    function btnMenuClicked(){
        console.log("btnMenuClicked");
        var x = document.getElementById("nav");
        if (x.style.display === "block") {
        x.style.display = "none";
        } else {
        x.style.display = "block";
        }

        var x = document.getElementById("header");
        if (x.style.display === "none") {
        x.style.display = "flex";
        } else {
        x.style.display = "none";
        }
    }
    
})();