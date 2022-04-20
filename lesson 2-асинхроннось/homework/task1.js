const title = () => {
    console.log('Ярче звёзд - полматери')
};

setTimeout(title,1000);


const coupletOne = document.getElementById('flap1');
const coupletTwo = document.getElementById('flap2');
const coupletThree = document.getElementById('flap3');
const coupletFour = document.getElementById('flap4');

coupletOne.addEventListener('click', () => {
    setTimeout(() => {
        console.log('Её глаза прекрасны, детка lovelyLOVE.')
    },1000)
});

coupletTwo.addEventListener('click',() => {
    setTimeout(() => {
        console.log('Её волосы достойны самых преданных баллад.')
    },1000)
});


coupletThree.addEventListener('click', () => {
    setTimeout(() => {
        console.log('Таких красивых мало, просто поискать.')
    },1000)
});


coupletFour.addEventListener('click',() => {
    setTimeout(() => {
        console.log('Она сияет ярче звёезд и освещается земля.')
    },1000)
});