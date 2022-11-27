

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/10.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Warriyo", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Humma-Humma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "My Heart ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tonight-feat", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "He will fly", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan-Ringtone", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bhula Dena", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "I will tonight", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "English Song", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "Aa Bhi Ja Saman", filePath: "songs/11.mp3", coverPath: "covers/1.jpg" },
    { songName: "Aaj Se Teri", filePath: "songs/12.mp3", coverPath: "covers/2.jpg" },
    { songName: "Bakhuda tumhi", filePath: "songs/13.mp3", coverPath: "covers/3.jpg" },
    { songName: "Suno na kahe", filePath: "songs/14.mp3", coverPath: "covers/4.jpg" },
    { songName: "O kudi kinni", filePath: "songs/15.mp3", coverPath: "covers/5.jpg" },
    { songName: "Hare Ram Bhulabhulaiya", filePath: "songs/16.mp3", coverPath: "covers/6.jpg" },
    { songName: "Bum Chiggy", filePath: "songs/17.mp3", coverPath: "covers/7.jpg" },
    { songName: "Kashmeri dupattewaliye", filePath: "songs/18.mp3", coverPath: "covers/8.jpg" },
    { songName: "Socha na tha", filePath: "songs/19.mp3", coverPath: "covers/9.jpg" },
    { songName: "Tujhpe hi pyar", filePath: "songs/20.mp3", coverPath: "covers/10.jpg" },
    { songName: "Jaan bana ke", filePath: "songs/21.mp3", coverPath: "covers/1.jpg" },
    { songName: "Teri yaad menu", filePath: "songs/22.mp3", coverPath: "covers/2.jpg" },
    { songName: "Teri galliyan", filePath: "songs/23.mp3", coverPath: "covers/3.jpg" },
    { songName: "Dil meri na", filePath: "songs/24.mp3", coverPath: "covers/4.jpg" },
    { songName: "Heeriye", filePath: "songs/25.mp3", coverPath: "covers/5.jpg" },
    { songName: "Ham nashe to nhi", filePath: "songs/26.mp3", coverPath: "covers/6.jpg" },
    { songName: "Ayese mujhe tum", filePath: "songs/27.mp3", coverPath: "covers/7.jpg" },
    { songName: "Chalo ji saaf", filePath: "songs/28.mp3", coverPath: "covers/8.jpg" },
    { songName: "Jis raah jis", filePath: "songs/29.mp3", coverPath: "covers/9.jpg" },
    { songName: "Jug jug jiye", filePath: "songs/30.mp3", coverPath: "covers/10.jpg" },
    { songName: "Ye kabira", filePath: "songs/31.mp3", coverPath: "covers/1.jpg" },
    { songName: "Jane de", filePath: "songs/32.mp3", coverPath: "covers/2.jpg" },
    { songName: "Pass Bithaye", filePath: "songs/33.mp3", coverPath: "covers/3.jpg" },
    { songName: "Kaon hoon mai", filePath: "songs/34.mp3", coverPath: "covers/4.jpg" },
    { songName: "Kesariya tera", filePath: "songs/35.mp3", coverPath: "covers/5.jpg" },
    { songName: "Zindagi do pal", filePath: "songs/36.mp3", coverPath: "covers/6.jpg" },
    { songName: "Lambi zudayi", filePath: "songs/37.mp3", coverPath: "covers/7.jpg" },
    { songName: "Sidhu mushewala", filePath: "songs/38.mp3", coverPath: "covers/8.jpg" },
    { songName: "Dheere dheere", filePath: "songs/39.mp3", coverPath: "covers/9.jpg" },
    { songName: "Bus ek apna hi", filePath: "songs/40.mp3", coverPath: "covers/10.jpg" },
    { songName: "Chori Sadda", filePath: "songs/41.mp3", coverPath: "covers/1.jpg" },
    { songName: "Dil di ya Galla", filePath: "songs/42.mp3", coverPath: "covers/2.jpg" },
    { songName: "Phli phli baar", filePath: "songs/43.mp3", coverPath: "covers/3.jpg" },
    { songName: "Kya ho gaya", filePath: "songs/44.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tu bata", filePath: "songs/45.mp3", coverPath: "covers/5.jpg" },
    { songName: "Dil bara", filePath: "songs/46.mp3", coverPath: "covers/6.jpg" },
    { songName: "Ye Dooriyan", filePath: "songs/47.mp3", coverPath: "covers/7.jpg" },
    { songName: "Pata lagunga", filePath: "songs/48.mp3", coverPath: "covers/8.jpg" },
    { songName: "Rod fakira", filePath: "songs/49.mp3", coverPath: "covers/9.jpg" },
    { songName: "Falak takk", filePath: "songs/50.mp3", coverPath: "covers/10.jpg" },
    { songName: "Ye Ishq ki", filePath: "songs/51.mp3", coverPath: "covers/1.jpg" },
    { songName: "Teri galliyan", filePath: "songs/52.mp3", coverPath: "covers/2.jpg" },
    { songName: "Galliyan Remix", filePath: "songs/53.mp3", coverPath: "covers/3.jpg" },
    { songName: "Dil meri na", filePath: "songs/54.mp3", coverPath: "covers/4.jpg" },
    { songName: "Mai Jitni", filePath: "songs/55.mp3", coverPath: "covers/5.jpg" },
    { songName: "Ha tu hai", filePath: "songs/56.mp3", coverPath: "covers/6.jpg" },
    { songName: "Halki halki", filePath: "songs/57.mp3", coverPath: "covers/7.jpg" },
    { songName: "Hamari adhuri", filePath: "songs/58.mp3", coverPath: "covers/8.jpg" },
    { songName: "Han hum balane", filePath: "songs/59.mp3", coverPath: "covers/9.jpg" },
    { songName: "Heeriye", filePath: "songs/60.mp3", coverPath: "covers/10.jpg" },
    { songName: "Ham nashe me", filePath: "songs/61.mp3", coverPath: "covers/1.jpg" },
    { songName: "Jis raah", filePath: "songs/62.mp3", coverPath: "covers/2.jpg" },
    { songName: "Aaj saaf saaf", filePath: "songs/63.mp3", coverPath: "covers/3.jpg" },
    { songName: "Jis raah bhi", filePath: "songs/64.mp3", coverPath: "covers/4.jpg" },
    { songName: "Ek hi janam", filePath: "songs/65.mp3", coverPath: "covers/5.jpg" },
    { songName: "Ye kabira", filePath: "songs/66.mp3", coverPath: "covers/6.jpg" },
    { songName: "Jane de", filePath: "songs/67.mp3", coverPath: "covers/7.jpg" },
    { songName: "Pass bulaye", filePath: "songs/68.mp3", coverPath: "covers/8.jpg" },
    { songName: "Lambi judayi", filePath: "songs/69.mp3", coverPath: "covers/9.jpg" },
    { songName: "Sidhu mushewala", filePath: "songs/70.mp3", coverPath: "covers/10.jpg" },
    { songName: "Dheere dheere", filePath: "songs/71.mp3", coverPath: "covers/1.jpg" },
    { songName: "Ye duniya", filePath: "songs/72.mp3", coverPath: "covers/2.jpg" },
    { songName: "Mast najro se", filePath: "songs/73.mp3", coverPath: "covers/3.jpg" },
    { songName: "Mere soniya", filePath: "songs/74.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tumsa mila", filePath: "songs/75.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rom rom", filePath: "songs/76.mp3", coverPath: "covers/6.jpg" },
    { songName: "Le gyi dil da", filePath: "songs/77.mp3", coverPath: "covers/7.jpg" },
    { songName: "Ankha da", filePath: "songs/78.mp3", coverPath: "covers/8.jpg" },
    { songName: "With control", filePath: "songs/79.mp3", coverPath: "covers/9.jpg" },
    { songName: "Ruh baar baar", filePath: "songs/80.mp3", coverPath: "covers/10.jpg" },
    { songName: "Subah subah", filePath: "songs/81.mp3", coverPath: "covers/1.jpg" },
    { songName: "Main andhero", filePath: "songs/82.mp3", coverPath: "covers/2.jpg" },
    { songName: "Tera fitur", filePath: "songs/83.mp3", coverPath: "covers/3.jpg" },
    { songName: "Shining in the", filePath: "songs/84.mp3", coverPath: "covers/4.jpg" },
    { songName: "Kahaniyaan", filePath: "songs/85.mp3", coverPath: "covers/5.jpg" },
    { songName: "Tere liye", filePath: "songs/86.mp3", coverPath: "covers/6.jpg" },
    { songName: "Teri Or", filePath: "songs/87.mp3", coverPath: "covers/7.jpg" },
    { songName: "Nach da", filePath: "songs/88.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tu chahiye", filePath: "songs/89.mp3", coverPath: "covers/9.jpg" },
    { songName: "Ek tu hi", filePath: "songs/90.mp3", coverPath: "covers/10.jpg" },
    { songName: "Tu jane na", filePath: "songs/91.mp3", coverPath: "covers/1.jpg" },
    { songName: "Kaise batayen", filePath: "songs/92.mp3", coverPath: "covers/2.jpg" },
    { songName: "Tu meri aadat", filePath: "songs/93.mp3", coverPath: "covers/3.jpg" },
    { songName: "Her pal", filePath: "songs/94.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tujhko jo paya", filePath: "songs/95.mp3", coverPath: "covers/5.jpg" },
    { songName: "Tum mile", filePath: "songs/96.mp3", coverPath: "covers/6.jpg" },
    { songName: "Khwab bunta raha", filePath: "songs/97.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tere naal", filePath: "songs/98.mp3", coverPath: "covers/8.jpg" },
    { songName: "Balliye", filePath: "songs/99.mp3", coverPath: "covers/9.jpg" },
    { songName: "Mai dil ka raj", filePath: "songs/100.mp3", coverPath: "covers/10.jpg" },
    { songName: "Fitoor", filePath: "songs/101.mp3", coverPath: "covers/1.jpg" },
    { songName: "Zara sa dil me", filePath: "songs/102.mp3", coverPath: "covers/2.jpg" },
    { songName: "Meri maa k", filePath: "songs/103.mp3", coverPath: "covers/3.jpg" },
    { songName: "Meri maayi", filePath: "songs/104.mp3", coverPath: "covers/4.jpg" },
    { songName: "Shri krishn", filePath: "songs/105.mp3", coverPath: "covers/5.jpg" },
    { songName: "Bhole baba", filePath: "songs/106.mp3", coverPath: "covers/6.jpg" },
    { songName: "Mayiyaan", filePath: "songs/107.mp3", coverPath: "covers/7.jpg" },
    { songName: "Teri God me", filePath: "songs/108.mp3", coverPath: "covers/8.jpg" },
    { songName: "Ghi ke deep", filePath: "songs/109.mp3", coverPath: "covers/9.jpg" },
    { songName: "Namo namo", filePath: "songs/110.mp3", coverPath: "covers/10.jpg" },
    { songName: "Hey Kanha", filePath: "songs/111.mp3", coverPath: "covers/1.jpg" },
    { songName: "Om jai laxmi", filePath: "songs/112.mp3", coverPath: "covers/2.jpg" },
    { songName: "Radhey radhey", filePath: "songs/113.mp3", coverPath: "covers/3.jpg" },
    { songName: "Sawre surat", filePath: "songs/114.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tu Makhan", filePath: "songs/115.mp3", coverPath: "covers/5.jpg" },
    { songName: "Laxmi Katha", filePath: "songs/116.mp3", coverPath: "covers/6.jpg" },
    { songName: "Laxmi maiya", filePath: "songs/117.mp3", coverPath: "covers/7.jpg" },
    { songName: "Hanuman chalisa", filePath: "songs/118.mp3", coverPath: "covers/8.jpg" },
    { songName: "Subah subah", filePath: "songs/119.mp3", coverPath: "covers/9.jpg" },
    { songName: "Hey shambhu", filePath: "songs/120.mp3", coverPath: "covers/10.jpg" },
    { songName: "Ram siya ram", filePath: "songs/121.mp3", coverPath: "covers/1.jpg" },
    { songName: "Diwali special", filePath: "songs/122.mp3", coverPath: "covers/2.jpg" },
    { songName: "Hey shambhu", filePath: "songs/123.mp3", coverPath: "covers/3.jpg" },
    { songName: "Aai Pappi", filePath: "songs/124.mp3", coverPath: "covers/4.jpg" },
    { songName: "Maiya Teri", filePath: "songs/125.mp3", coverPath: "covers/5.jpg" },
    { songName: "Aloo Chaat", filePath: "songs/126.mp3", coverPath: "covers/6.jpg" },
    { songName: "Mere Gharke", filePath: "songs/127.mp3", coverPath: "covers/7.jpg" },
    { songName: "Hanuman Chalisa", filePath: "songs/128.mp3", coverPath: "covers/8.jpg" },
    { songName: "Mere Sar Pe", filePath: "songs/129.mp3", coverPath: "covers/9.jpg" },
    { songName: "Meri Maa", filePath: "songs/130.mp3", coverPath: "covers/10.jpg" },
    { songName: "Meri Puja", filePath: "songs/131.mp3", coverPath: "covers/1.jpg" },
    { songName: "Angreji Beat", filePath: "songs/132.mp3", coverPath: "covers/2.jpg" },
    { songName: "Om Jai Laxmi", filePath: "songs/133.mp3", coverPath: "covers/3.jpg" },
    { songName: "Radhe Radhe", filePath: "songs/134.mp3", coverPath: "covers/4.jpg" },
    { songName: "Raj Tilak", filePath: "songs/135.mp3", coverPath: "covers/5.jpg" },
    { songName: "Ram Siya Ram", filePath: "songs/136.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sai Teri", filePath: "songs/137.mp3", coverPath: "covers/7.jpg" },
    { songName: "Shri Ram", filePath: "songs/138.mp3", coverPath: "covers/8.jpg" },
    { songName: "Aj Brihaspati", filePath: "songs/139.mp3", coverPath: "covers/9.jpg" },
    { songName: "Ek Ayesa", filePath: "songs/140.mp3", coverPath: "covers/10.jpg" },
    { songName: "Hari Bhajan", filePath: "songs/141.mp3", coverPath: "covers/1.jpg" },
    { songName: "Brihaspati Bhajan", filePath: "songs/142.mp3", coverPath: "covers/2.jpg" },
    { songName: "Asur Nikandan", filePath: "songs/143.mp3", coverPath: "covers/3.jpg" },
    { songName: "Deewana Tera", filePath: "songs/144.mp3", coverPath: "covers/4.jpg" },
    { songName: "Dil Luteya", filePath: "songs/145.mp3", coverPath: "covers/5.jpg" },
    { songName: "Dope Shope", filePath: "songs/146.mp3", coverPath: "covers/6.jpg" },
    { songName: "Soni De Nakhre", filePath: "songs/147.mp3", coverPath: "covers/7.jpg" },
    { songName: "Kiss Me Baby", filePath: "songs/148.mp3", coverPath: "covers/8.jpg" },
    { songName: "Let's Celebrate", filePath: "songs/149.mp3", coverPath: "covers/9.jpg" },
    { songName: "Aapka Kya", filePath: "songs/150.mp3", coverPath: "covers/10.jpg" },
    { songName: "Blue Theme", filePath: "songs/151.mp3", coverPath: "covers/1.jpg" },
    { songName: "Fiqrana", filePath: "songs/152.mp3", coverPath: "covers/2.jpg" },
    { songName: "Love Mera", filePath: "songs/153.mp3", coverPath: "covers/3.jpg" },
    { songName: "Move Your Body", filePath: "songs/154.mp3", coverPath: "covers/4.jpg" },
    { songName: "Party With", filePath: "songs/155.mp3", coverPath: "covers/5.jpg" },

]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 160) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})




function dwlmusic() {
    let click = document.getElementById('dwlfile');
    click.addEventListener('click', () => {
        alert('Download Successfully');
    })
}


audioElement.addEventListener('ended', () => {

    if (songIndex >= 160) {
        songIndex = 0

    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
})



