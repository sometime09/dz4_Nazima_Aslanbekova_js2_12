const url = 'https://jsonplaceholder.typicode.com/users';

const name = document.getElementById('name');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const sendBtn = document.getElementById('send');


function sendUserInfo() {
    const xhr = new XMLHttpRequest;

    if(name.value.trim() || username.value.trim() || email.value.trim()) {
        alert("Заполните все поля")
    }
    else {
        const data = {
            name: name.value,
            username: username.value,
            email: email.value
        }

        xhr.open('POST', url)
        xhr.responseType = 'json'

        xhr.onload = function() {
            console.log(xhr.response)
        }

        xhr.setRequestHeader('Content-Type', 'application')

        xhr.send(JSON.stringify(data))
    }
};

sendBtn.addEventListener('click', sendUserInfo);




//запросы 
// GET - получать <<<<< [server]

//POST - отправить >>>>> [server]

//PUT - полное изменение данных >>>>> [server]

//PATCH - частичное изменение данных >>>>> [server]

//DELETE - удаление данных >>>>> [server]





// const xhr = new XMLHttpRequest();



// xhr.open('GET', url); // Начало

// xhr.onerror = function () {
//     console.log(xhr.status)
// }

// xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status <= 204) {
//         console.log(JSON.parse(xhr.status));
//         // alert("запрос успешно обработан");
//     } else if (xhr.status >= 400 && xhr.status <= 418) {
//         console.log('Ошибка' + xhr.status);
//     }
// }

// xhr.send();