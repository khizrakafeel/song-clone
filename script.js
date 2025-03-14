document.addEventListener("DOMContentLoaded", function () {
    const song1Audio = document.querySelector("#s-1 audio");
    const song2Audio = document.querySelector("#s-2 audio");
    const bottomAudio = document.querySelector(".bottom-player audio");
    const audioSource = bottomAudio.querySelector("source");
    const bottomSongText = document.getElementById("current-song");

    function stopAllSongs(except) {
        [song1Audio, song2Audio, bottomAudio].forEach(audio => {
            if (audio !== except) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }

    
    song1Audio.addEventListener("play", function () {
        stopAllSongs(song1Audio); 
        bottomSongText.innerHTML = "<strong>Now Playing: Song 1</strong>";
    });

    
    song2Audio.addEventListener("play", function () {
        stopAllSongs(song2Audio); 

        
        audioSource.src = song2Audio.querySelector("source").src;
        bottomAudio.load();
        bottomAudio.play();

        bottomSongText.innerHTML = "<strong>Now Playing: Song 2</strong>";
    });

    
    song1Audio.addEventListener("play", function () {
        stopAllSongs(song1Audio);
        bottomSongText.innerHTML = "<strong>Now Playing: Song 1</strong>";
    });


    bottomAudio.addEventListener("pause", function () {
        if (!song2Audio.paused) {
            song2Audio.pause();
        }
    });

    bottomAudio.addEventListener("play", function () {
        stopAllSongs(bottomAudio); 
    });
});
