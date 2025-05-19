console.log("DOM MANIPULATION STARTING FROM HERE");

let img1=document.getElementsByClassName("oldImg");
console.log(img1);
let img2=document.getElementsByClassName("oldImg")[1];
console.log(img2);

for(let i=0;i<img1.length;i++){
    console.dir(img1[i]);
}

for(let i=0;i<img1.length;i++){
    console.dir(img1[i].src);
}
for(let i=0;i<img1.length;i++){
    console.dir(img1[i].src="assets/spiderman_img.png");
}


document.getElementsByTagName("p")[1].innerText="abc";

//QuerySelector can be used to in place of the get Element By Id and every similar thing
console.log(document.querySelector("h1"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("h1"));

let pare=document.querySelector("p");


///Manipulating Attributes
let img=document.querySelector("img");
console.log(img);
// img.setAttribute("id","RushiImg");
// console.log(img.getAttribute("id"));

//Manipulating Style


let changeColor=document.querySelectorAll(".box a");
//changeColor.style

for(let i=0;i<changeColor.length;i++){
    changeColor[i].style.color="yellow";
}

//obj.classlist
 let check=document.querySelector(".box");
 