// JavaScript for handling button click
const interactiveButton = document.getElementById('interactiveButton');
const message = document.getElementById('message');

interactiveButton.addEventListener('click', () => {
    message.textContent = 'Button Clicked!';
});
