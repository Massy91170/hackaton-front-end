fetch("http://localhost:3000/cart")
    .then (response => response.json())
    .then (data => {
        console.log(data)
        //document.querySelector("#databaseContainer").innerHTML = `<div></div>` 
        for (let i = 0; i < data.length; i++){
            const pattern = /(\d{2}:\d{2})/;
            document.querySelector("#databaseContainer").innerHTML += `<div class ="row">
                <div class="trajet">
                    <div>${data[i].trajet.departure}</div>
                    <div>></div>
                    <div> ${data[i].trajet.arrival}</div>
                </div>
                <div>${data[i].trajet.date.match(pattern)[0]}</div>
                <div>${data[i].trajet.price} €</div>
                <button class="delete" data-id=${data[i]._id.toString()} data-idStrangerKey=${data[i].trajet._id.toString()} >X</button>
            </div>`;
            console.log("DATA", document.querySelector(".delete").getAttribute("data-id")) // return _id correctly
        }
    })
    .then((data) => {
        console.log("test", data)
        console.log("DATA IN OTHER THEN", document.querySelector(".delete").getAttribute("data-id"))
        const allDelete = document.querySelectorAll(".delete");
        for (let deleteButton = 0; deleteButton < allDelete.length; deleteButton++){
            allDelete[deleteButton].addEventListener("click", function () {
                this.parentNode.remove()
                console.log(this.getAttribute("data-id"))
                fetch("http://localhost:3000/cart",{
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: this.getAttribute("data-id")
                    })
                })
                .then(()=>{})
            })
        }
    })
    .then(()=> {
        document.querySelector("#purchase").addEventListener("click", function (){
            allCart = document.querySelectorAll(".delete");
            for(let cart = 0; cart < allCart.length; cart++){
                console.log("data-id", allCart[cart].getAttribute("data-idStrangerKey"))
                fetch("http://localhost:3000/bookings", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        id: allCart[cart].getAttribute("data-idStrangerKey"),
                    }),
                })
                .then(()=>{})
            }
            // window.location("booking.html")
        })
    })

    // .then (data => console.log(data))


    //--------------------------------SEND TO BOOKINGS DATABASE--------------------------------


