// Homepage section 

const videobtn = document.querySelector('.link-watch-video');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');

videobtn.addEventListener('click', function(){
    videoContainer.classList.add('show');
})

close.addEventListener('click', function(){
    videoContainer.classList.remove('show');
})