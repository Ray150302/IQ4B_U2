const btn = document.getElementById("btn");
let nombres = [];

async function Get(){
    try{
    const respuesta = await fetch("https://randomuser.me/api/");
    const json = await respuesta.json();

     const nombre = (json.results[0].name.first);
     alert(nombre);
        nombres.push(nombre);
        console.log(nombres);
    }catch(error){
        alert("Error Fatal borre System 32 :c");
    }
}

    btn.addEventListener("click",function(){
        Get();
    });