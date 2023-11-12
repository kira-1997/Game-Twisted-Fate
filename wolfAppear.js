let yes=document.getElementById('yes')
yes.addEventListener('click',()=>{
    let audio= new Audio('playclick.wav');
    audio.play();
    let ch=document.getElementById('choices')
    ch.style.display='none'
    let hand=document.getElementById('hand')
    hand.style.display='flex'
})

let no=document.getElementById('no')
no.addEventListener('click',()=>{
    let audio= new Audio('playclick.wav');
    audio.play();
    window.location.href='runWolf.html';
})

let hand=document.getElementById('hand')
hand.addEventListener('click',()=>{
    window.location.href='WolfHuman.html';
})





