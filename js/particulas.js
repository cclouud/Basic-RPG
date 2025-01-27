
const particleContainer = document.getElementById('particles');
for (let i = 0; i < 100; i++) {
const particle = document.createElement('div');
particle.className = 'particle';
particle.style.left = Math.random() * 100 + '%';
particle.style.top = Math.random() * 100 + '%';
particle.style.animationDelay = Math.random() * 5 + 's';
particleContainer.appendChild(particle);
}