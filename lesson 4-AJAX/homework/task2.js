const url = 'https://jsonplaceholder.typicode.com/users';


const name = document.getElementById('name');
const lastname = document.getElementById('lastname')
const btnSearch = document.getElementById('btnSearch');

function sendUser() {
    const xhr = new XMLHttpRequest;

    xhr.open('POST', url)
    xhr.responseType = 'json'

    const data = {
        name: name.value,
        lastname: lastname.value,
    }

    xhr.onload = function() {
        console.log(xhr.response)
    }

    xhr.setRequestHeader('Content-Type', 'application')

    xhr.send(JSON.stringify(data))
}

btnSearch.addEventListener('click', sendUser);