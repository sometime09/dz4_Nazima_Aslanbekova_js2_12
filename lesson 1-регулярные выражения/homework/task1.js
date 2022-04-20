const fruits = ["banana","apple","peach","watermelon","melon"];

const input = document.getElementById('input');
const btn = document.getElementById('btn');


function Search (e){
    e.preventDefault()
    fruits.forEach(element => {
        const regex = new RegExp(`${input.value}`, 'gi');
        const result = regex.test(fruits)
        if (input.value === ''){
            console.log('Поле пустое')
            return result === false
        }
        else if (result === false){
            console.log('Совпадения не найдены')
        }
        else if (result ===  true){
            alert('Совпадения найдены')
        }
    });
}

btn.addEventListener('click', Search);