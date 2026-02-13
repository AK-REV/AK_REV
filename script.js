// 1. "No" Button Escape Logic - Continuous Phrases
const noBtn = document.getElementById('no-btn');
const phrases = [
    "Are you sure?", 
    "Think again!", 
    "Pwease? 🥺", 
    "Last chance!", 
    "Reevii..🥺", 
    "Really sure?", 
    "Don't do this!", 
    "I'm gonna cry...", 
    "You're breaking my heart",
    "Change of heart?"
];
let phraseIdx = 0;

const moveButton = () => {
    // Teleport button
    noBtn.style.position = 'fixed';
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    const x = Math.max(20, Math.floor(Math.random() * maxX));
    const y = Math.max(20, Math.floor(Math.random() * maxY));
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    
    // Continuous phrase cycling
    noBtn.innerText = phrases[phraseIdx];
    phraseIdx = (phraseIdx + 1) % phrases.length; // Resets to 0 after last phrase
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

// 2. Wheel Initialization
function setupWheel() {
    const images = document.querySelectorAll('.wheel-img');
    const totalImages = images.length;
    const angleStep = 360 / totalImages;
    const radius = window.innerWidth < 600 ? 160 : 320; 

    images.forEach((img, i) => {
        const angle = i * angleStep;
        img.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });
}

// 3. Section Transitions
document.getElementById('yes-btn').addEventListener('click', () => {
    document.getElementById('proposal-section').classList.add('hidden');
    document.getElementById('success-section').classList.remove('hidden');
});

document.getElementById('gift-icon').addEventListener('click', function() {
    // 1. Hide the gift
    this.style.display = 'none';
    
    // 2. Add the extra blur to the background collage
    const bgCollage = document.querySelector('.background-collage');
    bgCollage.classList.add('extra-blur');
    
    // 3. Show the final message and setup the wheel
    document.getElementById('final-message').classList.remove('hidden');
    setupWheel();
});

// 4. Popup Logic
document.getElementById('msg-reveal-btn').addEventListener('click', () => {
    document.getElementById('popup-overlay').classList.remove('hidden');
});

document.querySelector('.close-popup').addEventListener('click', () => {
    document.getElementById('popup-overlay').classList.add('hidden');
});

// 5. Floating Hearts
setInterval(() => {
    const container = document.getElementById('heart-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.bottom = '-50px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.animation = `floatUp ${Math.random() * 3 + 4}s linear forwards`;
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    heart.style.color = '#ffcad4';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 400);

// Keyframe for hearts (added via JS to ensure it's always there)
const style = document.createElement('style');
style.innerHTML = `@keyframes floatUp { 
    0% { transform: translateY(0) rotate(0deg); opacity: 0; } 
    10% { opacity: 0.8; }
    100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; } 
}`;
document.head.appendChild(style);




