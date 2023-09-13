// const img   = document.getElementById("imgMascota");
const span = document.getElementById("estatus");
const btn = document.getElementById("btnConsultar");
const contenedor = document.getElementById("contenedor");

btn.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((respuesta) => respuesta.json())
      .then((json) => {
        const img = document.createElement("img");
        img.width = 200;
        img.height = 200;
        img.src = json.message;
        contenedor.appendChild(img);
        // span.innerText = json.status; 
      });
  });

// btn.addEventListener("click",()=>{
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(respuesta =>respuesta.json())
//     .then(json =>{
//         span.innerText=json.status;
//         img.src = json.message;
//     });
// });
