//onclick event


// let bnt=document.querySelector("button");
// console.dir(bnt);

// bnt.onclick=function(){
//     console.log("Button Clicked");
//     alert("button Clicked");
// };

function sayLiked(){
    console.log("The post has been liked");
}
function sayHello(){
    console.log("The post says hello");
}
function doubleClick(){
    console.log("You Double clicked the Button");
}

let allbtn=document.querySelectorAll("button");
for(btn of allbtn){
  btn.onclick=sayLiked;
}


///onMouseEnter


// for(btn of allbtn){
//   btn.onmouseenter=function(){
//     console.log("mouse is on button");

//     console.log("mouse entered on button");
//   }
// }


//addeventListener
for(btn of allbtn){
  btn.addEventListener("click",sayLiked);
  btn.addEventListener("click",sayHello);
  btn.addEventListener("dblclick",doubleClick);

}