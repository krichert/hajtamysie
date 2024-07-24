let password = '';

function playEcho() {
    var play = document.getElementById("play-echo-music");
    play.play();
}

function playNormal() {
    var play = document.getElementById("play-music");
    play.play();
}

function stopNormal() {
    var play = document.getElementById("play-music");
    play.pause();
}

setTimeout(playNormal, 5000);

document.addEventListener("keypress", function (event) {
    if (event.key === 'e') {
        password = 'e'
    } else if (event.key === 'c') {
        password = 'ec'
    } else if (event.key === 'h') {
        password = 'ech'
    } else if (event.key === 'o') {
        password = 'echo'
    } else {
        password = ''
    }

    if (password === 'echo') {
        stopNormal();
        playEcho();

        var myName = "Echo Kielona";

        var red = [0, 100, 63];
        var orange = [40, 100, 60];
        var green = [75, 100, 40];
        var blue = [196, 77, 55];
        var purple = [280, 50, 60];
        var letterColors = [red, orange, green, blue, purple];

        drawName(myName, letterColors);

        bubbleShape = 'circle';


        bounceBubbles();

        document.getElementById('myCanvas').style.display = 'block';
        const sections = document.getElementsByTagName('section')
        for (let section of sections) {
            section.style.display = 'none'
        }
    }
});

