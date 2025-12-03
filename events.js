let button = document.querySelector(".btn");
button.addEventListener("click", () => {
    console.log("Кнопка нажата");
});
let box = document.querySelector(".box");
box.addEventListener("mousemove", () => {
    box.textContent = "Курсор на боксе";
});
