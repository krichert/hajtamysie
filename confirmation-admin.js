function adminConfirmationGames() {
    fetch('https://hajtamysie-f1ce9-default-rtdb.europe-west1.firebasedatabase.app/confirmation.json')
        .then(r => r.json())
        .then(data => Object.values(data))
        .then((data) => {
            const container = document.querySelector('#confirmation table');

            console.log(data)
    
            let confirmation = '';
            data.forEach(c => {
                confirmation = confirmation + '<tr><td>' + c + '</td></tr>'
            });
    
            container.innerHTML = confirmation;
        })
}

adminConfirmationGames();