function getGames() {
    return fetch('https://hajtamysie-f1ce9-default-rtdb.europe-west1.firebasedatabase.app/games.json')
        .then(r => r.json())
        .then(data => Object.keys(data).map(k => ({ id: k, ...data[k]})))
}

function displayGames() {
    getGames().then(data => {
        const container = document.querySelector('#games #container');
        const localData = JSON.parse(localStorage.getItem('game-like'));

        let games = '';
        data.forEach(game => {
            if (localData && localData[game.name]) {
                games = games + '<tr><td>' + game.name + '</td><td><span class="material-symbols-outlined material-symbols-outlined-fill" style="margin-top: 18px;">thumb_up</span></td>' + '</tr>'
            } else {
                games = games + '<tr><td>' + game.name + '</td><td><a data-likes="'+ game.likes + '" data-id="'+ game.id + '" data-name="' + game.name +'" class="game-like-btn"><span class="material-symbols-outlined" style="margin-top: 18px;">thumb_up</span></a></td>' + '</tr>'
            }
        });

        container.innerHTML = games;
    }).then(() => {
        document.querySelectorAll('.game-like-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const localData = JSON.parse(localStorage.getItem('game-like'));
                const name = btn.getAttribute('data-name');
                const id = btn.getAttribute('data-id');
                const likes = btn.getAttribute('data-likes');

                if (localData === null) {
                    localStorage.setItem('game-like', JSON.stringify({ [name]: true }));
                } else {
                    localStorage.setItem('game-like', JSON.stringify({ ...localData, [name]: true }));
                }

                displayGames();
                fetch('https://hajtamysie-f1ce9-default-rtdb.europe-west1.firebasedatabase.app/games/' + id + '.json', {
                    method: 'PUT',
                    body: JSON.stringify({ name, likes: Number.parseInt(likes) + 1 })
                }).then(() => {
                    displayGames();
                })
            })
        })
    })
}

function addGame(name) {
    fetch('https://hajtamysie-f1ce9-default-rtdb.europe-west1.firebasedatabase.app/games.json', {
        method: 'POST',
        body: JSON.stringify({ name, likes: 0 })
    }).then(() => {
        displayGames();
    })
}

displayGames();

document.querySelector('#games form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target[0].value !== '') {
        addGame(e.target[0].value).then(() => {
            displayGames();
        })
    }
});
