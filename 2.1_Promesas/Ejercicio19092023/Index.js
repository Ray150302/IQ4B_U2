const btn = document.getElementById("btnAgregar");
const tarjetas = document.getElementById("tarjetas");

async function Get() {
    try {
        const respuesta = await fetch("https://randomuser.me/api/");
        const json = await respuesta.json();

        const nombre = json.results[0].name.first;
        const img = json.results[0].picture.large;
        const city = json.results[0].dob.age;

        const card = document.createElement("div");
        card.classList.add("card");
        card.width = 18;

        const img1 = document.createElement("img");
        img1.src = img;
        img1.alt = "User Image";
        img1.width = 200;
        img1.height = 200;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const nombre1 = document.createElement("h5");
        nombre1.textContent = nombre;

        const ciudad1 = document.createElement("p");
        ciudad1.textContent = city;

        
        card.appendChild(img1);
        cardBody.appendChild(nombre1);
        cardBody.appendChild(ciudad1);
        card.appendChild(cardBody);

        tarjetas.appendChild(card);

    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
    }
}

btn.addEventListener("click", function () {
    Get();
});
