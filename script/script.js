// comincio trovando il riferimento al form

const inputTL = document.getElementById('inputTL')
const addBtn = document.getElementById('addbtn')
const taskList = document.getElementById('taskList')

// click sul bottone aggiungerà il testo inserito alla lista dei task sottostante

addBtn.addEventListener('click', () => {
  const taskTest = inputTL.value.trim()
  if (taskTest !== '') {
    addTask(taskTest)
    inputTL.value = '' // serve a pulire il campo input
  }
})

// Aggiungo task alla lista
const addTask = (taskTest) => {
  const taskItem = document.createElement('li')
  const taskContent = document.createElement('span')
  taskContent.textContent = taskTest
  taskItem.appendChild(taskContent)

  //   Il bottone per eliminare il task
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'DELETE'
  deleteBtn.classList.add('deleteBtn')
  taskItem.appendChild(deleteBtn)

  // click sul task per seganrlo come completato
  taskContent.addEventListener('click', () => {
    taskItem.classList.toggle('completed')
  })

  //   click sul bottone elimina
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem)
  })

  //   Aggiungo nuovo task all lista
  taskList.appendChild(taskItem)
}
