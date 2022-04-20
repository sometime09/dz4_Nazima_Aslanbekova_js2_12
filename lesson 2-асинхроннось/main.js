//рекурсия
// function getFunctorial (a) {
//     if(a === 1) return a
//     return a * getFunctorial(a -1)
// }

// console.log(getFunctorial(5)) //120

// function pow(x, a) {
//     if(a === 1) return x
//     else return x * pow(x, a -1) 
// }

// console.log(pow(6, 3))




//setInterval

const start =document.getElementById('start');
const countPlace = document.getElementById('count');

let count = 0;

start.addEventListener('click', function(){

    const id = setInterval(() => {
        countPlace.textContent = count
    }, 1000);

    if(count === 3) {
        console.log("hello")
    }
});
