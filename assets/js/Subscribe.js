document.addEventListener('DOMContentLoaded', () => {
    const subscribeButton = document.getElementById('subscribe');
    const countsub = document.getElementById('countsub');

    let count = localStorage.getItem('countsub') ? parseInt(localStorage.getItem('countsub')) : 200;
    countsub.textContent = count;

    subscribeButton.addEventListener('click', () => {
        event.preventDefault(); 
        sent();
        count++;
        countsub.textContent = count;
        localStorage.setItem('countsub', count);
    });
});

function sent() {
    alert("Thank you for your support!");
}