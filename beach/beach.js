let date = new Date();
let hours = date.getHours();

console.log(hours);

let background = document.querySelector(".fundo");

if (hours > 5 && hours < 17) {

    background.classList.add("morning");
    
} else if (hours > 16 && hours < 19) {

    background.classList.add("afternoon");

} else {

    background.classList.add("night");

}