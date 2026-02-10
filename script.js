const textEl = document.getElementById("text");
const proposal = document.getElementById("proposal");
const finalScene = document.getElementById("final");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsBox = document.querySelector(".hearts");
const music = document.getElementById("music");

let yesScale = 1;

// Story lines (cinematic pacing)
const story = [
    "Some people enter your life without warning…",
    "And suddenly, silence feels softer.",
    "Every smile feels familiar.",
    "Every moment feels important."
];

let line = 0;
let char = 0;

function typeStory() {
    if (char < story[line].length) {
        textEl.textContent += story[line].charAt(char);
        char++;
        setTimeout(typeStory, 75);
    } else {
        setTimeout(() => {
            char = 0;
            line++;
            if (line < story.length) {
                textEl.textContent = "";
                typeStory();
            } else {
                setTimeout(showProposal, 1400);
            }
        }, 1200);
    }
}

typeStory();

// Show proposal
function showProposal() {
    textEl.classList.add("hidden");
    proposal.classList.remove("hidden");
}

// YES 💍
yesBtn.addEventListener("click", () => {
    proposal.classList.add("hidden");
    finalScene.classList.remove("hidden");

    music.currentTime = 37; // cinematic drop
    music.play();

    startHearts();
});

// NO 😈 → YES grows
noBtn.addEventListener("click", () => {
    yesScale += 0.35;
    yesBtn.style.transform = `scale(${yesScale})`;
    moveNo();
});

noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
    const x = Math.random() * 320 - 160;
    const y = Math.random() * 220 - 110;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Hearts forever 💖
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (18 + Math.random() * 16) + "px";
        heartsBox.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 220);
}
