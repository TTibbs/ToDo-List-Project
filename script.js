const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must input something");
  } else {
    const li = document.createElement("li");
    li.className = "list-item";
    const itemTitle = document.createElement("div");
    itemTitle.className = "item-title";
    itemTitle.innerText = inputBox.value;
    const listIcons = document.createElement("div");
    listIcons.className = "list-icons";
    const checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-check-circle";
    checkIcon.style.color = "#005eff";
    listIcons.appendChild(checkIcon);
    const trashIcon = document.createElement("i");
    trashIcon.className = "fas fa-trash-alt";
    trashIcon.style.color = "#ff1a1a";
    listIcons.appendChild(trashIcon);
    li.appendChild(itemTitle);
    li.appendChild(listIcons);
    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
  }
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "I" && e.target.classList.contains("fa-check-circle")) {
    const listItem = e.target.parentElement.parentElement;
    listItem.classList.toggle("completed");
    saveData();
  } else if (e.target.tagName === "I" && e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks()