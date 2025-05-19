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


document.getElementsByTagName();