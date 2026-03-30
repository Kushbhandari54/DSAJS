let submitBtn = document.getElementById("submit");
let list = document.getElementById("listItem");

function handleSubmitBtnClick() {
  let inputText = document.getElementById("inputField");
  let inputValue = inputText.value.trim();

  // Handle empty input value
  if (inputValue === "") return;

  //   Create Node
  let li = document.createElement("li");
  const text = document.createElement("p");
  text.className = "todo-text";
  text.textContent = inputValue;

  let completeBtn = document.createElement("button");
  completeBtn.classList = "complete-btn";
  completeBtn.textContent = "Complete";

  let deleteBtn = document.createElement("button");
  deleteBtn.classList = "delete-btn";
  deleteBtn.textContent = "Delete";

  li.append(text, completeBtn, deleteBtn);
  list.append(li);
  inputText.value = "";
  inputText.focus();

  return;
}

function handleListClick(e) {
  const target = e.target;
  if (target.classList.contains("delete-btn")) {
    target.closest("li").remove();
  }
  if (target.classList.contains("complete-btn")) {
    const todoText = target.closest("li").querySelector(".todo-text");
    todoText.style.textDecoration =
      todoText.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  }
}

submitBtn.addEventListener("click", handleSubmitBtnClick);
list.addEventListener("click", handleListClick);
