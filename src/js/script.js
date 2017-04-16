function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var lyricTabs = document.getElementsByTagName('h4');
for (let i = 0; i < lyricTabs.length; i++) {
    lyricTabs[i].addEventListener('click', toggleSongDisplay);
}

function toggleSongDisplay(e) {
    var lyrics = e.target.parentElement.getElementsByTagName('div');
    lyrics[0].classList.toggle('hide');
    var songs = lyrics[0].getElementsByTagName('h6');
    for (let i = 0; i < songs.length; i++) {
        songs[i].classList.toggle('hide');
        songs[i].addEventListener('click', toggleLyricDisplay);
    }

    function toggleLyricDisplay(e) {


        if (e.target.nextSibling == 'P') {
            var song = e.target.nextSibling;
        } else {
            var song = e.target.nextSibling.nextSibling;
        }

        song.classList.toggle('hide');


    }
}
