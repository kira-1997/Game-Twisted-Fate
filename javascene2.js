

let dialogs=document.getElementById("dialogs");
dialogs.addEventListener('click',function(){
    let lowerSec=document.getElementById('lowersec');
    lowerSec.style.display ='none';
})

let done=false;
let arr=["brush","tower","axe","rabbit","pen","watch"]
let counter=0;

for(var i=0;i<arr.length;i++){
   
    let obj=document.getElementById(arr[i])
    obj.addEventListener('click',()=>{
        obj.style.display='none';
        let audio= new Audio('itemfoundsound.wav');
        audio.play();
        counter++;
        if(counter==6){
            window.location.href='wolfApp.html';
           }
    });
    
}


