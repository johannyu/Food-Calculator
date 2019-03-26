// Button Functions

function monthlySpendings() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx,
        {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [{
                    label: 'Monthly Spendings',
                    data: [450, 539, 436, 425, 415, 418],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(255,99,132,1)'],
                    borderWidth: 1,
                }]
            },
            options: {
                title: {
                    display: true,
                    position: 'top',
                    fontSize: 25,
                    fontColor: '#2B2F51',
                    text: 'Monthly Spendings',
                },

                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }


    );
}

function weeklySpendings() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx,
        {
            type: 'line',
            data: {
                labels: ["Week1", "Week2", "Week3", "Week4"],
                datasets: [{
                    label: 'Weekly Spendings',
                    data: [102, 130, 99, 114],
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    position: 'top',
                    fontSize: 25,
                    fontColor: '#2B2F51',
                    text: 'Weekly Spendings',
                },

                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }


    );
}

function dailySpendings() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx,
        {
            type: 'line',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    label: 'Daily Spendings',
                    data: [30, 33, 25, 13, 24, 22, 29],
                    backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                    borderColor: ['rgba(255, 206, 86, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    position: 'top',
                    fontSize: 25,
                    fontColor: '#2B2F51',
                    text: 'Daily Spendings',
                },

                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    );
}