/* Check if element in viewport */
function isInViewport() {
    console.log("movement")
    let rect = this.getBoundingClientRect();
    let html = document.documentElement;
    if(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth)) {
        for (section of sections){
            section.classList.remove("your-active-class")
        }
        this.classList.add("your-active-class")
        let nav = document.getElementsByClassName("nav_element")
        for (navelement of nav){
            console.log(navelement.className)
            navelement.classList.remove("active")
            if (("navbar_" + this.id + " nav_element") == navelement.className){
                navelement.classList.add("active")
            }
        }
        
    }
    console.log("Section moved")  
    }

/* Scrolls to section correspondant to navbutton */
function scroller(event) {
    event.preventDefault()
    let element = document.getElementById(this.dataset.id)
    element.scrollIntoView(
        {
            behavior : 'smooth'
        }
    );
}

/* Scrolls to top of page */
function scrolltoTop() {
    let but = document.getElementById("scrolltop")
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        but.style.visibility = "visible";
        console.log("bottom")
    } else {
        but.style.visibility = "hidden";
        console.log("not bottom")
    }
}


let but = document.getElementById("scrolltop")
let sections = document.getElementsByTagName("section")
let navbar = document.getElementById("navbar__list")

/* Create nav elements according to number of sections on page and assign active section listener */
for (section of sections){
    navelement = document.createElement("li")
    navelement.innerText = section.dataset.nav;
    navelement.dataset.id = section.id
    navelement.classList.add("navbar_" + section.id)
    navelement.classList.add("nav_element")

    navelement.addEventListener('click', scroller)
    
    navbar.appendChild(navelement)

    console.log("added")

    section.addEventListener('wheel', isInViewport)
    console.log("event listener added")
}

/* Assign scrolltoTop button listener on document to appear when at bottom of page */
document.addEventListener("wheel", scrolltoTop)

/* Assign button function to scroll to top of page */
but.addEventListener('click', function () {window.scrollTo({top : 0, behavior: 'smooth'})})
