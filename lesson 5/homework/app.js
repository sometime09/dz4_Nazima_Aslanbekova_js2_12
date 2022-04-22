// 1) дз сделать GET запрос с помощью fetch на сервер /users вывести всех пользователей в html,отследить ошибку
// 2) Сделать POST запрос на сервер с помощью fetch() на адрес https://jsonplaceholder.typicode.com/users, данный взять из текстового поля,и сделать запрос по клику на кнопку

const URL = 'https://jsonplaceholder.typicode.com/users';

const inputId = document.getElementById('input');
const btnId = document.getElementById('btn');

fetch(URL)


//GET запрос 
    .then(response => {
        if(response.ok === true) {
            return response.json()
        } 
        else if(response.ok === false) {
            return "error" + response.status
        }
    }).then(data => console.log(data));


//POST запрос
let post = {
    title: 'new',
    section: 'sport'
}
fetch(URL, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
})




//Вывод в html
document.getElementById('btnText').onclick = () => {
    fetch(URL)
        .then(response => {
            if(response.ok) {
                response.text().then(data => {
                    document.getElementById('result').innerHTML = data
                        // <div class="menu">
                        //     <p class="text_one">ID: ${e.id}</p>
                        //     <p class="text">Имя: ${e.name}</p>
                        //     <p class="text">Логин: ${e.username}</p>
                        //     <p class="text">Почта: ${e.email}</p>
                        //     <p class="text">Телефон: ${e.phone}</p>
                        //     <p class="text">Сайт: ${e.website}</p>
                        // </div>
                    
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
}


//Отслежка ошибки 
function getUser() {
    const id = inputId.value;

    fetch(`${URL}/${id}`)
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                return `error ${response.status}`
            }
        }).then(data => console.log(data))
};


btnId.addEventListener('click', getUser);