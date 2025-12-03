let toys = [
 {
  name: "Желтая игрушка с цветком"
   , color: "yellow"
    , count: 2 
    , year: 2008
    , shape: "ball"
     , favourite : true 
     , image: "/images/yellow.png"
},
{
  name: "Красная игрушка с цветком"
   , color: "red"
    , count: 1 
    , year: 2004
    , shape: "ball"
     , favourite : true 
     , image: "/images/red.png"
},
{
  name: "Синяя игрука с цветком"
   , color: "blue"
    , count: 6 
    , year: 2005
    , shape: "ball"
     , favourite : true 
     , image: "/images/blue.png"
},
{
  name: "Белая игрушка с цветком"
   , color: "black"
    , count: 1 
    , year: 2023
    , shape: "ball"
     , favourite : true 
     , image: "/images/white.png"
},
{
  name: "Прозрачная игрушка"
   , color: "transparent"
    , count: 1 
    , year: 2020
    , shape: "ball"
     , favourite : true 
     , image: "/images/glass.png"
},
{
  name: "Бело-красная игрушка"
   , color: "red and white"
    , count: 1 
    , year: 2024
    , shape: "ball"
     , favourite : true 
     , image: "/images/redAndwhite.png"
},
{
  name: "Зеленая игрушка с цветком"
   , color: "green"
    , count: 2 
    , year: 2021
    , shape: "ball"
     , favourite : true 
     , image: "/images/green.png"
},
{
  name: "Красный виноград"
   , color: "red"
    , count: 1
    , year: 2020
    , shape: "grape"
     , favourite : true 
     , image: "/images/redGrape.png"
},
{
  name: "Белая бутылка с рисунком"
   , color: "white"
    , count: 2 
    , year: 2020
    , shape: "bottle"
     , favourite : true 
     , image: "/images/whiteBottle.png"
},
{
  name: "Белая игрушка с рисунком"
   , color: "white"
    , count: 1 
    , year: 2021
    , shape: "ball"
     , favourite : true 
     , image: "/images/whitish.png"
},
];
let currentTree = {
  type: "",
  garland: "",
  toys: [],

  setTree(newType) {
    this.type = newType;
  },

  setGarland(newGarland) {
    this.garland = newGarland;
  },

  addToy(toy) {
    this.toys.push(toy);
  },

  showInfo() {
    console.log("Ёлка:", this.type);
    console.log("Гирлянда:", this.garland);
    console.log("Игрушки:", this.toys);
  },
  removeToy(id){
    this.toys.filter(toy => toy.id !== id);
  },

};
const toyGrid = document.querySelector(".toys-grid");
toys.forEach((toy, index) => {
   const toyBox = document.createElement("div");
   toyBox.style.border = "1px solid #B3F6FF80";
   toyBox.style.backgroundColor = "#B3F6FF80";
   toyBox.style.borderRadius = "5px";
   toyBox.style.marginBottom = "10px";
   const img = document.createElement("img");


   img.src = toy.image;
   img.classList.add("toy");
   img.draggable = true;
   img.dataset.index = index;
   img.style.width = "2.7vw";
   img.style.height = "6vh";
   img.style.padding = "2px";
  const countBox = document.createElement("div");
  countBox.textContent = toy.count;
  countBox.style.color = "white";
  countBox.style.textAlign = "center";
  countBox.style.fontSize = "14px";
  countBox.style.fontWeight = "bold";
  countBox.style.padding = "2px";
  

  toyBox.appendChild(img);
  toyBox.appendChild(countBox);
  toyGrid.appendChild(toyBox);

  img.addEventListener("dragstart", e=> {
    if(toy.count === 0){
    e.preventDefault();
    return;
  }
  e.dataTransfer.setData("toy" , index);
});
});
const treeArea = document.querySelector(".tree-area");

treeArea.addEventListener("dragover", e => e.preventDefault());


treeArea.addEventListener("drop", e => {
  e.preventDefault();

  const rect = treeArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if(e.dataTransfer.getData("toy") !== ""){
      const toyIndex = e.dataTransfer.getData("toy");
      const toy = toys[toyIndex];
      if(toy.count > 0){
        toy.count--
      const xPos = x -40;
      const yPos = y -40;

      const img = document.createElement("img");
      img.src = toy.image;
      img.classList.add("toy-on-tree");

      img.style.left =  `${xPos}px`;
      img.style.top =  `${yPos}px`;

      treeArea.appendChild(img);

      currentTree.addToy(toy, xPos, yPos);
      
      toyGrid.children[toyIndex].children[1].textContent = toy.count;

      img.addEventListener("click",()=>{
        img.remove();
        toy.count++;
        
        toyGrid.children[toyIndex].children[1].textContent = toy.count;
        currentTree.toys = currentTree.toys.filter(toy => toy.id !== toy.id);
      });

      }
      


  }

});




