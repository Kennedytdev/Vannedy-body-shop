let appointmentSummary = [];

function addToSummary(serviceName, price, duration) {
    appointmentSummary.push({ serviceName, price, duration });
    updateSummary();
}

function removeFromSummary(index) {
    appointmentSummary.splice(index, 1);
    updateSummary();
}

function updateSummary() {
    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = '';
    appointmentSummary.forEach((service, index) => {
        const div = document.createElement('div');
        div.textContent = `${service.serviceName} - $${service.price.toFixed(2)} ・ ${service.duration} min`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromSummary(index);
        div.appendChild(removeButton);
        summaryDiv.appendChild(div);
    });
    document.getElementById('next-button').disabled = appointmentSummary.length === 0;
}

function nextStep() {
    localStorage.setItem('appointmentSummary', JSON.stringify(appointmentSummary));
    window.location.href = 'purchase.html';
}
