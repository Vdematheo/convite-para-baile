document.getElementById('yes-btn').addEventListener('click', function() {
    window.location.href = 'sim.html';
});

const noBtn = document.getElementById('no-btn');
let clickCount = 0;

noBtn.addEventListener('click', function() {
    clickCount++;
    if (clickCount >= 8) {
        // Transforma-se no botão "sim"
        noBtn.textContent = 'sim';
        noBtn.style.backgroundColor = 'yellow';
        noBtn.style.color = 'black';
        noBtn.style.animation = 'pulse 1s infinite';
        noBtn.style.transform = 'scale(1.3)'; // Tamanho maior do botão
        noBtn.removeEventListener('click', arguments.callee); // Remove o listener antigo
        noBtn.addEventListener('click', function() {
            window.location.href = 'sim.html';
        });
    }
});
