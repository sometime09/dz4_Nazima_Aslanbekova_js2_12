// 1) сделать GET запрос на сервер /users вывести всех пользователей в html

const url = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.responseType = 'json'


xhr.onload = function() {
    const list = document.getElementById('list');

    xhr.response.forEach(e => {
        list.innerHTML += `
            <div class="menu">
                <p class="text_one">ID: ${e.id}</p>
                <p class="text">Имя: ${e.name}</p>
                <p class="text">Логин: ${e.username}</p>
                <p class="text">Почта: ${e.email}</p>
                <p class="text">Телефон: ${e.phone}</p>
                <p class="text">Сайт: ${e.website}</p>
            </div>
        `
    })

    console.log(xhr.response)
};


xhr.send();