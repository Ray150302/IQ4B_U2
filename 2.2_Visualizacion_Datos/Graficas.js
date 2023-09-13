let data = {
    labels: [],
    datasets: [
        {
            label: "Lenguajes de programación",
            data: [],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
            ],
            borderWidth: 1,
        },
    ],
};

let config = {
    type: "bar",
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const canvas = document.getElementById("chart").getContext("2d");
const chart = new Chart(canvas, config);

document.getElementById("btnAgregar").addEventListener("click", () => {
    const nombre = document.getElementById("txtNombre").value;
    const porcentaje = parseFloat(document.getElementById("txtPorcentaje").value);

    data.labels.push(nombre);
    data.datasets[0].data.push(porcentaje);

    chart.update();

    // Limpiar los campos de entrada
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtPorcentaje").value = "";
});