let dialogs=document.getElementById('dialogs')
dialogs.addEventListener('click',()=>{
    let char=document.getElementById('char')
    char.innerHTML="Wolf Boy";
    let txt=document.getElementById('text')
    txt.innerHTML="hmmmmm..really? What a coincidence."
    let boy=document.getElementById('boy')
    boy.src='wolf-turn-human5.png'
})

let boy=document.getElementById('boy')
boy.addEventListener('click',()=>{
    window.location.href='laugh.html';
})


