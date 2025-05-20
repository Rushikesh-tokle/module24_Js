

let changeColor=function(){
    let red=Math.floor(Math.random() * 256);
    let green=Math.floor(Math.random() * 256);
    let blue=Math.floor(Math.random() * 256);

    let hthree=document.querySelector("h3");
    hthree.innerText=`rgb(${red},${green},${blue})`;
    let divi=document.querySelector("div");
    divi.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

}
let btn=document.querySelector("button");
btn.addEventListener("click",changeColor);