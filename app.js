let userInput = document.getElementById("input");
let makeList = document.getElementById("display");
let counter = 0;

userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  if (userInput.value !== '') {
    let newItem = document.createElement('li');
    newItem.setAttribute('id', `item-${counter}`);
    newItem.innerHTML = `
      <input type="checkbox" id="checkbox-${counter}" onchange="toggleStrikeThrough('${counter}')">
      <span id="text-${counter}">${userInput.value}</span>
      <div>
        <button id="edit-btn-${counter}" onclick='toEdit("${counter}")'>
          <span class="material-symbols-outlined">edit</span>
        </button>
        <button onclick='toDelete("${counter}")'>
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    `;
    makeList.prepend(newItem);
    userInput.value = '';
    counter++;
    makeList.scrollTop = 0;
  } else {
    alert('Please Enter Something to Add Todo');
  }
}

function toggleStrikeThrough(id) {
  let item = document.getElementById(`item-${id}`);
  let editButton = document.getElementById(`edit-btn-${id}`);
  item.classList.toggle('strikethrough');
  editButton.disabled = !editButton.disabled;
}

function toEdit(id) {
  let itemText = document.getElementById(`text-${id}`);
  let newText = prompt('Type to Edit:', itemText.textContent);
  if (newText !== null && newText.trim() !== '') {
    itemText.textContent = newText;
  }
}

function toDelete(id) {
  let itemToDelete = document.getElementById(`item-${id}`);
  itemToDelete.remove();
}

function clearAllTodos() {
  makeList.innerHTML = '';
}
