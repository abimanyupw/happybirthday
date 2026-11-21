// ==================== KONFIGURASI DEFAULT ====================
const DEFAULT_CONFIG = {
  PASSCODE: "2024",
  PASSCODE_PHOTO: "img/5.jpeg",
  LETTER_PHOTO: "img/5.jpeg",
  MEMORIES: [
    {
      img: "img/1.jpeg",
      color: "#ffe5ec",
      emoji: "🌸",
      caption: "",
    },
    {
      img: "img/2.jpeg",
      color: "#e0f4ff",
      emoji: "☕",
      caption: "",
    },
    {
      img: "img/3.jpeg",
      color: "#fff3cd",
      emoji: "🌅",
      caption: "",
    },
    {
      img: "img/4.jpeg",
      color: "#e8f5e9",
      emoji: "🎡",
      caption: "",
    },
    {
      img: "img/1.jpeg",
      color: "#f3e5f5",
      emoji: "🍝",
      caption: "",
    },
    {
      img: "img/6.jpeg",
      color: "#fce4ec",
      emoji: "💖",
      caption: "",
    },
  ],
  LETTER_TEXT: `Happy birthday to my favourite person! ♥

Semoga di tahun ini membawa semua hal indah yang kamu impikan dan bahkan lebih banyak lagi. Terima kasih sudah membuat hari-hariku lebih bahagia, hari-hari sulitku terasa lebih ringan, dan hidupku jadi lebih indah hanya dengan kehadiranmu. ♥

Aku sangat beruntung memilikimu, dan aku nggak sabar untuk membuat jutaan kenangan manis lainnya bersama. Selamat merayakan hari spesialmu, untuk semua impianmu, dan segala kebahagiaan yang pantas kamu dapatkan.

Happy birthday, my love. I love you more than you know. ♥`,
};

function loadConfig() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("birthday_surprise_cfg") || "null",
    );
    if (!saved) return structuredClone(DEFAULT_CONFIG);
    return {
      ...structuredClone(DEFAULT_CONFIG),
      ...saved,
    };
  } catch {
    return structuredClone(DEFAULT_CONFIG);
  }
}

let CONFIG = loadConfig();

// ==================== INLINE SVG ILLUSTRATIONS ====================
function svgPortraitCake() {
  return `
    <svg viewBox="0 0 200 210" width="100%" height="100%">
      <rect width="200" height="210" fill="#eef4ff"/>
      <circle cx="32" cy="34" r="6" fill="#ffd166" opacity="0.8"/>
      <circle cx="168" cy="40" r="5" fill="#ff9ff3" opacity="0.8"/>
      <circle cx="164" cy="120" r="6" fill="#4ecdc4" opacity="0.8"/>
      <circle cx="100" cy="78" r="36" fill="#ffd7ba"/>
      <path d="M62 72 C62 35, 138 35, 138 72 C132 52, 68 52, 62 72 Z" fill="#3d2c2e"/>
      <circle cx="87" cy="78" r="4" fill="#2b1d1e"/>
      <circle cx="113" cy="78" r="4" fill="#2b1d1e"/>
      <path d="M92 92 Q100 99 108 92" fill="none" stroke="#c96b6b" stroke-width="3" stroke-linecap="round"/>
      <path d="M55 155 C55 122, 145 122, 145 155 L155 210 L45 210 Z" fill="#6c5ce7"/>
      <rect x="68" y="138" width="64" height="36" rx="8" fill="#fff"/>
      <rect x="68" y="138" width="64" height="12" rx="6" fill="#ff9aa2"/>
      <rect x="86" y="120" width="6" height="18" fill="#ffd166"/>
      <rect x="108" y="120" width="6" height="18" fill="#4ecdc4"/>
      <circle cx="89" cy="116" r="5" fill="#ff6b6b"/>
      <circle cx="111" cy="116" r="5" fill="#ff6b6b"/>
    </svg>`;
}

