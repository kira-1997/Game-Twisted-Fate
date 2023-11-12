let play=document.getElementById('play')
play.addEventListener('click',()=>{
    let audio= new Audio('playclick.wav');
    audio.play();
    window.location.href='scene1.html';
})




