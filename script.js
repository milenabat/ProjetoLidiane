const track = document.querySelector('.carrossel-track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

next.addEventListener('click', () => {
    index++;
    track.style.transform = `translateX(-${index * 270}px)`;
});

prev.addEventListener('click', () => {
    if(index > 0){
        index--;
        track.style.transform = `translateX(-${index * 270}px)`;
    }
});