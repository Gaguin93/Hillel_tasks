const buttonContainer = document.getElementById('buttonContainer');
buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        alert(`Клікнуто по кнопці: ${event.target.textContent}`);
    }
});