const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-btn");

//Event listeners
document.addEventListener("DOMContentLoaded", getLocalTodoDatas);
todoBtn.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", checkfilter);

//function
function addtodo(event) {
  event.preventDefault();
  if (todoInput.value !== "") {
    const todoDiv = document.createElement("div");
    const newTodo = document.createElement("li");
    const completeButton = document.createElement("button");
    const trashButton = document.createElement("button");

    todoDiv.classList.add("todo");
    newTodo.classList.add("todo-list");
    completeButton.classList.add("complete-btn");
    trashButton.classList.add("trash-btn");

    newTodo.innerText = todoInput.value;
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(completeButton);
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
  }
  saveLocalTodoDatas({
    todo: todoInput.value,
    isCompleted: false,
  });
  todoInput.value = ""; // clear todo input
}

function deleteCheck(event) {
  const item = event.target;

  if (item.classList.contains("trash-btn")) {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodoDatas(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    //remove todoData
  }

  if (item.classList.contains("complete-btn")) {
    const todo = item.parentElement;
    setLocalTodoDatas(todo);
    todo.classList.toggle("completed");
    //sửa todoData.isComplete = true
  }
}

function checkfilter(event) {
  // const btn = document.querySelector(".select[::after]");
  // console.log([btn]);
  const todos = todoList.childNodes;
  //todos[1] là 1 text node nên không .style or .classList dc
  todos.forEach(function (todo) {
    if (todo.nodeType == 1) {
      switch (event.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
  });
}

function saveLocalTodoDatas(todo) {
  let todoDatas;
  if (localStorage.getItem("todoDatas") === null) {
    todoDatas = [];
  } else {
    todoDatas = JSON.parse(localStorage.getItem("todoDatas"));
  }

  todoDatas.push(todo);
  localStorage.setItem("todoDatas", JSON.stringify(todoDatas));
}

function getLocalTodoDatas() {
  let todoDatas;
  if (localStorage.getItem("todoDatas") === null) {
    todoDatas = [];
  } else {
    todoDatas = JSON.parse(localStorage.getItem("todoDatas"));
  }

  if (Array.isArray(todoDatas) && todoDatas !== []) {
    todoDatas.forEach(function (data) {
      //todo = { todo: todoInput.value,isCompleted: false,}
      const todoDiv = document.createElement("div");
      const newTodo = document.createElement("li");
      const completeButton = document.createElement("button");
      const trashButton = document.createElement("button");

      todoDiv.classList.add("todo");
      if (data.isCompleted === true) {
        todoDiv.classList.add("completed");
      }
      newTodo.classList.add("todo-list");
      completeButton.classList.add("complete-btn");
      trashButton.classList.add("trash-btn");

      newTodo.innerText = data.todo;
      completeButton.innerHTML = '<i class="fas fa-check"></i>';
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      todoDiv.appendChild(newTodo);
      todoDiv.appendChild(completeButton);
      todoDiv.appendChild(trashButton);
      todoList.appendChild(todoDiv);
    });
  }
}

function removeLocalTodoDatas(todo) {
  let todoDatas;
  if (localStorage.getItem("todoDatas") === null) {
    todoDatas = [];
  } else {
    todoDatas = JSON.parse(localStorage.getItem("todoDatas"));
  }
  //todo.children[0].innerText = todoInput.value
  // timf method khac
  todoDatas.forEach(function (data, index, todoDatas) {
    if (data.todo === todo.children[0].innerText) {
      todoDatas.splice(index, 1);
      return todoDatas;
    }
  });
  localStorage.setItem("todoDatas", JSON.stringify(todoDatas));
}

function setLocalTodoDatas(todo) {
  let todoDatas;
  if (localStorage.getItem("todoDatas") === null) {
    todoDatas = [];
  } else {
    todoDatas = JSON.parse(localStorage.getItem("todoDatas"));
  }
  todoDatas.forEach(function (data, index, todoDatas) {
    if (data.todo === todo.children[0].innerText) {
      if (todoDatas[index].isCompleted === false) {
        todoDatas[index].isCompleted = true;
      } else {
        todoDatas[index].isCompleted = false;
      }
    }
  });
  localStorage.setItem("todoDatas", JSON.stringify(todoDatas));
}
