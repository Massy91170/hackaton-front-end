// FETCH POST POUR EVOYER AU BACKEND  LES PARAMS DE SEARCH VERIFIER FORMAT DATE :'(
document.querySelector("#button").addEventListener("click", function (){
    const departureValue = document.querySelector("#departure").value;
    const arrivalValue = document.querySelector("#arrival").value;
    const dateValue = document.querySelector("#date").value;

    console.log(departureValue);
    console.log(dateValue);

    fetch(`http://localhost:3000/trajets/${departureValue}/${arrivalValue}/${dateValue}`)
    .then (Response => Response.json())
    .then (data => {
            // const searchedDate = req.body.date;
    // const formatedDate = searchedDate.slice(0, 10);
    const pattern = /(\d{2}:\d{2})/;
    // const found = searchedDate.match(pattern);
    // console.log("found: ", found)
        document.querySelector("#thirddivhome").innerHTML = `<div></div>` 
        for (let i = 0; i < data.length; i++){
            document.querySelector("#thirddivhome").innerHTML += `<div class ="row" data-testid = ${data[i]._id}>
                <div data-departure = ${data[i].departure}>${data[i].departure}</div>
                <div>></div>
                <div data-arrival = ${data[i].arrival}>${data[i].arrival}</div>
                <div data-date = ${data[i].date}>${data[i].date.match(pattern)[0]}</div>
                <div data-price = ${data[i].price}>${data[i].price} €</div>
                <button class="addToCart">add cart</button>
            </div>`
        }
    })
    .then(() => {
        const addToCartArray = document.querySelectorAll(".addToCart");
        for (let cart = 0; cart < addToCartArray.length; cart ++){
            addToCartArray[cart].addEventListener("click", function (){ //addEventListener to add dans cart mongo-DB
                fetch("http/localhost:3000/", { 
                    method: "POST",
                    headers: { "Content-Type": "applicatiion/json" },
                    body: JSON.tostringify({
                        _id: this.data-test,
                    })
                })
                window.location.href = "./cart.html";
            })
        }
    })
});

// 



