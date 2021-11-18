const shapeitem = document.querySelectorAll('.shapes .shapes-item');

const btnrec = document.querySelector('.recbtn');
const btnsq = document.querySelector('.sqbtn');
const btnround = document.querySelector('.roundbtn');
const btnoval = document.querySelector('.ovalbtn');
const redirect = document.querySelector('.redirecturl');


const recmea = document.querySelector('#recmea');
const sqmea = document.querySelector('#sqmea');
const roundmea = document.querySelector('#roundmea');
const ovalmea = document.querySelector('#ovalmea');



btnrec.addEventListener('click', function(e) {
    e.preventDefault();
    shapeitem.forEach(x => x.classList.add('d-none'));
    recmea.classList.remove('d-none');
    console.log("Salam");
})
btnsq.addEventListener('click', function(e) {
    e.preventDefault();
    shapeitem.forEach(x => x.classList.add('d-none'));
    sqmea.classList.remove('d-none');
    console.log("Salam");
})
btnround.addEventListener('click', function(e) {
    e.preventDefault();
    shapeitem.forEach(x => x.classList.add('d-none'));
    roundmea.classList.remove('d-none');
    console.log("Salam");
})
btnoval.addEventListener('click', function(e) {
    e.preventDefault();
    shapeitem.forEach(x => x.classList.add('d-none'));
    ovalmea.classList.remove('d-none');
    console.log("Salam");
})

