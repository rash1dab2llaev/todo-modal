let usersBlock = document.querySelector('.users_block')
let addInp = document.querySelector('.input')
let addBtn = document.querySelector('.submit')
let modal = document.querySelector('.modal')
let span = document.querySelector('span')
let modalInput = document.querySelector('.modal_input')
let modalBtn = document.querySelector('.delete_btn')

let person = [
    {
        id: 1,
        name: 'Rashid Abdullaev',
        isComuted: false
    },
    {
        id: 2,
        name: 'Abdullaev Rashid',
        isComuted: false
    }
]

//add new user
addBtn.onclick = () => {
    let newObj = {}

    newObj.id = new Date().getTime()
    newObj.name = addInp.value
    newObj.isComuted = false

    person.push(newObj)
    addInp.value = ""

    getUser()
}

//delete user function
function deleteFunc(id) {
    person = person.filter(elem => {
        return elem.id != id
    })
    getUser()
}

//change user function
function changeFunc(id) {
    person = person.map(elem => {
        if (elem.id == id) {
            elem.isComuted = !elem.isComuted
        }
        return elem
    })
    getUser()
}

//span
span.onclick = () => {
    modal.style.display = 'none'
}

let idx
function editFunc(id) {
    modal.style.display = 'block'
    idx = id
    let list = person.find(elem => {
        if (elem.id == id) {
            return elem
        }
    })
    modalInput.value = list.name
}


modalBtn.onclick = modalClickFunc
   

function modalClickFunc() {
    person = person.map(elem => {
        if (elem.id == idx) {
            elem.name = modalInput.value
        }
        return elem
    })
    modal.style.display = 'none'
    getUser()
}



function getUser() {
    usersBlock.innerHTML = ""

    person.forEach(elem => {
        let userSubBlock = document.createElement('div')
        let userH2 = document.createElement('h2')
        userH2.innerHTML = elem.name

        //delete button
        let deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'clear'
        deleteBtn.onclick = () => {
            deleteFunc(elem.id)
        }

        //change button
        let changeBtn = document.createElement('button')
        changeBtn.innerHTML = 'change'
        changeBtn.onclick = () => {
            changeFunc(elem.id)
        }
        if (elem.isComuted == true) {
            userH2.classList.add('changeHe')
        }

        //edit user function
        let editBtn = document.createElement('button')
        editBtn.innerHTML = 'edit'
        editBtn.onclick = () => {
            editFunc(elem.id)
        }

        

        userSubBlock.classList.add('users_lits_block')
        deleteBtn.classList.add('delete_btn')
        changeBtn.classList.add('delete_btn')
        editBtn.classList.add('delete_btn')

        usersBlock.appendChild(userSubBlock)
        userSubBlock.appendChild(userH2)
        userSubBlock.appendChild(deleteBtn)
        userSubBlock.appendChild(changeBtn)
        userSubBlock.appendChild(editBtn)
    })
}
getUser()
