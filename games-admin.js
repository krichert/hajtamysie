
function adminDisplayGames() {
    fetch('https://hajtamysie-f1ce9-default-rtdb.europe-west1.firebasedatabase.app/games.json')
        .then(r => r.json())
        .then(data => Object.keys(data).map(k => ({ id: k, ...data[k]})))
        .then((data) => {
            const container = document.querySelector('#games table');
    
            let games = '';
            data.forEach(g => {
                games = games + '<tr><td>' + g.name + '</td><td>' + g.likes + '</td></tr>'
            });
    
            container.innerHTML = games;
        })
}

adminDisplayGames();