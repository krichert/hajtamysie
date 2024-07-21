function addMusic(name) {
    fetch('https://hajtamysie-f1ce9-default-rtdb.europe-west1.firebasedatabase.app/music.json', {
        method: 'POST',
        body: JSON.stringify(name)
    }).then(() => {
        alert('Dziękujemy! :)')
    })
}

document.querySelector('#music form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target[0].value !== '') {
        addMusic(e.target[0].value)
    }

    e.target[0].value = '';
})