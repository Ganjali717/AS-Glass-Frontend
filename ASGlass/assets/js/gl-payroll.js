// Global Payroll javascript 

const payroll = Array.from(document.querySelectorAll('.payroll-faq-right .faq-question'));
const payrollanswers = Array.from(document.querySelectorAll('.payroll-faq-right .faq-answers'));


const clearActive = () => {
    payroll.forEach(payroll => {
        payroll.classList.remove('active');
    });
    payrollanswers.forEach(payrollanswers => {
        payrollanswers.classList.remove('active');
    });
}
payroll.forEach(payroll => {
    payroll.onclick = function () {
        clearActive();
        const targetId = payroll.getAttribute('data-payroll') //home
        const targetContent = document.getElementById(targetId);
        payroll.classList.add('active');
        targetContent.classList.add('active');
    }
});


// Video 
const videobtn = document.querySelector('.link-watch-video');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');

videobtn.addEventListener('click', function(){
    videoContainer.classList.add('show');
})

close.addEventListener('click', function(){
    videoContainer.classList.remove('show');
})