let appointmentSummary = [];

function addToSummary(serviceName, price, duration) {
    appointmentSummary.push({ serviceName, price, duration });
    updateSummary();
}

function updateSummary() {
    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = '';
    appointmentSummary.forEach(service => {
        const div = document.createElement('div');
        div.textContent = `${service.serviceName} - $${service.price.toFixed(2)} ・ ${service.duration} min`;
        summaryDiv.appendChild(div);
    });
    document.getElementById('next-button').disabled = appointmentSummary.length === 0;
}

function nextStep() {
    alert('Proceed to the next step (e.g., enter personal details and confirm booking).');
}