function svgChibi(mood = "happy") {
  const brow =
    mood === "plead"
      ? `<path d="M74 64 L88 68 M126 64 L112 68" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>`
      : `<ellipse cx="80" cy="63" rx="10" ry="4" fill="#222"/><ellipse cx="120" cy="63" rx="10" ry="4" fill="#222"/>`;

  const mouth =
    mood === "wrong"
      ? `<path d="M92 96 Q100 88 108 96" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>`
      : mood === "plead"
        ? `<circle cx="100" cy="95" r="5" fill="#ff7675"/>`
        : `<path d="M90 92 Q100 102 110 92" fill="#ff7675" stroke="#222" stroke-width="2.5"/>`;

  const extra =
    mood === "wrong"
      ? `<rect x="128" y="88" width="48" height="48" rx="8" fill="#fff" stroke="#2980b9" stroke-width="4"/>
       <path d="M140 100 L164 124 M164 100 L140 124" stroke="#2980b9" stroke-width="6" stroke-linecap="round"/>`
      : mood === "curious"
        ? `<text x="142" y="65" font-size="28" fill="#d94338" font-weight="bold">?</text>`
        : mood === "bandana"
          ? `<path d="M60 66 Q100 54 140 66 L142 54 Q100 44 58 54 Z" fill="#fff" stroke="#d94338" stroke-width="2.5"/>
       <circle cx="100" cy="56" r="4" fill="#d94338"/>`
          : `<text x="140" y="62" font-size="22">✨</text>`;

  return `
    <svg viewBox="0 0 200 180" width="100%" height="100%">
      <circle cx="100" cy="82" r="44" fill="#ffd8be" stroke="#2d1e1e" stroke-width="3"/>
      <path d="M56 76 C56 38, 144 38, 144 76 C135 50, 65 50, 56 76 Z" fill="#222"/>
      ${brow}
      <circle cx="80" cy="78" r="5" fill="#222"/>
      <circle cx="120" cy="78" r="5" fill="#222"/>
      <circle cx="68" cy="88" r="6" fill="#ff9aa2" opacity="0.7"/>
      <circle cx="132" cy="88" r="6" fill="#ff9aa2" opacity="0.7"/>
      ${mouth}
      <path d="M68 126 L132 126 L140 172 L60 172 Z" fill="#ff4757" stroke="#2d1e1e" stroke-width="3"/>
      <rect x="74" y="156" width="52" height="16" fill="#ffd32a"/>
      ${extra}
    </svg>`;
}

function svgHeartGift() {
  return `
    <svg viewBox="0 0 160 150" width="100%" height="100%">
      <defs>
        <linearGradient id="hgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f2574b"/>
          <stop offset="100%" stop-color="#c92a22"/>
        </linearGradient>
      </defs>
      <!-- Heart Body -->
      <path d="M80 138 C80 138 14 96 14 50 C14 26 33 12 53 12 C67 12 76 20 80 28 C84 20 93 12 107 12 C127 12 146 26 146 50 C146 96 80 138 80 138 Z"
            fill="url(#hgGrad)" stroke="#a82019" stroke-width="3"/>
      <!-- Highlight -->
      <ellipse cx="42" cy="40" rx="10" ry="6" transform="rotate(-30 42 40)" fill="rgba(255,255,255,0.35)"/>
      <!-- White Ribbon Vertical & Horizontal -->
      <path d="M74 23 L86 23 L86 134 L80 138 L74 134 Z" fill="#fff7f5"/>
      <path d="M16 56 L144 56 L142 68 L18 68 Z" fill="#fff7f5"/>
      <!-- Ribbon Bow -->
      <path d="M80 58 C60 38, 44 46, 54 62 C62 72, 76 64, 80 58 Z" fill="#fff" stroke="#f0d5d1" stroke-width="2"/>
      <path d="M80 58 C100 38, 116 46, 106 62 C98 72, 84 64, 80 58 Z" fill="#fff" stroke="#f0d5d1" stroke-width="2"/>
      <circle cx="80" cy="60" r="8" fill="#fff" stroke="#f0d5d1" stroke-width="2"/>
    </svg>`;
}

