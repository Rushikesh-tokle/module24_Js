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
// for(let i=0;i<img1.length;i++){
//     console.dir(img1[i].src="assets/spiderman_img.png");
// }


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


 ///Practice Questions
//1
 let para=document.createElement("p");
 para.innerText="I am Red";
 para.style.color="red";
 let boy=document.querySelector(".end");
 boy.insertAdjacentElement('afterend',para);

//2
 let hthree=document.createElement("h3");
 hthree.innerText="THIS IS HTHREE";
 hthree.style.color="blue";
 boy.insertAdjacentElement('beforebegin',hthree);


 //3
 let divi=document.createElement("div");
 

 let hone=document.createElement("h1");
 hone.innerText="I AM IN A DIV";
 divi.append(hone);

  let paregraph=document.createElement("p");
 paregraph.innerText="MEE TOO";
 divi.append(paregraph);

 divi.classList.add("box");
document.querySelector("body").prepend(divi);

//Assignment Question 1
let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="Clickme";


//asssignment 2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

//3
let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");

//4
let h1=document.createElement("h1");
h1.innerHTML="<u>DOMPractice</u>";
document.querySelector("body").append(h1);

//5
let p=document.createElement("p");
p.innerHTML="ApnaCollege<b>Delta</b>Practice";
document.querySelector("body").append(p);
