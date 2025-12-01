let toys = [
 {
  name: "Желтая игрушка с цветком"
   , color: "yellow"
    , count: 5 
    , year: 2023
    , shape: "ball"
     , favourite : true 
     , image: "./images/yellow.png"
},
{
  name: "Красная игрушка с цветком"
   , color: "red"
    , count: 5 
    , year: 2023
    , shape: "ball"
     , favourite : true 
     , image: "./images/red.png"
},
{
  name: "Синяя игрука с цветком"
   , color: "blue"
    , count: 5 
    , year: 2023
    , shape: "ball"
     , favourite : true 
     , image: "./images/blue.png"
},
{
  name: "Белая игрушка с цветком"
   , color: "black"
    , count: 5 
    , year: 2023
    , shape: "ball"
     , favourite : true 
     , image: "./images/white.png"
},
];
const toyGrid = document.querySelector(".toys-grid");
toys.forEach((toy, index) => {
   const toyBox = document.createElement("div");
   const img = document.createElement("img");


   img.src = toy.image;
   img.classList.add("toy");
   img.draggable = true;
   img.dataset.index = index;
   
  const countBox = document.createElement("div");
  countBox.textContent = toy.count;
  countBox.style.color = "white";
  countBox.style.textAlign = "center";
  countBox.style.fontSize = "14px";

  


});



