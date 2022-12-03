const video = document.querySelector('video')
const source = document.querySelector('source')
let button = document.getElementsByTagName('button')


const intervalCheck = setInterval(() => {
    if(video.currentTime > video.duration / 2) {
        console.log('video reached')
        video.pause();
        clearInterval(intervalCheck);
        displayButtons();
    }
} , 1000)


Array.from(button).forEach(function(b) {
    b.addEventListener('click',(e)=>{
        source.setAttribute('src',`/${e.target.id}`);
        video.appendChild(source)
        console.log({
            src: source.getAttribute('src'),
            type: source.getAttribute('type'),
        });
        video.load()
        b.style.visibility = 'hidden'
    })
});
function displayButtons(){
    Array.from(button).forEach(function(b) {
        b.style.visibility = 'visible'
    });
}

