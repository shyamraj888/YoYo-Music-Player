console.log('Welcome to YoYo Music PLayer, Get the true feel/! ')
var Sogn=0;
let audioElement= new Audio(`https://drive.google.com/drive/folders/1P_tJKuRF5xpqKhfAtiyn97SyHFEN6bdI?usp=drive_link/${Sogn}.mp3`);
let cover = document.querySelector('.cover');
let masterPlay = document.querySelector('.icon2');
let myProgress = document.getElementById('range');
let Cplaying = document.querySelector('.playing');
let tStamp = 0;
let aboutElement=document.querySelector('.aboutme');
let gif= document.querySelector('.rock');
console.log(tStamp);
let cov1 = '';

masterPlay.addEventListener('click',()=>{

if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22');
    gif.classList.remove('rock');
    gif.classList.add('rock2');
    
    
}

else{
    audioElement.pause();
    masterPlay.classList.remove('icon22');
    masterPlay.classList.add('icon2')
    gif.classList.remove('rock2');
    gif.classList.add('rock');
    
   
}
})
if(Sogn==0){
 Cplaying.innerHTML='Kindly choose a song to play💕';

}
    
// Update progress bar while audio plays
audioElement.addEventListener('timeupdate', () => {
    if (!isNaN(audioElement.duration)) {
        let progress = (audioElement.currentTime / audioElement.duration) * 100;
        myProgress.value = progress;
    }
});

// Seek instantly on slider move
myProgress.addEventListener('input', () => {
    if (!isNaN(audioElement.duration)) {
        audioElement.currentTime = (myProgress.value / 100) * audioElement.duration;
    }
});


let songList = [
    {song:'dd',file:'sdd'},
{song:'Now Playing--Brown Rang Full Song Mp3',file:`songs/1.mp3`},
{song:'Now Playing--Blue Eyes Full Song Mp3',file:`songs/2.mp3`},
{song:'Now Playing--Dope shope Full Song Mp3',file:`songs/3.mp3`},
{song:'Now Playing--Desi Kalakar Full Song Mp3',file:`songs/4.mp3`},
{song:'Now Playing--Glassy/- Full Song Mp3',file:`songs/5.mp3`},
{song:'Now Playing-Millionaire Mp3',file:`songs/6.mp3`},
{song:'Now Playing-Dheeme Dheeme.Mp3',file:`songs/8.mp3`},
{song:'Now Playing-One bottle Down Mp3',file:`songs/9mp3`},
{song:'Now Playing-Love Dose by honey singh Mp3',file:`songs/10.mp3`},

]





document.getElementById('first').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=1;
     audioElement.src = `songs/${Sogn}.mp3`;
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
     audioElement.play();
     Cplaying.innerHTML=songList[Sogn].song;
   
 gif.classList.remove('rock');
    gif.classList.add('rock2');
    cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);

cov1=Sogn;

}




)

document.getElementById('second').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=2;
     audioElement.src = `songs/${Sogn}.mp3`;
     audioElement.play();
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22');
    Cplaying.innerHTML=songList[Sogn].song;
    

 gif.classList.remove('rock');
    gif.classList.add('rock2');
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);
    cov1=Sogn
}




)

document.getElementById('third').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=3;
     audioElement.src = `songs/${Sogn}.mp3`;
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
     audioElement.play();
      Cplaying.innerHTML=songList[Sogn].song;
     
    

 gif.classList.remove('rock');
    gif.classList.add('rock2');
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);
    cov1=Sogn;
}





)
let icon3= document.querySelector('.icon3');
if (icon3) {
    icon3.addEventListener('click', () => {
       audioElement.pause();
 masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
        Sogn++;
        Cplaying.innerHTML=songList[Sogn].song;
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);
    cov1=Sogn;
   audioElement.src = `songs/${Sogn}.mp3`;
   audioElement.play();


    });
}
let icon1= document.querySelector('.icon1');
if (icon1) {
    icon1.addEventListener('click', () => {
       audioElement.pause();
        masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')

        Sogn--;
        Cplaying.innerHTML=songList[Sogn].song;
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);
    cov1=Sogn;
   audioElement.src = `songs/${Sogn}.mp3`;
   audioElement.play();

    });
}
if(Sogn<1){Cplaying.innerHTML='Kindly choose a song to play💕'}

document.getElementById('fourth').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=4;
     audioElement.src = `songs/${Sogn}.mp3`;
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
     audioElement.play();
     Cplaying.innerHTML=songList[Sogn].song;

 gif.classList.remove('rock');
    gif.classList.add('rock2');
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);
    cov1=Sogn;
}




)

document.getElementById('fifth').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=5;
     audioElement.src = `songs/${Sogn}.mp3`;
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
     audioElement.play();
      Cplaying.innerHTML=songList[Sogn].song;
    
 gif.classList.remove('rock');
    gif.classList.add('rock2');
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);
    cov1=Sogn;

}




)

document.getElementById('seventh').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=6;
     audioElement.src = `songs/${Sogn}.mp3`;
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
     audioElement.play();
      Cplaying.innerHTML=songList[Sogn].song;
     
    

 gif.classList.remove('rock');
    gif.classList.add('rock2');
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);
    cov1=Sogn;
}
)

/*document.getElementById('sixth').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=6;
     audioElement.src = `songs/${Sogn}.mp3`;
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
     audioElement.play();
      Cplaying.innerHTML=songList[Sogn].song;
}
)*/

document.querySelector('.icon1').addEventListener('click',() =>{
    audioElement.pause();

Sogn--;
audioElement.src = `songs/${Sogn}.mp3`;
audioElement.play();





}






)




let count=1;
document.querySelector('.aboutRaja').addEventListener('click',()=>{

count++;

if(count%2==0){
aboutElement.classList.remove('aboutme');
aboutElement.classList.add('aboutme2');
}
else {
aboutElement.classList.remove('aboutme2');
aboutElement.classList.add('aboutme');

}



}

)
document.getElementById('eight').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=8;
     audioElement.src = `songs/${Sogn}.mp3`;
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
     audioElement.play();
      Cplaying.innerHTML=songList[Sogn].song;
     
    

 gif.classList.remove('rock');
    gif.classList.add('rock2');
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);
    cov1=Sogn;
}
)
document.getElementById('nine').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=9;
     audioElement.src = `songs/${Sogn}.mp3`;
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
     audioElement.play();
      Cplaying.innerHTML=songList[Sogn].song;
     
    

 gif.classList.remove('rock');
    gif.classList.add('rock2');
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover${Sogn}`);
    cov1=Sogn;
}
)
document.getElementById('ten').addEventListener('click',() =>{
    audioElement.pause();
    Sogn=10;
     audioElement.src = `songs/${Sogn}.mp3`;
     masterPlay.classList.remove('icon2');
    masterPlay.classList.add('icon22')
     audioElement.play();
      Cplaying.innerHTML=songList[Sogn].song;
     
    

 gif.classList.remove('rock');
    gif.classList.add('rock2');
cover.classList.remove(`cover${cov1}`);
    cover.classList.add(`cover0`);
    cov1=Sogn;
}
)