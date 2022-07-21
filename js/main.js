let jsonFile = "js/data.json";
fetch(jsonFile)
  .then((data) => data.json())
  .then((data) => {
    let tabs = document.querySelector(".main .tabs");
    let active = document.querySelector(".main .tabs .active").dataset.value;
    let tasks = [...document.querySelectorAll(".task")];
    tasks.forEach((task) => {
      let now = document.querySelector(`.task.${task.classList[1]} .now`);
      let previous = document.querySelector(
        `.task.${task.classList[1]} .previous`
      );
    });
    console.log(data);
  });
