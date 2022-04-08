const works = {
    id: 1,
    name: 'Alhimik',
    surname: 'Paolo',
}

const worksTwo = {
    id: 2,
    name: 'To Kill',
    surname: 'a Mockingbird'
}

const jsonUser = JSON.stringify(works);
const jsonUsers = JSON.stringify(worksTwo);

localStorage.setItem('works', jsonUser)
localStorage.setItem('worksTwo', jsonUsers)

const data = localStorage.getItem('works');

console.log(JSON.parse(data));


const deleteBtn = document.getElementById('removed');
deleteBtn.addEventListener("click", function (){
    localStorage.removeItem('worksTwo')
});


const deleteBtnAll = document.getElementById('delete');
deleteBtnAll.addEventListener("click", function (){
    localStorage.clear()
});