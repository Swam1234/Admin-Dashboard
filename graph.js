
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Angry', 'Satified', 'Happy', 'No Comments'],
        datasets: [{
            label: '# of Votes',
            data: [5, 7, 7, 9],
            backgroundColor: [
                '#dc3545',
                '#ffc107',
                '#20c997',
                '#f8f9fa'
            ],
            borderColor: [
                '#dc3545',
                '#ffc107',
                '#20c997',
                '#f8f9fa'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: false,
            }
        },

        plugins: {
            legend: {
                display: false
            },
        }
    }
});

const bar = document.getElementById('bar').getContext('2d');
const barChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['Complaints', 'Features', 'Warranty', 'Qualiy'],
        datasets: [{
            label: '# of Votes',
            data: [42, 51, 28, 78],
            backgroundColor: [
                '#dc3545',
                '#0dcaf0',
                '#ffc107',
                '#20c997'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
            borderRadius: 10,
        }]
    },
    options: {
        indexAxis: 'y', //To Horizontal
        scales: {
            y: {
                beginAtZero: true,
                display: false
            },
            x: {
                beginAtZero: true,
                display: false
            },
        },

        plugins: {
            legend: {
                display: false
            },
        }
    }
});