// ==================== CONFETTI ENGINE ====================
const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");
let particles = [];
let confettiAnimId = null;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function launchConfetti(count = 90) {
  const colors = [
    "#ff6b6b",
    "#ffd166",
    "#4ecdc4",
    "#a29bfe",
    "#ff9ff3",
    "#ffffff",
  ];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * confettiCanvas.width,
      y: -10 - Math.random() * 120,
      w: 7 + Math.random() * 6,
      h: 7 + Math.random() * 8,
      vx: (Math.random() - 0.5) * 5,
      vy: 2.5 + Math.random() * 4.5,
      rot: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
    });
  }
  if (!confettiAnimId) animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  particles = particles.filter(
    (p) => p.y < confettiCanvas.height + 20 && p.life > 0,
  );
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vRot;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rot * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
  }
  if (particles.length > 0) {
    confettiAnimId = requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimId = null;
  }
}

// ==================== MUSIC & ROMANTIC SOUND ENGINE ====================
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;
let musicBoxTimer = null;
let sharedAudioCtx = null;

function getAudioCtx() {
  if (!sharedAudioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    sharedAudioCtx = new AudioCtx();
  }
  if (sharedAudioCtx.state === "suspended") {
    sharedAudioCtx.resume().catch(() => {});
  }
  return sharedAudioCtx;
}

function playTone(freq = 520, dur = 0.08, vol = 0.08) {
  try {
    const ac = getAudioCtx();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start();
    osc.stop(ac.currentTime + dur);
  } catch (_) {}
}

function playRomanticNote(freq, dur = 1.2, vol = 0.055, type = "triangle", delay = 0) {
  try {
    const ac = getAudioCtx();
    const t = ac.currentTime + delay;
    const osc = ac.createOscillator();
    const sub = ac.createOscillator();
    const filter = ac.createBiquadFilter();
    const gain = ac.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    sub.type = "sine";
    sub.frequency.setValueAtTime(freq * 2, t);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1800, t);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(vol, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0008, t + dur);

    const subGain = ac.createGain();
    subGain.gain.setValueAtTime(0.22, t);

    osc.connect(filter);
    sub.connect(subGain);
    subGain.connect(filter);
    filter.connect(gain);
    gain.connect(ac.destination);

    osc.start(t);
    sub.start(t);
    osc.stop(t + dur + 0.05);
    sub.stop(t + dur + 0.05);
  } catch (_) {}
}

// Lush Romantic Piano Ballad ("Can't Help Falling in Love" inspired progression in F major)
const ROMANTIC_BARS = [
  // Fmaj7: F3 - A3 - C4 - E4, melody F4 -> C5 -> F4
  { chord: [174.61, 220.0, 261.63, 329.63], melody: [[349.23, 0, 1.4], [523.25, 0.7, 1.4], [349.23, 1.4, 1.0]] },
  // Am7: A3 - C4 - E4 - G4, melody G4 -> A4 -> Bb4
  { chord: [220.0, 261.63, 329.63, 392.0], melody: [[392.0, 0, 0.9], [440.0, 0.7, 0.9], [466.16, 1.4, 1.0]] },
  // Bbmaj7: Bb2 - F3 - A3 - D4, melody A4 -> G4 -> F4
  { chord: [116.54, 174.61, 220.0, 293.66], melody: [[440.0, 0, 1.0], [392.0, 0.8, 0.9], [349.23, 1.5, 1.0]] },
  // C7sus4 -> C7: C3 - G3 - Bb3 - E4, melody G4 -> E4 -> C4
  { chord: [130.81, 196.0, 233.08, 329.63], melody: [[392.0, 0, 1.0], [329.63, 0.8, 0.9], [261.63, 1.5, 1.0]] },
  // Dm7: D3 - A3 - C4 - F4, melody D5 -> C5 -> Bb4
  { chord: [146.83, 220.0, 261.63, 349.23], melody: [[587.33, 0, 1.0], [523.25, 0.75, 0.9], [466.16, 1.5, 0.9]] },
  // Bbmaj7: Bb2 - F3 - A3 - D4, melody A4 -> G4 -> F4
  { chord: [116.54, 174.61, 220.0, 293.66], melody: [[440.0, 0, 1.0], [392.0, 0.75, 0.9], [349.23, 1.5, 1.0]] },
  // Gm7: G2 - D3 - F3 - Bb3, melody G4 -> A4 -> G4
  { chord: [98.0, 146.83, 174.61, 233.08], melody: [[392.0, 0, 0.9], [440.0, 0.75, 0.9], [392.0, 1.5, 0.9]] },
  // C9: C3 - G3 - Bb3 - D4 -> Fmaj7 resolve
  { chord: [130.81, 196.0, 233.08, 293.66], melody: [[329.63, 0, 1.1], [349.23, 1.1, 1.4]] },
];
let barIdx = 0;

