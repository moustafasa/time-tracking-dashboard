let jsonFile = "js/data.json";

function seTemp(data) {
  let active = document.querySelector(".main .tabs .active").dataset.value;
  let tasks = [...document.querySelectorAll(".task")];
  tasks.forEach((task) => {
    let now = document.querySelector(`.task.${task.classList[1]} .now`);
    let previous = document.querySelector(
      `.task.${task.classList[1]} .previous`
    );
    data.forEach((obj) => {
      if (
        obj.title.toLowerCase() ===
        task.classList[1].replace("-", " ").toLowerCase()
      ) {
        now.innerHTML = obj.timeframes[active].current + "hrs";
        previous.innerHTML = `last ${
          active === "daily" ? "day" : active.slice(0, -2)
        } - ${obj.timeframes[active].previous}hrs`;
      }
    });
  });
}
fetch(jsonFile)
  .then((data) => data.json())
  .then((data) => {
    seTemp(data);
    return data;
  })
  .then((data) => {
    let tabs = document.querySelector(".main .tabs");
    let lis = [...tabs.children];
    lis.forEach((li) => {
      li.addEventListener("click", (ev) => {
        lis.forEach((li) => {
          li.classList.remove("active");
        });
        li.classList.add("active");
        seTemp(data);
      });
    });
  });
