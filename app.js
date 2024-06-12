let userInput = document.getElementById("input")
let addTodo = document.getElementById("input-btn")
let makeList = document.getElementById("display")
let counter = 0;
addTodo.addEventListener('click', () => {
  // console.log('Working')
  if (userInput.value !== '') {
    makeList.innerHTML += `<li>${userInput.value}
    <div class="btn-box">
    <button id='${counter}' onclick='toEdit("${counter}")'><span class="material-symbols-outlined">edit</span></button>
    <button id='${counter}' onclick='toDelete("${counter}")'><span class="material-symbols-outlined">delete</span></button></div></li>`
    userInput.value = '';
    counter++
  }
  else {
    alert('Please Enter Something to Add Todo')
  }
})

function toEdit(id) {
  let itemToEdit = document.getElementById(id)
  itemToEdit.parentNode.firstChild.textContent = prompt('Type to Edit: ')
}

function toDelete(id) {
  let itemToDelete = document.getElementById(id)
  itemToDelete.parentNode.parentNode.remove()
  
}