function startRomanticBallad() {
  stopRomanticBallad();
  function playBar() {
    if (!isPlaying) return;
    const bar = ROMANTIC_BARS[barIdx % ROMANTIC_BARS.length];
    // Arpeggiated warm chord accompaniment
    bar.chord.forEach((freq, idx) => {
      playRomanticNote(freq, 2.2, 0.032, "sine", idx * 0.22);
    });
    // Expressive melody line
    bar.melody.forEach(([freq, offset, dur]) => {
      playRomanticNote(freq, dur, 0.052, "triangle", offset);
    });
    barIdx++;
    musicBoxTimer = setTimeout(playBar, 2250);
  }
  playBar();
}

function stopRomanticBallad() {
  clearTimeout(musicBoxTimer);
  musicBoxTimer = null;
}

function startMusic() {
  if (isPlaying) return;
  isPlaying = true;
  musicBtn.classList.add("playing");
  bgMusic.play().catch(() => {
    startRomanticBallad();
  });
}

function stopMusic() {
  isPlaying = false;
  musicBtn.classList.remove("playing");
  bgMusic.pause();
  stopRomanticBallad();
}

musicBtn.addEventListener("click", () => {
  if (isPlaying) stopMusic();
  else startMusic();
});

// ==================== SCREEN NAVIGATION ====================
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const target = document.getElementById(`screen-${id}`);
  if (target) target.classList.add("active");
}

