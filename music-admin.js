function adminDisplayMusic() {
    fetch('https://hajtamysie-f1ce9-default-rtdb.europe-west1.firebasedatabase.app/music.json')
        .then(r => r.json())
        .then(data => Object.values(data))
        .then((data) => {
            const container = document.querySelector('#music table');
    
            let music = '';
            data.forEach(m => {
                music = music + '<tr><td>' + m + '</td></tr>'
            });
    
            container.innerHTML = music;
        })
}

adminDisplayMusic();