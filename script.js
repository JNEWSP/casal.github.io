const messages = [
    "Tem certeza?",
    "você gosta de vermelho?😑 ",
    "Petista?🤔",
    "Você está batendo bem da cabeça?",
    "Pookie não, por favor...",
    "Pense nisso!, você não está pensando direito!",
    "Se você disser não, ficarei muito triste...",
    "ficarei muito triste se continuar...",
    "Vou ficar muito, muito triste...",
    "Brincadeirinha, diga sim, por favor!👉🏻👈🏻"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}