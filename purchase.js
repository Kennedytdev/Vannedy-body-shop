document.addEventListener('DOMContentLoaded', function () {
    const appointmentSummary = JSON.parse(localStorage.getItem('appointmentSummary')) || [];
    const appointmentDetailsDiv = document.getElementById('appointment-details');
    const totalPriceSpan = document.getElementById('total-price');

    let totalPrice = 0;

    appointmentSummary.forEach(service => {
        const div = document.createElement('div');
        div.textContent = `${service.serviceName} - $${service.price.toFixed(2)} ・ ${service.duration} min`;
        appointmentDetailsDiv.appendChild(div);
        totalPrice += service.price;
    });

    totalPriceSpan.textContent = totalPrice.toFixed(2);

    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Payment submitted! Your appointment is confirmed.');
        localStorage.removeItem('appointmentSummary');
        window.location.href = 'thankyou.html';  // Redirect to a thank you page or back to the homepage
    });
});
