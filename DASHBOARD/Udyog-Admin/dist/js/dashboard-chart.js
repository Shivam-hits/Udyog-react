let delayed;

const analyticsChartCtx = document.querySelector('#analyticsChart').getContext('2d');
let gradient =  analyticsChartCtx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(92,120,220, 1)");
gradient.addColorStop(1, "rgba(92,120,220, 0.2)");

const data = {
    labels: ["April", "March", "May", "June", "July", "August", 'Septemer'],
    datasets: [
        {
            label: "Order Value in Lakhs Per Month",
            data: [4, 8, 17, 33, 24, 42,34],
            backgroundColor: gradient,
            borderColor: 'rgba(92,120,220, 1)',
            borderWidth: 1,
            fill: true
        },
    ],
};

const config = {
    type: "line",
    data: data,
    options: {
        responsive: true,
        hoverRadius: 8,
        scales: {
            y: {
                beginAtZero: true,
                grace: "50%",
            },
        },
        elements: {
            line: {
                tension: 0.4,
                borderJoinStyle: "round",
            },
        },
        interaction: {
            intersect: false,
            mode: "nearest",
        },
        plugins: {
            legend: {
                position: "top",
            },
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (
                    context.type === "data" &&
                    context.mode === "default" &&
                    !delayed
                ) {
                    delay =
                        context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
    },
};

const myChart = new Chart(analyticsChartCtx, config);