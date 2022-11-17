let joo = document.querySelector(".last")

joo.style.fontWeight = "bold";
joo.style.border ="thick dotted";


function nappi(){
    let items = document.querySelectorAll("ul:first-child li");

    for (const item of items) {
        item.classList.toggle("colored");
    }
}

function nappi2(){
    let elems = document.querySelectorAll("li");

    for (const e of elems) {
        if(e.textContent.length < 10){
            e.classList.add("sizeup")
        }
    }
}