const storageInput = document.querySelector('.storage');
const but = document.querySelector('.boto');


const saveToLocalStorage = () =>{

localStorage.setItem('textinput',  storage.textContent)

}

but.addEventListener('click', saveToLocalStorage)

