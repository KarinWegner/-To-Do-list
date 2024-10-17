const disBox = document.querySelector('#displayBox')
const btn1 = document.querySelector('#buttonIntegrated')
const btn2 = document.querySelector('#buttonSeparate')
const inputField = document.querySelector('#enteredProduct')
const output = document.querySelector('p.listItem')
// addEventListener(checkbox)('click', alert)


document.querySelectorAll('.listItem')
    .forEach(div => div.addEventListener('click', (e) => crossOut(e)))



document.querySelectorAll('#delete')
    .forEach(button => button.addEventListener('click', function (e) {
        e.target.parentElement.remove()
    }))

btn1.addEventListener('click', (e) => {

    console.log('checkbox checked')
    checkInput(inputField.value)
})
btn2.addEventListener('click', (e) => {

    console.log('checkbox checked')
    checkInput(inputField.value)
})

function checkInput(input) {

    if (input == '') {
        console.log('empty input')
      
        inputField.classList.add("is-invalid");
    }
    else {
        console.log('not empty input')

        inputField.classList.remove("is-invalid");

        let newItem = document.createElement('li')
newItem.classList.add('listItem')
        newItem.innerHTML = `${inputField.value} 
                        <button class="float-end" type="button" id="delete">X</button>
                    `
        let newIitemChild = newItem.childNodes[1];
        console.log(newIitemChild)

        disBox.appendChild(newItem)
        newItem.querySelector('#delete').addEventListener('click', function (e) {
                e.target.parentElement.remove()
            })

        newItem.addEventListener('click', (e) => crossOut(e))

        inputField.value = ''
    }
}

function crossOut(e){
    console.log('text clicked')
     if (e.target.style.textDecoration === '') {

                e.target.style.textDecoration = 'line-through'
                e.target.style.color = 'darkseagreen'
            }
            else {
                e.target.style.textDecoration = ''
                e.target.style.color = 'black'
            }
}