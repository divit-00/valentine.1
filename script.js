// Typing effect
const text = "Will you be my Valentine? Meher💘";
let index = 0;
const typingEl = document.getElementById("typing");

function typeText() {
    if (index < text.length) {
        typingEl.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}
typeText();

// Elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const buttons = document.querySelector(".buttons");
const music = document.getElementById("music");
const heartsBox = document.querySelector(".hearts");

// YES grows
let yesScale = 1;

// YES clicked 💍
yesBtn.addEventListener("click", () => {
    buttons.style.display = "none";
    result.classList.remove("hidden");
    typingEl.textContent = "Forever starts today 💖";

    music.play();
    startHearts();
    startFireworks();
});

// NO clicked 😈
noBtn.addEventListener("click", () => {
    yesScale += 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;
    moveNo();
});

// NO hover escape
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Hearts animation 💖
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (18 + Math.random() * 14) + "px";
        heartsBox.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 200);
}

// Fireworks 🎆
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        for (let i = 0; i < 40; i++) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
            ctx.fill();
        }
    }, 400);
}
