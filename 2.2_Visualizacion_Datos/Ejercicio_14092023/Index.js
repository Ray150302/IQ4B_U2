const canvas = document.getElementById("chart").getContext("2d");

// Inicializar datos gráfica
let hombres = 0;
let mujeres = 0;

const data = {
    labels: ["Masculino", "Femenino"],
    datasets: [{
        label: 'Genero',
        data: [hombres, mujeres], // Variables iniciales
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          
        ],
        borderColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
           
        ],
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 10, 
            }
        }
    },
};

const chart = new Chart(canvas, config);

// Obtener perfil 
const getProfile = async () => {
    const response = await fetch("https://randomuser.me/api/");

    if (response.status === 200) { 
        const data = await response.json(); 

       
        const tablaPerfiles = document.getElementById("tablaPerfiles").getElementsByTagName('tbody')[0];
        const newRow = tablaPerfiles.insertRow();
      
        const sexoCell = newRow.insertCell(0);

      
        sexoCell.textContent = data.results[0].gender;

        
        if (data.results[0].gender === "male") {
            hombres++; // Aumentar cantidas
        } else if (data.results[0].gender === "female") {
            mujeres++; 
        }

        
        chart.data.datasets[0].data = [hombres, mujeres];
        chart.update(); 
    }
};

document.getElementById("btnGenerar").addEventListener("click", getProfile);