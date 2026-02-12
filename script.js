function createHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px'; // Larger hearts
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

const noBtn = document.getElementById('no-btn');
const phrases = [
    "Are you sure?", "Think again!", "Really sure?", 
    "Look at my eyes 🥺", "Don't do this!", "I'm gonna cry...", 
    "You're breaking my heart", "Last chance!", "Pretty please?", "Reevii..🥺"
];
let phraseIdx = 0;

const moveButton = () => {
    noBtn.style.position = 'fixed';
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    const x = Math.max(20, Math.floor(Math.random() * maxX));
    const y = Math.max(20, Math.floor(Math.random() * maxY));
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.innerText = phrases[phraseIdx];
    phraseIdx = (phraseIdx + 1) % phrases.length;
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

document.getElementById('yes-btn').addEventListener('click', () => {
    document.getElementById('proposal-section').classList.add('hidden');
    document.getElementById('success-section').classList.remove('hidden');
});

document.getElementById('gift-icon').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('final-message').classList.remove('hidden');
});



// ... keep your existing heart and button logic ...

document.getElementById('gift-icon').addEventListener('click', function() {
    this.style.display = 'none';
    const finalMsg = document.getElementById('final-message');
    finalMsg.classList.remove('hidden');
    
    // Small auto-scroll hint
    const wrapper = document.querySelector('.scroll-wrapper');
    setTimeout(() => {
        wrapper.scrollTo({
            left: 100,
            behavior: 'smooth'
        });
    }, 500);
});