import "./index.css"
import img from "../build/public/icons/naveed.jpg"
console.log(30)


var h1 = document.createElement("h1");
h1.classList.add("hello")
h1.innerHTML ="it s working dude";
 const image = document.createElement("img")
 image.src= img
document.getElementById("root").append(h1,image)
