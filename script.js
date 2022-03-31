// We Will Do This Using Two Methods

// Method One - Using Multiple Event Listeners
const count = document.querySelector(".count");
const add = document.querySelector (".add");
const subtract = document.querySelector (".subtract");
const resetCount = document.querySelector (".reset");

add.addEventListener ("click", () => {
    count.innerHTML++;
        setColor();
});
subtract.addEventListener ("click", () => {
    count.innerHTML--;
        setColor();
});
resetCount.addEventListener ("click", () => {
    count.innerHTML = 0;
        setColor();
});


// Method Two - Using Event Delegation
// const buttons = document.querySelector(".buttons");
// const count = document.querySelector(".count");

// buttons.addEventListener ("click", (e) => {
//     if (e.target.classList.contains ("add")) {
//         count.innerHTML++;
//         setColor();
//     }
//     if (e.target.classList.contains ("subtract")) {
//         count.innerHTML--;
//         setColor();
//     }
//     if (e.target.classList.contains ("reset")) {
//         count.innerHTML = 0;
//         setColor();
//     }
// });


// Changing Count Number Colour 
function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML < 0){
        count.style.color = "orangered";
    } else {
        count.style.color = "white";
    }
}
