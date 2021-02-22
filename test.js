var pics = [
    "Aurora-at-Grotta-00004-of-9.jpg",
    "Comet Neowise.jpg",
    "dog sleding.jpg",
    "image.jpg",
    "image1.jpg",
    "images2.jpg",
    "little doggy.jpg",
    "musher.jpg"
]

var btn=document.querySelector("button");
var img=document.querySelector("img");
var counter = 1;

btn.addEventListener("click",function(){
    if(counter === 8){
    	counter = 0;
    }

    img.src = pics[counter]
    counter = counter+1;
});