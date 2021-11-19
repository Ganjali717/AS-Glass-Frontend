let typeitem = document.querySelectorAll('.gl-type-item');


typeitem.forEach(x => x.addEventListener('click', function (e)
{   e.preventDefault();
    let inputs = document.querySelector('.gl-type-item #checkitem');

     inputs.toggleAttribute("checked");
    
}))