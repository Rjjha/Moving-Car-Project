let a=document.querySelector('.play_sound');
a.addEventListener('click',function(){
   let audio=new Audio('car sound.mp3');
   audio.play();
});
let audio=new Audio('car sound.mp3');
document.addEventListener('keypress',function(event){
   
    if(event.key=='p')
    {
    audio.play();
    }
    else if(event.key=='n')
    {
        audio.pause();
    }
})



