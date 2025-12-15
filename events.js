// const saveTreeBtn = document.getElementById("save-tree-btn");
// saveTreeBtn.addEventListener("click", () => {
//   const resultCurrentTreeData = getResultCurrentTreeData();
//   console.log(resultCurrentTreeData);

//   const resultCurrentTreeJSON = JSON.stringify(resultCurrentTreeData);
//   console.log(resultCurrentTreeJSON);
//   fetch("/save-tree", {
//   method: "POST",
//   body: resultCurrentTreeJSON
// });
// localStorage.setItem("savedTree", resultCurrentTreeJSON);
// console.log("Елка сохранена в браузере");
// // 1. JSON - текстовый формат хранения и обмена данных объектов JavaScript
// // 2. Потому что браузеры работают только с текстом поэтому надо преобразовать объект в JSON
// // 3. fetch() - позволяет легко загружать данные с серверов или отправлять на них данные
// });

fetch("/data")
  .then(response => {
    if(!response.ok){
      throw new Error("Ошибка сервера");
    }
    return response.json();
  })
  .then(data =>{
    console.log("Данные получены" , data);
  });
