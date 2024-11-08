let emptyLink ='';
const inputLinkButton = document.getElementById('inputLink');
const redirectButton = document.getElementById('redirect');
inputLinkButton.addEventListener('click', () => {
    const link = prompt('Введіть посилання для переходу:');
    if (link && link.startsWith('http')) {
        userLink = link;
        alert(`Посилання збережено: ${userLink}`);
    } else {
        alert('Некоректне посилання. Введіть посилання, яке починається з "http".');
    }
});
redirectButton.addEventListener('click', () => {
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert('Спочатку введіть посилання');
    }
});