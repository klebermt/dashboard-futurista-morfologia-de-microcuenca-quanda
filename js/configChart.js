// grafico de curva hipsométrica
const labels = [100, 97, 93, 84, 71, 54, 37, 19, 4, 0].reverse();

const dataPoints = [
  { x: 100, y: 687 },
  { x: 97, y: 900 },
  { x: 93, y: 1113 },
  { x: 84, y: 1326 },
  { x: 71, y: 1539 },
  { x: 54, y: 1753 },
  { x: 37, y: 1966 },
  { x: 19, y: 2179 },
  { x: 4, y: 2392 },
  { x: 0, y: 2605 },
];

new Chart(document.getElementById("curva-hipsometrica"), {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Curva hipsométrica",
        data: dataPoints,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        showLine: true,
        tension: 0.1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        title: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 3000,
        ticks: {
          stepSize: 500,
        },
        title: {
          display: false,
        },
      },
    },
  },
});

// Grafico de barras de elevaciones

const elevations = {
  labels: [687, 900, 1113, 1326, 1539, 1753, 1966, 2179, 2392, 2605],
  datasets: [
    {
      label: "Porcentaje de áreas por elevaciones",
      data: [2.51, 4.46, 8.42, 13.24, 16.51, 17.77, 17.71, 14.74, 4.2, 0.45],
      backgroundColor: ["rgba(6, 64, 86, 0.2)"],
      borderColor: ["rgb(75, 192, 192)"],
      borderWidth: 1,
    },
  ],
};

new Chart(document.getElementById("barra-elevations"), {
  type: "bar",
  data: elevations,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Gráfico de pie Slope

const dataSlope = {
  labels: ["plano", "Muy ligeramente inclinado", "Ligeramente inclinado", "Inclinado", "Fuertemente inclinado", "Moderadamente escarpado", "Escarpado", "Muy escarpado"],
  datasets: [
    {
      label: "Slope",
      data: [0.321, 0.075, 0.336, 1.093, 2.383, 19.868, 36.908, 8.966],
      backgroundColor: [
        "rgba(24, 221, 248, .2)",
        "rgba(0, 191, 222, .2)",
        "rgba(0, 152, 187, .2)",
        "rgba(7, 121, 151, .2)",
        "rgba(16, 98, 122, .2)",
        "rgba(18, 81, 103, .2)",
        "rgba(6, 64, 86, .2)",
      ],
      hoverOffset: 4,
    },
  ],
};

new Chart(document.getElementById("pie-slope"), {
  type: "pie",
  data: dataSlope,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    }
  } 
});
