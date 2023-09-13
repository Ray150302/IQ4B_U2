let data = {
  labels: ["ya comieron", "no han comido", "Indiferente"],
  datasets: [
    {
      label: "Lenguajes de programación",
      data: [10, 66, 25],
      backgroundColor: "rgba(125, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 1,
    },
    {
      label: "Lenguajes de programación2",
      data: [35, 15, 60],
      backgroundColor: "rgba(226, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
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
  // const nombre = document.getElementById("txtNombre").value;
  // const porcentaje = parseFloat(document.getElementById("txtPorcentaje").value);

  // data.labels.push(nombre);
  // data.datasets[0].data.push(porcentaje);

  const serie = document.getElementById("txtSerie").value;

  data.datasets.push({
    label: serie,
    data: [20, 25, 30],
    backgroundColor: "rgba(226, 99, 132, 0.2)",
    borderColor: "rgb(255, 99, 132)",
    borderWidth: 1,
  });

  chart.update();
});
