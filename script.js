// //getElementById()

// let title = document.getElementById("main-heading")
// console.log(title);

// // //getElementByClassName()

// let listItems = document.getElementsByClassName("list-items");
// console.log(listItems)

// // //getElementByTagName()

// let lists = document.getElementsByTagName("li");
// console.log(lists)

// // //querySelector()

// let container = document.querySelector("div");
// console.log(container);

// // //querySelectorAll()

// let container2 = document.querySelectorAll("div");
// console.log(container2);

// let heading = document.querySelector("#main-heading");
// heading.style.color="red"
// console.log(heading);

// let lists = document.querySelectorAll(".list-items");

// for(let i=0;i<lists.length;i++){
//   lists[i].style.fontSize="1rem"
// } //styling an element with Dom


// //creating elements
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// // //adding the elements
// ul.append(li)
// // //modifying the text with classes
// li.innerText="x-men";
// li.classList.add("list-items")

// //modifying the text with ID
// // li.setAttribute("id","main-heading")


// //removing elements
// // li.remove();

//PARENTNODES
// let ol = document.querySelector("ul");
// console.log(ol.parentNode);
// // //childNodes
// let ol1 = document.querySelector("ul");
// console.log(ol1.children)
// ol1.children[1].style.backgroundColor="blue"
// console.log(ol1.firstElementChild)


//element.addEventListener("click",function)


// let button2 = document.querySelector(".cta1");
// function alertBtn(){
//     alert("i also love javascript");
// }
// button2.addEventListener("click", alertBtn) 

// //mouseOver eventListerner
// let button3 = document.querySelector(".sub-container");
// function bgColorChange(){
//     button3.style.backgroundColor = "blue";
// }
// button3.addEventListener("mouseover", bgColorChange);
            

                   //REAVEALING ELEMENT
// let revealBtn = document.querySelector(".reveal-btn-boxes");
// let hiddencontent = document.querySelector(".hidden-content-boxes");
                
// function revealContent(){
//     if(hiddencontent.classList.contains("reveal-btn-boxes")){
//         hiddencontent.classList.remove("reveal-btn-boxes")
//     }else{
//         hiddencontent.classList.add("reveal-btn-boxes")
//     }
// }

// revealBtn.addEventListener("click", revealContent);


//Event propagation
// window.addEventListener("click",function() {
//   console.log("window");
// },true);

// document.addEventListener("click", function(){
//   console.log("document");
// },true)

// document.querySelector(".div2").addEventListener
// ("click", function() {
//   console.log("DIV 2");
// },true);

// document.querySelector(".div1").addEventListener
// ("click", function() {
//   console.log("DIV 1");
// },true);

// document.querySelector("button").addEventListener("click", function(e) {
//    console.log(e.target.innerText="clicked");
// },true);


//EVENT DELEGATION
document.querySelector("#sports").addEventListener
("click", function(e) {
  console.log("yoo",e.target.getAttribute("id")+" is clicked");

  let target = e.target;
  if(target.matches("li")){
    target.style.backgroundColor = "green"
  }
})