// ==================== SCREEN 1: CURTAIN & CLOCK ====================
function initClockScreen() {
  const fairyLights = document.getElementById("fairyLights");
  for (let i = 0; i < 28; i++) {
    const dot = document.createElement("div");
    dot.className = "fairy-dot";
    const size = 4 + Math.random() * 8;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${Math.random() * 2}s`;
    fairyLights.appendChild(dot);
  }

  const clockFace = document.getElementById("clockFace");
  const romans = [
    "XII",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
  ];
  romans.forEach((num, idx) => {
    const el = document.createElement("div");
    el.className = "roman-num";
    el.textContent = num;
    const angle = (idx * 30 - 90) * (Math.PI / 180);
    const radius = 84;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    clockFace.appendChild(el);
  });

  const digitalEl = document.getElementById("digitalTime");
  const hourHand = document.getElementById("hourHand");
  const minuteHand = document.getElementById("minuteHand");
  const secondHand = document.getElementById("secondHand");

  let secLeft = 4; // 11:59:56 -> 12:00:00

  function updateClock() {
    const s = (60 - secLeft) % 60;
    const isMidnight = secLeft === 0;
    digitalEl.textContent = isMidnight
      ? "12:00:00"
      : `11:59:${String(s).padStart(2, "0")}`;

    const secDeg = isMidnight ? 0 : s * 6;
    const minDeg = isMidnight ? 0 : 354 + (s / 60) * 6;
    const hourDeg = isMidnight ? 0 : 359.5;

    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }

  updateClock();
  const timer = setInterval(() => {
    secLeft--;
    updateClock();
    if (secLeft <= 0) {
      clearInterval(timer);
      setTimeout(() => {
        document.getElementById("clockContainer").classList.add("fade-out");
        showScreen("passcode");
        document
          .getElementById("screen-curtain")
          .classList.add("active", "open");
        launchConfetti(60);
        setTimeout(() => {
          document.getElementById("screen-curtain").classList.remove("active");
        }, 1450);
      }, 650);
    }
  }, 1000);
}

// ==================== SCREEN 2: PASSCODE ====================
let enteredPin = "";
const pinBoxes = document.querySelectorAll("#pinBoxes .pin-box");
const passPhotoContent = document.getElementById("passcodePhotoContent");
const passSub = document.getElementById("passSub");
const retryBtn = document.getElementById("retryBtn");
const photoFrame = document.getElementById("passcodePhotoFrame");

function renderPasscodePhoto(isWrong = false) {
  if (isWrong) {
    passPhotoContent.innerHTML = svgChibi("wrong");
    return;
  }
  if (CONFIG.PASSCODE_PHOTO) {
    passPhotoContent.innerHTML = `<img src="${CONFIG.PASSCODE_PHOTO}" alt="Birthday Photo" />`;
  } else {
    passPhotoContent.innerHTML = svgPortraitCake();
  }
}

function updatePinHint() {
  passSub.innerHTML = `Masukkan 4 digit kode rahasia kita ♥`;
}

renderPasscodePhoto(false);
updatePinHint();

function updatePinUI() {
  pinBoxes.forEach((box, idx) => {
    box.textContent = enteredPin[idx] || "";
    box.classList.toggle("filled", idx < enteredPin.length);
  });
}

function submitPin() {
  if (enteredPin.length < 4) return;
  if (enteredPin === CONFIG.PASSCODE) {
    playTone(784, 0.15);
    launchConfetti(70);
    startMusic();
    showScreen("teaser");
  } else {
    playTone(220, 0.2);
    photoFrame.classList.add("shake");
    renderPasscodePhoto(true);
    passSub.textContent = "Ups! Kode rahasia salah, coba lagi! 😿";
    retryBtn.classList.remove("hidden");
    setTimeout(() => photoFrame.classList.remove("shake"), 450);
  }
}

function resetPin() {
  enteredPin = "";
  updatePinUI();
  renderPasscodePhoto(false);
  updatePinHint();
  retryBtn.classList.add("hidden");
}

document.getElementById("keypadGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".key-btn");
  if (!btn) return;
  const key = btn.dataset.key;
  playTone(540, 0.05);

  if (key === "clear") {
    resetPin();
  } else if (key === "submit") {
    submitPin();
  } else if (enteredPin.length < 4) {
    enteredPin += key;
    updatePinUI();
    if (enteredPin.length === 4) {
      setTimeout(submitPin, 220);
    }
  }
});

retryBtn.addEventListener("click", resetPin);

window.addEventListener("keydown", (e) => {
  if (!document.getElementById("screen-passcode").classList.contains("active"))
    return;
  if (e.key >= "0" && e.key <= "9" && enteredPin.length < 4) {
    enteredPin += e.key;
    updatePinUI();
    if (enteredPin.length === 4) setTimeout(submitPin, 220);
  } else if (e.key === "Backspace") {
    enteredPin = enteredPin.slice(0, -1);
    updatePinUI();
  } else if (e.key === "Enter") {
    submitPin();
  }
});

// ==================== SCREEN 3: TEASER ====================
let noClicks = 0;
const teaserTitle = document.getElementById("teaserTitle");
const teaserSub = document.getElementById("teaserSubtitle");
const teaserIllust = document.getElementById("teaserIllustration");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");

teaserIllust.innerHTML = svgChibi("happy");

btnYes.addEventListener("click", () => {
  playTone(660, 0.12);
  launchConfetti(60);
  showScreen("gifts");
});

btnNo.addEventListener("click", () => {
  noClicks++;
  playTone(340, 0.1);
  if (noClicks === 1) {
    teaserIllust.innerHTML = svgChibi("plead");
    teaserSub.textContent = "Yakin nih? 🥺 Bilang MAU dong! ❤️";
  } else {
    teaserTitle.textContent = "Kamu beneran penasaran kan?";
    teaserIllust.innerHTML = svgChibi("curious");
    teaserSub.textContent = "Udah nggak usah malu-malu, pencet aja!";
    btnYes.textContent = "MAU BANGET!";
    btnNo.textContent = "MAU BANGET!";
    btnNo.onclick = () => {
      launchConfetti(60);
      showScreen("gifts");
    };
  }
});

// ==================== SCREEN 4: MYSTERY HEART GIFTS ====================
document.getElementById("heartGift1").innerHTML = svgHeartGift();
document.getElementById("heartGift2").innerHTML = svgHeartGift();
document.getElementById("heartGift3").innerHTML = svgHeartGift();
document.getElementById("mysteryChar").innerHTML = svgChibi("bandana");

document.querySelectorAll(".heart-gift").forEach((btn) => {
  btn.addEventListener("click", () => {
    const gift = btn.dataset.gift;
    playTone(720, 0.12);
    document.getElementById(`badge-${gift}`).classList.remove("hidden");

    if (gift === "kenangan") {
      showScreen("kenangan");
    } else if (gift === "cake") {
      showScreen("cake");
    } else if (gift === "letter") {
      showScreen("letter");
      startTypewriter();
    }
  });
});

document.querySelectorAll('[data-back="gifts"]').forEach((btn) => {
  btn.addEventListener("click", () => showScreen("gifts"));
});

// ==================== SCREEN 5A: KENANGAN GALLERY ====================
function initKenangan() {
  const garland = document.getElementById("garlandBanner");
  garland.innerHTML = "";
  const word = "KENANGAN";
  const colors = [
    "#ff6b6b",
    "#ffd166",
    "#4ecdc4",
    "#a29bfe",
    "#ff9ff3",
    "#ff8b94",
    "#74b9ff",
    "#55efc4",
  ];
  word.split("").forEach((ch, i) => {
    const tile = document.createElement("div");
    tile.className = "garland-tile";
    tile.style.background = colors[i % colors.length];
    tile.textContent = ch;
    garland.appendChild(tile);
  });
}

let galleryIndex = 0;
const polaroidTrack = document.getElementById("polaroidTrack");
const photoModal = document.getElementById("photoModal");
const modalImageContainer = document.getElementById("modalImageContainer");
const modalCaption = document.getElementById("modalCaption");

function createMemoryVisual(mem) {
  if (mem.img) return `<img src="${mem.img}" alt="${mem.caption}" />`;
  return `
    <div style="width:100%;height:100%;background:${mem.color};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;">
      <span style="font-size:54px;">${mem.emoji}</span>
      <span style="font-size:12px;color:#6b5252;font-weight:700;">Foto Kenangan</span>
    </div>`;
}

function renderGallery() {
  polaroidTrack.innerHTML = "";
  const total = CONFIG.MEMORIES.length;
  for (let i = 0; i < Math.min(3, total); i++) {
    const mem = CONFIG.MEMORIES[(galleryIndex + i) % total];
    const card = document.createElement("div");
    card.className = "polaroid-card";
    card.innerHTML = `
      <div class="polaroid-img">${createMemoryVisual(mem)}</div>
      <div class="polaroid-caption">${mem.caption}</div>
    `;
    card.addEventListener("click", () => {
      modalImageContainer.innerHTML = createMemoryVisual(mem);
      modalCaption.textContent = mem.caption;
      photoModal.classList.remove("hidden");
    });
    polaroidTrack.appendChild(card);
  }
}

document.getElementById("galleryPrev").addEventListener("click", () => {
  galleryIndex =
    (galleryIndex - 1 + CONFIG.MEMORIES.length) % CONFIG.MEMORIES.length;
  renderGallery();
});
document.getElementById("galleryNext").addEventListener("click", () => {
  galleryIndex = (galleryIndex + 1) % CONFIG.MEMORIES.length;
  renderGallery();
});
document.getElementById("closeModalBtn").addEventListener("click", () => {
  photoModal.classList.add("hidden");
});
photoModal.addEventListener("click", (e) => {
  if (e.target === photoModal) photoModal.classList.add("hidden");
});

initKenangan();
renderGallery();

// ==================== SCREEN 5B: MAKE A WISH CAKE ====================
const candlesRow = document.getElementById("candlesRow");
const cakeTitle = document.getElementById("cakeTitle");
const cakeMessage = document.getElementById("cakeMessage");
const blowBtn = document.getElementById("blowBtn");
const relightBtn = document.getElementById("relightBtn");
const cakeIllustration = document.getElementById("cakeIllustration");

function blowCandles() {
  if (candlesRow.classList.contains("blown")) return;
  candlesRow.classList.add("blown");
  cakeTitle.textContent = "HAPPY BIRTHDAY !";
  cakeMessage.textContent =
    "Semoga tahun ini membawa semua kebahagiaan, kesehatan, dan cinta untukmu! ♥";
  blowBtn.classList.add("hidden");
  relightBtn.classList.remove("hidden");
  playTone(880, 0.18);
  launchConfetti(100);
}

function relightCandles() {
  candlesRow.classList.remove("blown");
  cakeTitle.textContent = "MAKE A WISH";
  cakeMessage.textContent =
    'Make the wish everyone, dan tekan "KLIK AKU" untuk meniup lilinnya! ♥';
  relightBtn.classList.add("hidden");
  blowBtn.classList.remove("hidden");
}

blowBtn.addEventListener("click", blowCandles);
cakeIllustration.addEventListener("click", blowCandles);
relightBtn.addEventListener("click", relightCandles);

// ==================== SCREEN 5C: TYPEWRITER LETTER ====================
function renderLetterPhoto() {
  const letterPhotoEl = document.getElementById("letterPhotoContent");
  const photo = CONFIG.LETTER_PHOTO || CONFIG.PASSCODE_PHOTO;
  if (photo) {
    letterPhotoEl.innerHTML = `<img src="${photo}" style="width:100%;height:100%;object-fit:cover;" alt="Favourite Person" />`;
  } else {
    letterPhotoEl.innerHTML = svgPortraitCake();
  }
}
renderLetterPhoto();

let typeTimer = null;
function startTypewriter() {
  const box = document.getElementById("typewriterText");
  clearInterval(typeTimer);
  box.innerHTML = '<span class="typewriter-cursor"></span>';
  let i = 0;
  const text = CONFIG.LETTER_TEXT;

  typeTimer = setInterval(() => {
    if (i < text.length) {
      box.innerHTML =
        text.slice(0, i + 1) + '<span class="typewriter-cursor"></span>';
      i++;
    } else {
      clearInterval(typeTimer);
    }
  }, 24);
}

// ==================== ROMANTIC FLOATING HEARTS ====================
function initRomanticFloaters() {
  const container = document.getElementById("romanticFloaters");
  if (!container) return;
  const symbols = ["♥", "💕", "✨", "🌸", "💖"];
  for (let i = 0; i < 16; i++) {
    const el = document.createElement("span");
    el.className = "floating-heart";
    el.textContent = symbols[i % symbols.length];
    el.style.left = `${Math.random() * 96}%`;
    el.style.fontSize = `${14 + Math.random() * 14}px`;
    el.style.animationDuration = `${8 + Math.random() * 8}s`;
    el.style.animationDelay = `${Math.random() * 7}s`;
    container.appendChild(el);
  }
}

// ==================== INIT ====================
initRomanticFloaters();
initClockScreen();
