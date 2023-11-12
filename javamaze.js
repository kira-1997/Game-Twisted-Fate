
let audio= new Audio('Horror Wolf Howl .mp3');
audio.play();


let left=document.getElementById('left')
left.addEventListener('click',()=>{
    let audio= new Audio('playclick.wav');
    audio.play();
    window.location.href='snowyForest.html';
})

let right=document.getElementById('right')
right.addEventListener('click',()=>{
    let audio= new Audio('playclick.wav');
    audio.play();
    window.location.href='magicForest.html';
})
