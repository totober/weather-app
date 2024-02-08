import {triggerDataDisplay} from "./display"
import {retrieveData, getData, initializeApp} from "./index"
import {carousel} from "./auxiliaries"

export {elements, setTemp, setTheme}


/// ELEMENTS OBJECT WITH LISTENERS ///

let elements = {

    input: document.querySelector("input"),
    nav: document.querySelector("nav"),
    btnMenu: document.querySelector(".menu"),
    tempOpt: document.querySelector("ul :nth-child(2)"),
    theme: document.querySelector(".theme"),
    near: document.querySelector(".near"),
    btnUp: document.querySelector(".up"),
    btnDown: document.querySelector(".down"),

    initialize(){
        this.addListeners()
    },

    addListeners(){
        window.addEventListener("click", closeMenu);
        window.addEventListener("load", initializeApp);
        this.input.addEventListener("keydown", getInputValue);
        this.btnMenu.addEventListener("click", showMenu);
        this.tempOpt.addEventListener("click", changeTemp);
        this.theme.addEventListener("click", changeTheme);   
        this.btnUp.addEventListener("click", carousel),
        this.btnDown.addEventListener("click", carousel),     
        this.nearArr().forEach(element => element.addEventListener("click", nearCardsEvent));
    },

    nearArr(){
       return Array.from(this.near.children)
    }
} 

/// SET THE LISTENERS ON THE OBJECTS ///

elements.initialize()


/// GET LOCATION FROM USER INPUT ///

function getInputValue(e){

    if(e.key !== "Enter") {return}

    let inputVal = elements.input.value 

    getData(inputVal)
}

/// LISTEN FOR CARD SELECTION FROM THE USER AND DISPLAY THE DATA ///

function nearCardsEvent() {

    let cardDay = this.className

    let {location, forecastArr, historyArr} = retrieveData()

    triggerDataDisplay(location, forecastArr, historyArr, cardDay)
}


/// LISTEN FOR USER SELECTION OF THE MENU ///

function showMenu(e) {
    elements.btnMenu.nextElementSibling.classList.toggle("show-menu")
}

function closeMenu(e) {

    if(!elements.nav.contains(e.target)){
        elements.btnMenu.nextElementSibling.classList.remove("show-menu")
    }
}


/// LISTEN FOR USER CHANGE OF THE TEMPERATURE SCALE ///

function changeTemp() {

    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    if(localStorage.getItem("temp") === "fara"){
        this.textContent = "to Fahrenheit"
        setTemp("celsius")
    } else { 
        this.textContent = "to Celsius"
        setTemp("fara")
    }

   let {location, forecastArr, historyArr} = retrieveData()

   triggerDataDisplay(location, forecastArr, historyArr, attr)
}

/// SET AND STORE THE SELECTED TEMPERATURE ///

function setTemp(temperature) {

    let tempOpt = document.querySelector("ul :nth-child(2)")

    localStorage.setItem("temp", temperature)
    tempOpt.className = temperature
}

/// LISTEN FOR USER CHANGE OF THE WEB THEME ///

function changeTheme(){

    if(localStorage.getItem("theme") === "theme-dark"){
        setTheme("theme-light")
        this.textContent = "to dark theme"
       
    } else{
        setTheme("theme-dark")
        this.textContent = "to light theme"
    }
}

/// SET AND STORE THE SELECTED THEME ///

function setTheme(theme){
            
localStorage.setItem("theme", theme)
document.documentElement.className = theme
}