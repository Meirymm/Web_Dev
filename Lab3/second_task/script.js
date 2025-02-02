const inputBox = document.getElementById("input");// чтобы получить ссылку на элемент.
const addBtn = document.getElementById("button");
const list = document.getElementById("list");
function updateItemCompletion(checkbox) {
  const listItem = checkbox.parentElement;
  if (checkbox.checked) {
    listItem.classList.add("completed");  saveData();
  } else {
    listItem.classList.remove("completed");
  }
  saveData();
}

addBtn.addEventListener("click", () => {
  const newItemText = inputBox.value; 
  if (newItemText) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => updateItemCompletion(checkbox));

    listItem.appendChild(checkbox);
    const textSpan = document.createElement("span");
    textSpan.textContent = newItemText;
    listItem.appendChild(textSpan);
    const deleteButton = document.createElement('button');
    deleteButton.style.margin = '10px';
    deleteButton.style.fontSize = '20px';
    deleteButton.style.background = 'inherit';
    deleteButton.style.border = 'none';
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash');
    deleteButton.appendChild(trashIcon);
    saveData();
    deleteButton.addEventListener("click", () => {
      listItem.remove();
      saveData();
    });
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    inputBox.value = "";
    saveData();
  }
})
function saveData(){
  localStorage.setItem("data",list.innerHTML);
}
function showData(){
  list.innerHTML=localStorage.getItem("data");

}
showData();
