// let h2=document.querySelector("h2");

// console.dir(h2.innerText);
// h2.innerText=h2.innerText +"from anamika";

// let divs=document.querySelectorAll(".box");
// console.dir(divs[0]);
// let div= document.querySelector("div");
// console.dir(div);
// let id=div.getAttribute("id");
// console.log(id);
// let para=document.querySelector("p");
// console.log(para.setAttribute("class","123"));

// let newBtn=document.createElement("button");
// newBtn.innerText="click me";
// newBtn.style.backgroundColor="lightblue";
// document.querySelector("body").prepend(newBtn);



let btn1=document.querySelector("#btn1");

// btn1.onclick =(evt) =>{

//     console.log(evt);
//      console.log(evt.type);
//    console.log(evt.target);
//  console.log(evt.clientX,evt.clientY);
// };
  
btn1.addEventListener("click",(evt) => {
  console.log("button1 was clicked");
  console.log(evt);
  console.log(evt.type);
});
btn1.addEventListener("click",() =>{
  console.log("button1 was clicked again");
});
let div = document.querySelector("div1");












