const dropDownValue = document.querySelector('.dropdown__value')
const dropDownList = document.querySelectorAll('.dropdown__list')

dropDownValue.addEventListener('click', function () {
    for (const dropDownElement of dropDownList) {
        dropDownElement.classList.add('dropdown__list_active')
        dropDownElement.onclick = function (event) {
            event.preventDefault()
            dropDownValue.textContent = event.target.textContent
            dropDownElement.classList.remove('dropdown__list_active')
        }
    }
})