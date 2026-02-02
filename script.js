const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const reactionBox = document.getElementById("reactionBox");
const reactionGif = document.getElementById("reactionGif");
const reactionText = document.getElementById("reactionText");

const secretEnvelope = document.getElementById("secretEnvelope");
const secretPage = document.getElementById("secretPage");
const pageContent = document.getElementById("pageContent");

/* SAD */
const sadGifs = ["sad1.gif","sad2.gif","sad3.gif","sad4.gif"];
const sadTexts = [
  "Pretty please say yes 🥺💜",
  "Potalu… don’t break my heart 🌙😔",
  "No is not an option, my girl 😌",
  "You KNOW you want to say yes 🐱✨"
];
let sadIndex = 0;

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  reactionBox.classList.remove("hidden");
  reactionGif.src = "cute-cat.gif";
  reactionText.innerHTML = "YAYYYY 🥹💜 She said YES! My Moon 🌙";

  startCelebration();
});

/* NO CLICK */
noBtn.addEventListener("click", () => {
  reactionBox.classList.remove("hidden");
  reactionGif.src = sadGifs[sadIndex % sadGifs.length];
  reactionText.innerHTML = sadTexts[sadIndex % sadTexts.length];
  sadIndex++;
});

/* SECRET LETTER */
secretEnvelope.addEventListener("click", () => {
  secretPage.classList.add("show");
  pageContent.innerHTML = "";

  const text =
    "Hi Maitu... 🌙 I know you might not miss me but I miss you more than words can say 💜 Distance is temporary but what I feel for you is forever 😘";
  const words = text.split(" ");
  let i = 0;

  function type() {
    if (i < words.length) {
      pageContent.innerHTML += words[i] + " ";
      i++;
      setTimeout(type, 320);
    }
  }
  type();
});

secretPage.addEventListener("click", () => {
  secretPage.classList.remove("show");
});

/* 🎉 CELEBRATION (CONFETTI + STARS) */
const canvas = document.getElementById("celebration");
const ctx = canvas.getContext("2d");

function startCelebration() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 6 + 4,
      speed: Math.random() * 3 + 2,
      color: ["#9D4EDD","#FFD700","#FFFFFF"][Math.floor(Math.random()*3)]
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      p.y += p.speed;
    });
    frame++;
    if (frame < 180) requestAnimationFrame(animate);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  animate();
}

