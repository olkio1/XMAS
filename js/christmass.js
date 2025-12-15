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
    , count: 2
    , year: 2004
    , shape: "ball"
     , favourite : true 
     , image: "/images/red.png"
 
},
{
  name: "Синяя игрука с цветком"
   , color: "blue"
    , count: 3 
    , year: 2005
    , shape: "ball"
     , favourite : true 
     , image: "/images/blue.png"
    
},
{
  name: "Белая игрушка с цветком"
   , color: "black"
    , count: 2 
    , year: 2023
    , shape: "ball"
     , favourite : true 
     , image: "/images/white.png"

},
{
  name: "Прозрачная игрушка"
   , color: "transparent"
    , count: 2 
    , year: 2020
    , shape: "ball"
     , favourite : true 
     , image: "/images/glass.png"
   
},
{
  name: "Бело-красная игрушка"
   , color: "red and white"
    , count: 2 
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
}
];
let garlands = [
  {
    type: "rainbow lights",
    image: "/images/1.png",
  },
  {
    type: "long rainbow lights",
    image: "/images/2.png",
  },
  {
    type: "spiked rainbow lights",
    image: "/images/3.png",
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

  addToy(toyObj) {
    this.toys.push(toyObj);
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
let treeData = {
  type:currentTree.type,
  garland:currentTree.garland,
  toys:currentTree.toys
}
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

let placedCounter = 0;
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
      const xPos = x+370;
      const yPos = y-40;
        placedCounter++;
        const placedId = placedCounter;
      const img = document.createElement("img");
      img.src = toy.image;
      img.classList.add("toy-on-tree");

      img.style.left = xPos + "px";
      img.style.top =  yPos + "px";
        img.dataset.placedId = placedId;
      treeArea.appendChild(img);

      currentTree.addToy({
        id: toy.id,
        placedId: placedId,
        x: xPos,
        y: yPos,
        image: toy.image
      });
      
      toyGrid.children[toyIndex].children[1].textContent = toy.count;

      img.addEventListener("click",()=>{
        img.remove();
        toy.count++;
        
        toyGrid.children[toyIndex].children[1].textContent = toy.count;
        currentTree.toys = currentTree.toys.filter(toy => toy.placedId !== img.dataset.placedId);
      });

    }
  }

if(e.dataTransfer.getData("garland")!== ""){
  const gIndex = e.dataTransfer.getData("garland");
  const garland = garlands[gIndex];
  currentTree.setGarland(garland.type);
  const imgG = document.createElement("img");
  imgG.src = garland.image;
  
  imgG.classList.add("garland-on-tree");
  imgG.style.left = (x+160) + "px";
  imgG.style.top = (y-30) + "px";
  imgG.style.animationDelay = (Math.random() * 1.6) + "s";
  treeArea.appendChild(imgG);
  imgG.addEventListener("click", () => {
    imgG.remove();
    currentTree.setGarland("");
  });
} 
});
const garlandGrid = document.querySelector(".garland-grid");
garlands.forEach((garland, index) => {
  const garlandBox = document.createElement("div");
  const img = document.createElement("img");
  img.src = garland.image;
  img.classList.add("garland");
  img.draggable = true;
  img.dataset.index = index;
  
  garlandBox.appendChild(img);
  garlandGrid.appendChild(garlandBox);
  img.addEventListener("dragstart", e=> {
    e.dataTransfer.setData("garland" , index);
  });
});
const speakerBtn = document.getElementById("speaker-btn");
const audio = document.getElementById("xmas-audio");
let musicOn = false;
speakerBtn.addEventListener("click", () => {

  if(!musicOn) {
    audio.play();
    musicOn = true;
  
  speakerBtn.classList.add("sound-on");
  }else {
    audio.pause();
    musicOn = false;
  
  speakerBtn.classList.remove("sound-on");
  }

});

function getResultCurrentTreeData(){
  const resultCurrentTreeData = {
    type: currentTree.type,
    garland: currentTree.garland,
    toys: currentTree.toys.map(toy => ({
      id: toy.id,
      x: toy.x,
      y: toy.y,
      image: toy.image
    }))
  };
return resultCurrentTreeData;  
}
const saveTreeBtn = document.getElementById("save-tree-btn");
saveTreeBtn.addEventListener("click", () => {
  setTimeout(() => {
  const resultCurrentTreeData = getResultCurrentTreeData();
  const resultCurrentTreeJSON = JSON.stringify(resultCurrentTreeData);
  fetch("/save-tree", {
  method: "POST",
 headers: {
  "Content-Type": "application/json"
 },
 body: resultCurrentTreeJSON
})
.then(res => {
  if(!res.ok){
    throw new Error("Ошибка при сохранении елки");
  }
  return res.json();
})
.then(data => {
  console.log("Ответ сервера:", data);
  alert("Елка сохранена");
})
.catch(error =>{
  console.error("Ошибка:", error);
  alert("Не удалось сохранить елку");
});
}, 1000);
});


