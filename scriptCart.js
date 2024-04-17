fetch("http://localhost:3000/cart")
.then (response => response.json())
.then (data => {
    console.log(data)
    //document.querySelector("#databaseContainer").innerHTML = `<div></div>` 
    for (let i = 0; i < data.length; i++){
        const pattern = /(\d{2}:\d{2})/;
        document.querySelector("#databaseContainer").innerHTML += `<div class ="row">
            <div class="trajet">
                <div data-departure = ${data[i].departure}>${data[i].trajet.departure}</div>
                <div>></div>
                <div data-arrival = ${data[i].arrival}>${data[i].trajet.arrival}</div>
            </div>
            <div data-date = ${data[i].date}>${data[i].trajet.date.match(pattern)[0]}</div>
            <div data-price = ${data[i].price}>${data[i].trajet.price} €</div>
            <button class="delete">X</button>
        </div>`
    }
})

function supprimerElement(event) {
    // Obtenez l'élément parent (div.row) de celui sur lequel le bouton a été cliqué
    const rowToRemove = event.target.closest('.row');
    
    // Vérifiez si un élément parent a été trouvé
    if (rowToRemove) {
        // Supprimez l'élément parent (div.row)
        rowToRemove.remove();
    }
}

// Ajoutez un écouteur d'événements à l'élément contenant les éléments à supprimer
document.querySelector("#databaseContainer").addEventListener('click', function(event) {
    // Vérifiez si le clic a été effectué sur le bouton de suppression
    if (event.target.classList.contains('delete')) {
        // Appelez la fonction de suppression en passant l'événement
        supprimerElement(event);
    }
});