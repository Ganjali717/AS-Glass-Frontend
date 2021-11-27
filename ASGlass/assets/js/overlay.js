let cancelbtn = document.querySelector('.cancel-overlay-head a');
let cancelbody = document.querySelector('.cancel-overlay-body');

cancelbtn.addEventListener('click', function(e){
    e.preventDefault();
    cancelbody.classList.toggle("active");
});