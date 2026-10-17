// 1. STUDENT MARKS SYSTEM

let studentName = document.getElementById("studentName");
let studentMarks = document.getElementById("studentMarks");
let addStudent = document.getElementById("addStudent");

let studentTable = document.getElementById("studentTable");
let studentMessage = document.getElementById("studentMessage");

// Student array

let students = [];

// Add student

addStudent.addEventListener("click", function () {
  let name = studentName.value;
  let marks = Number(studentMarks.value);

  if (name === "" || studentMarks.value === "") {
    studentMessage.innerHTML = "Please enter all information.";
    return;
  }

  if (marks < 0 || marks > 100) {
    studentMessage.innerHTML = "Marks must be between 0 and 100.";
    return;
  }

  let grade;

  if (marks >= 80) {
    grade = "A+";
  } else if (marks >= 70) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "A-";
  } else if (marks >= 50) {
    grade = "B";
  } else if (marks >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }

  let student = {
    name: name,
    marks: marks,
    grade: grade,
  };

  students.push(student);

  displayStudents();

  studentName.value = "";
  studentMarks.value = "";
});

// Display students

function displayStudents() {
  studentTable.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    let marksCell = document.createElement("td");
    let gradeCell = document.createElement("td");
    let actionCell = document.createElement("td");

    nameCell.innerHTML = students[i].name;

    marksCell.innerHTML = students[i].marks;

    gradeCell.innerHTML = students[i].grade;

    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", function () {
      students.splice(i, 1);

      displayStudents();
    });

    actionCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(marksCell);
    row.appendChild(gradeCell);
    row.appendChild(actionCell);

    studentTable.appendChild(row);
  }
}

// 2. SEARCH STUDENT

let searchStudent = document.getElementById("searchStudent");
let searchBtn = document.getElementById("searchBtn");
let searchResult = document.getElementById("searchResult");

searchBtn.addEventListener("click", function () {
  let searchName = searchStudent.value.toLowerCase();

  let found = false;

  for (let i = 0; i < students.length; i++) {
    if (students[i].name.toLowerCase() === searchName) {
      searchResult.innerHTML =
        students[i].name +
        " scored " +
        students[i].marks +
        " and got " +
        students[i].grade;

      found = true;

      break;
    }
  }

  if (found === false) {
    searchResult.innerHTML = "Student not found.";
  }
});

// 3. TODO LIST

let todoInput = document.getElementById("todoInput");

let addTodo = document.getElementById("addTodo");

let todoList = document.getElementById("todoList");

let todos = [];

addTodo.addEventListener("click", function () {
  let task = todoInput.value;

  if (task === "") {
    alert("Enter a task.");

    return;
  }

  let todo = {
    text: task,

    completed: false,
  };

  todos.push(todo);

  displayTodos();

  todoInput.value = "";
});

function displayTodos() {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.checked = todos[i].completed;

    checkbox.addEventListener("change", function () {
      todos[i].completed = checkbox.checked;
    });

    let text = document.createElement("span");

    text.innerHTML = " " + todos[i].text;

    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = " Delete";

    deleteButton.addEventListener("click", function () {
      todos.splice(i, 1);

      displayTodos();
    });

    li.appendChild(checkbox);

    li.appendChild(text);

    li.appendChild(deleteButton);

    todoList.appendChild(li);
  }
}

// 4. NUMBER FILTER

let numberInput = document.getElementById("numberInput");

let addNumber = document.getElementById("addNumber");

let showEven = document.getElementById("showEven");

let showOdd = document.getElementById("showOdd");

let showAll = document.getElementById("showAll");

let numberList = document.getElementById("numberList");

let numberArray = [];

addNumber.addEventListener("click", function () {
  let number = Number(numberInput.value);

  if (numberInput.value === "") {
    return;
  }

  numberArray.push(number);

  numberInput.value = "";

  displayNumbers(numberArray);
});

function displayNumbers(numbers) {
  numberList.innerHTML = "";

  for (let i = 0; i < numbers.length; i++) {
    let li = document.createElement("li");

    li.innerHTML = numbers[i];

    numberList.appendChild(li);
  }
}

// Show even numbers

showEven.addEventListener("click", function () {
  let evenNumbers = [];

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      evenNumbers.push(numberArray[i]);
    }
  }

  displayNumbers(evenNumbers);
});

// Show odd numbers

showOdd.addEventListener("click", function () {
  let oddNumbers = [];

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 !== 0) {
      oddNumbers.push(numberArray[i]);
    }
  }

  displayNumbers(oddNumbers);
});

// Show all

showAll.addEventListener("click", function () {
  displayNumbers(numberArray);
});