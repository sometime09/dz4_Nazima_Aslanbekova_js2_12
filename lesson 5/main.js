//Самостоятельная
const URL = 'https://jsonplaceholder.typicode.com/posts';

//get
fetch(URL)

    .then(response => {
        if(response.ok === true) {
            return response.json()
        } else if(response.ok === false) {
            return "error" + response.status
        }
    }).then(data => console.log(data))



//post
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




const userId = document.getElementById('user_id');
const getBtn = document.getElementById('get_user');

//отслпежка ошибки
function getUserInfo() {
    const id = userId.value;
    fetch(`${URL}/${id}`)
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                return `error ${response.status}`
            }
        }).then(data => console.log(data))
}
getBtn.addEventListener('click', getUserInfo);