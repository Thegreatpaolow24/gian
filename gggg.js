const buttons = document.querySelectorAll('.response');
const responseElement = document.getElementById('response');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        responseElement.textContent = button.getAttribute('data-response');
    });
});
