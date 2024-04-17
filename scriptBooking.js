fetch("http://localhost:3000/bookings")
.then (Response => Response.json())
.then (data => {
    console.log(data)
    //document.querySelector("#databaseContainer").innerHTML = `<div></div>` 
    for (let i = 0; i < data.length; i++){
        const pattern = /(\d{2}:\d{2})/;
        console.log(data)
        document.querySelector("#databaseContainer").innerHTML += `<div class ="row">
            <div class="trajet">
                <div>${data[i].trajet.departure}</div>
                <div>></div>
                <div>${data[i].trajet.arrival}</div>
            </div>
            <div>${data[i].trajet.date.match(pattern)[0]}</div>
            <div>${data[i].trajet.price} €</div>
            <button class="delete">SoonTM</button>
        </div>`
    }
})





