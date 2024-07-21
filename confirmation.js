function addConfirmation(name) {
    fetch('https://hajtamysie-f1ce9-default-rtdb.europe-west1.firebasedatabase.app/confirmation.json', {
        method: 'POST',
        body: JSON.stringify(name)
    }).then(() => {
        alert('Dziękujemy i do zoabczenia :)')
    })
}

document.querySelector('#confirmation form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target[0].value !== '') {
        addConfirmation(e.target[0].value)
    }

    e.target[0].value = '';
})