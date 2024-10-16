// Simulated real-time data update for X, Y, Z axis
setInterval(() => {
    let xValue = (Math.random() * 10).toFixed(2);
    let yValue = (Math.random() * 10).toFixed(2);
    let zValue = (Math.random() * 10).toFixed(2);

    document.getElementById('x-value').innerText = xValue;
    document.getElementById('y-value').innerText = yValue;
    document.getElementById('z-value').innerText = zValue;
}, 1000);

// Example tremor data update
let tremorStage = document.getElementById('tremor-stage');
let stageNumber = document.querySelector('.stage-number');

let tremorData = 2;  // Example stage
tremorStage.setAttribute('data-stage', tremorData);
stageNumber.innerText = tremorData;
