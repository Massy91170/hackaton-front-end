fetch("http/localhost:3000/cart")
.then (response => response.json())
.populate("trajet")
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