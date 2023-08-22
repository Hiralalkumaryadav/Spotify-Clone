console.log('Welcome To Spotify');
let songIndex =0;
let audioElement = new Audio('songs/3.mp3');
// audioElement.play();
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Tere-Saath-Hoon-Main",filepath: "songs/1.mp3",coverpath: "covers/1.jpg" },
    {songName: "Tere-Saath-tere-bina",filepath: "songs/2.mp3",coverpath: "covers/2.jpg" },
    {songName: "Tere-Saath-mere-bina",filepath: "songs/3.mp3",coverpath: "covers/3.jpg" },
    {songName: "Tere-Saath-raba-ishq",filepath: "songs/4.mp3",coverpath: "covers/4.jpg" },
    {songName: "Tere-Saath-tere-bina",filepath: "songs/5.mp3",coverpath: "covers/5.jpg" },
    {songName: "Tere-Saath-kon-kon",filepath: "songs/6.mp3",coverpath: "cover1.jpg" },
    {songName: "Tere-Saath-ajaja-Main",filepath: "songs/7.mp3",coverpath: "cover1.jpg" },
    {songName: "Tere-Saath-main-hoon",filepath: "songs/8.mp3",coverpath: "cover1.jpg" },
    {songName: "Tere-Saath-kasam-Main",filepath: "songs/9.mp3",coverpath: "cover1.jpg" },
    {songName: "Tere-Saath-agejo-Main",filepath: "songs/10.mp3",coverpath: "cover1.jpg" },
]
songItems.forEach((element,i) =>{
     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
     element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterplay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
     }
     else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
     }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(Progress);
    myprogressBar.value = Progress;
})
myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        // console.log(e.target);
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
    songIndex += 1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3` 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

