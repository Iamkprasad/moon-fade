window.onload = function() {
    setTimeout(function() {
        document.getElementById('moon').style.opacity = 1;
        setTimeout(function() {
            document.getElementById('poem').innerHTML = "Under the full moon's radiant glow,<br>Your soul was born, a light to show,<br>Like silver beams in endless skies,<br>You shine with grace that never dies.";
            document.getElementById('poem').style.opacity = 1;
            setTimeout(function() {
                document.getElementById('playButton').style.display = 'block';
                document.getElementById('stopButton').style.display = 'block';
            }, 3000);
        }, 3000);
    }, 2000);
}

// Play the song when the Play button is clicked
document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    audio.play();
});

// Stop the song when the Stop button is clicked
document.getElementById('stopButton').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    audio.pause();
    audio.currentTime = 0; // Reset the song to the beginning
});
