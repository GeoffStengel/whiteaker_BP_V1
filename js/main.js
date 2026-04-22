/* ===== SITE DATA START ===== */
const siteData = {
  event: {
    date: "2026-08-08T12:00:00", // replace with real date when confirmed
    dateLabel: "AUGUST 8 • 2026 • 12PM–10PM • BLAIR BLVD, EUGENE",
    aboutLabel:
      "August 8 • 2026 • 12PM–10PM • Blair Blvd, Eugene • All ages • Free entry • Pure community magic",
  },

  schedule: [
    {
      id: 1,
      time: "12:00 PM",
      title: "Gates Open + Street Vendors",
      category: "vendor",
      location: "Blair Blvd",
      desc: "Food, handmade goods, neighborhood booths, and the first wave of bright chaos.",
    },
    {
      id: 2,
      time: "1:00 PM",
      title: "DJ Daye – Main Stage",
      category: "music",
      location: "Twenty After Four",
      desc: "A daytime kickoff set with local energy and loud neighborhood momentum.",
    },
    {
      id: 3,
      time: "2:30 PM",
      title: "Live Mural Painting",
      category: "art",
      location: "Sidewalk Wall Zone",
      desc: "Watch artists turn blank space into something people will be taking photos of all day.",
    },
    {
      id: 4,
      time: "3:15 PM",
      title: "Taco Takeover",
      category: "food",
      location: "Vendor Row",
      desc: "A highly strategic meal break that somehow becomes part of the entertainment.",
    },
    {
      id: 5,
      time: "4:00 PM",
      title: "Upstate Trio",
      category: "music",
      location: "Sam Bond's Stage",
      desc: "Local jam-heavy energy built for packed sidewalks and drifting crowds.",
    },
    {
      id: 6,
      time: "5:30 PM",
      title: "Fire Spinners & LED Flow",
      category: "art",
      location: "Flow Zone",
      desc: "One of those moments where everyone stops and just watches the block light up.",
    },
    {
      id: 7,
      time: "6:15 PM",
      title: "Community Parade Pass",
      category: "community",
      location: "Blair Blvd Corridor",
      desc: "A roaming neighborhood moment with costumes, color, noise, and full local spirit.",
    },
    {
      id: 8,
      time: "7:00 PM",
      title: "Neon Comedy Hour",
      category: "community",
      location: "Blairally",
      desc: "A weird, local, late-day crowd reset before the louder night programming starts.",
    },
    {
      id: 9,
      time: "8:30 PM",
      title: "Late Night Glow Set",
      category: "music",
      location: "Twenty After Four",
      desc: "Bass, lights, and the moment where people decide they are staying longer than planned.",
    },
  ],

  booths: [
    {
      title: "Maker Booth",
      price: "From $85",
      description:
        "Great for artists, handmade goods, vintage sellers, and curated small-business setups.",
      tags: ["10x10", "Vendor map", "All-day traffic"],
    },
    {
      title: "Food Booth",
      price: "From $155",
      description:
        "Built for prepared food vendors who want high visibility and steady festival traffic.",
      tags: ["10x10", "Food listing", "Prime traffic"],
    },
    {
      title: "Community Booth",
      price: "From $60",
      description:
        "A lower-cost option for nonprofits, neighborhood groups, and outreach-based participation.",
      tags: ["10x10", "Community rate", "Friendly access"],
    },
  ],

  food: [
    {
      type: "Savory",
      title: "Street Taco Pop-Up",
      description: "Fast, colorful, and ideal for anyone trying to catch three things at once.",
    },
    {
      type: "Drinks",
      title: "Lemonade + Sparkling Drinks",
      description: "Cold, bright, and basically mandatory by midafternoon.",
    },
    {
      type: "Dessert",
      title: "Frozen Treat Stand",
      description: "A strategic summer decision disguised as dessert.",
    },
    {
      type: "Pizza",
      title: "Wood-Fired Slice Spot",
      description: "Easy fuel for the people doing a full lap through the neighborhood.",
    },
    {
      type: "Late Night",
      title: "Noodle Cart",
      description: "For everyone making very bold and very correct decisions after dark.",
    },
    {
      type: "Coffee",
      title: "Cold Brew Corner",
      description: "For vendors, volunteers, and anyone treating this like an endurance sport.",
    },
  ],

  mapInfo: [
    {
      title: "Twenty After Four – 420 Blair Blvd",
      body: "Main headquarters energy. Music, drinks, and one of the core crowd magnets of the whole day.",
    },
    {
      title: "Blairally Arcade",
      body: "Retro games, weird corners, and a neon-heavy side pocket that feels extra Whiteaker in the best way.",
    },
    {
      title: "Sam Bond's Stage",
      body: "Live music, packed crowd moments, and a reliable place to catch people drifting in from every direction.",
    },
    {
      title: "Vendor Row",
      body: "Food, art, handmade goods, neighborhood businesses, and the kind of browsing that turns into buying.",
    },
    {
      title: "Fire Spinners & Flow Zone",
      body: "One of the most visually memorable spots once the evening energy starts climbing.",
    },
    {
      title: "Sacred Connections Church",
      body: "SCM One of the most visually memorable spots once the evening energy starts climbing.",
    },
  ],

  vibeTexts: [
    "THE BLOCK IS CURRENTLY AT MAX GLOW",
    "THE BLOCK IS VIBRATING",
    "MAXIMUM GLOW ACHIEVED",
    "EUGENE IS LIT",
    "PURE WHITEAKER ENERGY",
  ],
};
/* ===== SITE DATA END ===== */

/* ===== DOM REFERENCES START ===== */
const els = {
  canvas: document.getElementById("particle-canvas"),
  heroDate: document.getElementById("hero-date"),
  aboutDetails: document.getElementById("about-details"),
  menuToggle: document.getElementById("menu-toggle"),
  navList: document.getElementById("nav-list"),
  joinBtn: document.getElementById("join-btn"),
  logo: document.getElementById("logo"),
  filterBar: document.getElementById("filter-bar"),
  scheduleGrid: document.getElementById("schedule-grid"),
  availableEvents: document.getElementById("available-events"),
  myItinerary: document.getElementById("my-itinerary"),
  itinerarySummary: document.getElementById("itinerary-summary"),
  vibeScore: document.getElementById("vibe-score"),
  vibeBar: document.getElementById("vibe-bar"),
  vibeText: document.getElementById("vibe-text"),
  boostVibeBtn: document.getElementById("boost-vibe-btn"),
  boothGrid: document.getElementById("booth-grid"),
  foodGrid: document.getElementById("food-grid"),
  modal: document.getElementById("modal"),
  modalBody: document.getElementById("modal-body"),
  modalClose: document.getElementById("modal-close"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};
/* ===== DOM REFERENCES END ===== */

/* ===== GLOBAL STATE START ===== */
const ctx = els.canvas.getContext("2d");
const particleColors = ["#00ffcc", "#ff00aa", "#ffff00", "#00ff88", "#ff8800"];
const isMobile = window.innerWidth < 1400;
//const MAX_PARTICLES = isMobile ? 70 : 140;
//const CONNECT_DISTANCE = isMobile ? 85 : 125;
const MAX_PARTICLES = isMobile ? 18 : 140;
const CONNECT_DISTANCE = isMobile ? 65 : 125;


let particles = [];
let activeFilter = "all";
let globalVibe = 65;
let mouse = { x: 0, y: 0 };
let myItinerary = JSON.parse(localStorage.getItem("whiteakerItinerary") || "[]");

/* ===== SCROLL PERFORMANCE STATE START ===== */
let isScrolling = false;
let scrollTimeout;
/* ===== SCROLL PERFORMANCE STATE END ===== */
/* ===== SCROLL PERFORMANCE SETUP START ===== */
function setupScrollPerformance() {
  window.addEventListener(
    "scroll",
    () => {
      isScrolling = true;
      window.clearTimeout(scrollTimeout);

      scrollTimeout = window.setTimeout(() => {
        isScrolling = false;
      }, 120);
    },
    { passive: true }
  );
}
/* ===== SCROLL PERFORMANCE SETUP END ===== */
/* ===== GLOBAL STATE END ===== */

/* ===== PARTICLE CLASS START ===== */
class Particle {
  constructor() {
    this.x = Math.random() * els.canvas.width;
    this.y = Math.random() * els.canvas.height;
    this.size = Math.random() * 4 + 1.5;
    this.speedX = Math.random() * 1.4 - 0.7;
    this.speedY = Math.random() * 1.4 - 0.7;
    this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
    this.life = 240 + Math.random() * 200;
  }

  update(pointer) {
    const dx = pointer.x - this.x;
    const dy = pointer.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 220 && distance > 0) {
      this.speedX += (dx / distance) * 0.02;
      this.speedY += (dy / distance) * 0.02;
    }

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > els.canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > els.canvas.height) this.speedY *= -1;

    this.life -= 1;
    this.size = Math.max(0.7, this.size - 0.003);
  }

  /* ===== PARTICLE DRAW START ===== */
  draw() {
    ctx.save();
    ctx.globalAlpha = Math.min(1, this.life / 260);
    ctx.shadowBlur = isMobile ? 6 : 14;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.restore();
  }
  /* ===== PARTICLE DRAW END ===== */
}
/* ===== PARTICLE CLASS END ===== */

/* ===== BASIC UTILITY FUNCTIONS START ===== */
/*
function resizeCanvas() {
  els.canvas.width = window.innerWidth;
  els.canvas.height = window.innerHeight;
}
*/
/* ===== CANVAS RESIZE START ===== */
function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

  els.canvas.width = window.innerWidth * dpr;
  els.canvas.height = window.innerHeight * dpr;

  els.canvas.style.width = `${window.innerWidth}px`;
  els.canvas.style.height = `${window.innerHeight}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
/* ===== CANVAS RESIZE END ===== */


function formatCategory(category) {
  const map = {
    music: "Music",
    art: "Art",
    food: "Food",
    vendor: "Vendor",
    community: "Community",
  };

  return map[category] || category;
}

function timeToMinutes(timeString) {
  const [time, modifier] = timeString.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

function saveItinerary() {
  localStorage.setItem("whiteakerItinerary", JSON.stringify(myItinerary));
}

function currentFilteredEvents() {
  if (activeFilter === "all") return siteData.schedule;
  return siteData.schedule.filter((event) => event.category === activeFilter);
}
/* ===== BASIC UTILITY FUNCTIONS END ===== */

/* ===== STATIC CONTENT SETUP START ===== */
function setStaticContent() {
  els.heroDate.textContent = siteData.event.dateLabel;
  els.aboutDetails.textContent = siteData.event.aboutLabel;
}
/* ===== STATIC CONTENT SETUP END ===== */

/* ===== PARTICLE ANIMATION START ===== */
function animateParticles() {
  ctx.clearRect(0, 0, els.canvas.width, els.canvas.height);

  if (!isScrolling) {
    if (particles.length < MAX_PARTICLES) {
      particles.push(new Particle());
    }

    for (let i = particles.length - 1; i >= 0; i -= 1) {
      const p = particles[i];
      p.update(mouse);
      p.draw();

    /* ===== ORIGINAL MORE LINE PARTICLE CONNECTIONS START ===== */
    /*
    for (let j = i - 1; j >= 0; j -= 1) {
      const p2 = particles[j];
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < CONNECT_DISTANCE) {
        ctx.save();
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = (CONNECT_DISTANCE - distance) / 280;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      }
    }
    */
    /* ===== ORIGINAL MORE LINE PARTICLE CONNECTIONS END ===== */

    /* ===== LESS PARTICLE CONNECTIONS START ===== */
    /*
    if (!isMobile) {
      for (let j = i - 1; j >= 0; j -= 1) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECT_DISTANCE) {
          ctx.save();
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = (CONNECT_DISTANCE - distance) / 280;
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
    */
    /* ===== LESS PARTICLE CONNECTIONS END ===== */

    /* ===== CURRENT PARTICLE CONNECTIONS START ===== */
      for (let j = i - 1; j >= 0; j -= 1) {
        if (isMobile && j % 2 !== 0) continue;

        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECT_DISTANCE) {
          ctx.save();
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = (CONNECT_DISTANCE - distance) / 280;
          ctx.shadowBlur = isMobile ? 4 : 10;
          ctx.shadowColor = p.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    /* ===== CURRENT PARTICLE CONNECTIONS END ===== */

      if (p.life <= 0 || p.size <= 0.5) {
        particles.splice(i, 1);
      }
    }
  }

  window.requestAnimationFrame(animateParticles);
}

function explodeConfetti() {
  const burstCount = isMobile ? 45 : 90;

  for (let i = 0; i < burstCount; i += 1) {
    const p = new Particle();
    p.speedX = (Math.random() - 0.5) * 8;
    p.speedY = (Math.random() - 0.5) * 8 - 2.5;
    p.size = 5;
    p.life = 90 + Math.random() * 40;
    particles.push(p);
  }
}
/* ===== PARTICLE ANIMATION END ===== */

/* ===== SCHEDULE RENDERING START ===== */
function renderSchedule(filteredEvents = siteData.schedule) {
  els.scheduleGrid.innerHTML = "";

  if (!filteredEvents.length) {
    els.scheduleGrid.innerHTML = `
      <div class="empty-state">
        <h3>No events in this category yet</h3>
        <p>The glow is still being built. Check back soon.</p>
      </div>
    `;
    return;
  }

  filteredEvents.forEach((event) => {
    const isAdded = myItinerary.some((item) => item.id === event.id);

    const card = document.createElement("article");
    card.className = "schedule-card";
    card.innerHTML = `
      <div class="schedule-top">
        <span class="schedule-time">${event.time}</span>
        <span class="schedule-category">${formatCategory(event.category)}</span>
      </div>

      <h4>${event.title}</h4>
      <p class="schedule-location">${event.location}</p>
      <p class="schedule-desc">${event.desc}</p>

      <button
        class="schedule-add-btn ${isAdded ? "added" : ""}"
        type="button"
        data-add-id="${event.id}"
        ${isAdded ? "disabled" : ""}
      >
        ${isAdded ? "Added" : "Add to My Plan"}
      </button>
    `;

    els.scheduleGrid.appendChild(card);
  });

  els.scheduleGrid.querySelectorAll("[data-add-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.getAttribute("data-add-id"));
      addToItinerary(id);
    });
  });
}
/* ===== SCHEDULE RENDERING END ===== */

/* ===== AVAILABLE EVENTS RENDERING START ===== */
function renderAvailableEvents() {
  els.availableEvents.innerHTML = "";

  const available = siteData.schedule.filter(
    (event) => !myItinerary.some((saved) => saved.id === event.id)
  );

  if (!available.length) {
    els.availableEvents.innerHTML = `
      <div class="empty-state">
        <h3>You grabbed everything</h3>
        <p>Your route is stacked. Respectfully, that’s a lot of glow.</p>
      </div>
    `;
    return;
  }

  available.forEach((event) => {
    const pill = document.createElement("div");
    pill.className = "event-pill";
    pill.innerHTML = `
      <div class="event-pill-info">
        <strong>${event.time} · ${event.title}</strong>
        <span>${event.location}</span>
      </div>
      <button class="pill-btn" type="button" data-pill-add="${event.id}">Add</button>
    `;

    els.availableEvents.appendChild(pill);
  });

  els.availableEvents.querySelectorAll("[data-pill-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.getAttribute("data-pill-add"));
      addToItinerary(id);
    });
  });
}
/* ===== AVAILABLE EVENTS RENDERING END ===== */

/* ===== ITINERARY RENDERING START ===== */
function renderItinerary() {
  els.myItinerary.innerHTML = "";

  if (!myItinerary.length) {
    els.myItinerary.innerHTML = `
      <div class="empty-state">
        <h3>Your plan is empty</h3>
        <p>Start adding a few stops and make the day yours.</p>
      </div>
    `;
    els.vibeScore.textContent = "0 GLOW";
    els.itinerarySummary.textContent = "Your plan is empty – start adding energy!";
    return;
  }

  const ordered = [...myItinerary].sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));

  ordered.forEach((event) => {
    const pill = document.createElement("div");
    pill.className = "event-pill";
    pill.innerHTML = `
      <div class="event-pill-info">
        <strong>${event.time} · ${event.title}</strong>
        <span>${event.location}</span>
      </div>
      <button class="pill-btn remove" type="button" data-pill-remove="${event.id}">Remove</button>
    `;

    els.myItinerary.appendChild(pill);
  });

  els.myItinerary.querySelectorAll("[data-pill-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.getAttribute("data-pill-remove"));
      removeFromItinerary(id);
    });
  });

  const score = Math.min(100, myItinerary.length * 22 + 12);
  els.vibeScore.textContent = `${score} GLOW`;
  els.itinerarySummary.textContent = `You’re hitting ${myItinerary.length} event${myItinerary.length === 1 ? "" : "s"} • Total glow energy: extremely solid`;
}
/* ===== ITINERARY RENDERING END ===== */

/* ===== BOOTHS + FOOD RENDERING START ===== */
function renderBooths() {
  els.boothGrid.innerHTML = siteData.booths
    .map(
      (booth) => `
        <article class="booth-card">
          <div class="booth-top">
            <div>
              <h3>${booth.title}</h3>
            </div>
            <div class="booth-price">${booth.price}</div>
          </div>
          <p>${booth.description}</p>
          <div class="meta-row">
            ${booth.tags.map((tag) => `<span class="meta-chip">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderFood() {
  els.foodGrid.innerHTML = siteData.food
    .map(
      (item) => `
        <article class="food-card">
          <span class="food-type">${item.type}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}
/* ===== BOOTHS + FOOD RENDERING END ===== */

/* ===== ITINERARY ACTIONS START ===== */
function addToItinerary(id) {
  const event = siteData.schedule.find((entry) => entry.id === id);
  if (!event) return;

  if (!myItinerary.some((entry) => entry.id === id)) {
    myItinerary.push(event);
    saveItinerary();
    renderItinerary();
    renderAvailableEvents();
    renderSchedule(currentFilteredEvents());
    boostVibe(14);
  }
}

function removeFromItinerary(id) {
  myItinerary = myItinerary.filter((entry) => entry.id !== id);
  saveItinerary();
  renderItinerary();
  renderAvailableEvents();
  renderSchedule(currentFilteredEvents());
}

function clearItinerary() {
  if (window.confirm("Clear your entire day plan?")) {
    myItinerary = [];
    saveItinerary();
    renderItinerary();
    renderAvailableEvents();
    renderSchedule(currentFilteredEvents());
    boostVibe(4);
  }
}

window.clearItinerary = clearItinerary;
/* ===== ITINERARY ACTIONS END ===== */

/* ===== FILTER SETUP START ===== */
function setupFilters() {
  els.filterBar.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";

      els.filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      renderSchedule(currentFilteredEvents());
      boostVibe(3);
    });
  });
}
/* ===== FILTER SETUP END ===== */

/* ===== MODAL / MAP START ===== */
function showMapInfo(index) {
  const item = siteData.mapInfo[index];
  if (!item) return;

  els.modalBody.innerHTML = `
    <p class="modal-body-kicker">BLOCK HOTSPOT</p>
    <h3 class="modal-body-title">${item.title}</h3>
    <p class="modal-body-copy">${item.body}</p>
  `;

  els.modal.classList.add("open");
  els.modal.setAttribute("aria-hidden", "false");
  boostVibe(7);
}

function closeModal() {
  els.modal.classList.remove("open");
  els.modal.setAttribute("aria-hidden", "true");
}

function setupMapHotspots() {
  document.querySelectorAll(".hotspot").forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
      const index = Number(hotspot.dataset.mapIndex);
      showMapInfo(index);
    });

    hotspot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const index = Number(hotspot.dataset.mapIndex);
        showMapInfo(index);
      }
    });
  });

  els.modalClose.addEventListener("click", closeModal);

  els.modal.addEventListener("click", (event) => {
    if (event.target === els.modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}
/* ===== MODAL / MAP END ===== */

/* ===== COUNTDOWN START ===== */
function startCountdown() {
  const eventDate = new Date(siteData.event.date);

  function tick() {
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();

    if (diff <= 0) {
      els.days.textContent = "00";
      els.hours.textContent = "00";
      els.minutes.textContent = "00";
      els.seconds.textContent = "00";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    els.days.textContent = String(days).padStart(2, "0");
    els.hours.textContent = String(hours).padStart(2, "0");
    els.minutes.textContent = String(minutes).padStart(2, "0");
    els.seconds.textContent = String(seconds).padStart(2, "0");
  }

  tick();
  window.setInterval(tick, 1000);
}
/* ===== COUNTDOWN END ===== */

/* ===== VIBE SYSTEM START ===== */
function updateVibeUI() {
  const safeVibe = Math.max(0, Math.min(100, globalVibe));
  els.vibeBar.style.width = `${safeVibe}%`;

  if (safeVibe > 85) {
    els.vibeText.textContent = siteData.vibeTexts[0];
  } else if (safeVibe > 70) {
    els.vibeText.textContent = siteData.vibeTexts[1];
  } else if (safeVibe > 55) {
    els.vibeText.textContent = siteData.vibeTexts[2];
  } else if (safeVibe > 35) {
    els.vibeText.textContent = siteData.vibeTexts[3];
  } else {
    els.vibeText.textContent = siteData.vibeTexts[4];
  }
}

function boostVibe(amount = 8) {
  globalVibe = Math.min(100, globalVibe + amount);
  updateVibeUI();

  window.clearTimeout(boostVibe.cooldownTimer);
  boostVibe.cooldownTimer = window.setTimeout(() => {
    globalVibe = Math.max(35, globalVibe - 6);
    updateVibeUI();
  }, 1600);
}

boostVibe.cooldownTimer = null;

function setupVibeButtons() {
  els.boostVibeBtn.addEventListener("click", () => {
    boostVibe(16);
    explodeConfetti();
  });

  els.joinBtn.addEventListener("click", () => {
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
    boostVibe(12);
    explodeConfetti();
  });

  els.logo.addEventListener("click", () => {
    boostVibe(10);
    explodeConfetti();
  });
}
/* ===== VIBE SYSTEM END ===== */

/* ===== MOBILE NAV START ===== */
function setupMobileNav() {
  if (!els.menuToggle || !els.navList) return;

  els.menuToggle.addEventListener("click", () => {
    const isOpen = els.navList.classList.toggle("open");
    els.menuToggle.classList.toggle("open", isOpen);
    els.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  els.navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      els.navList.classList.remove("open");
      els.menuToggle.classList.remove("open");
      els.menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (!els.navList.contains(target) && !els.menuToggle.contains(target)) {
      els.navList.classList.remove("open");
      els.menuToggle.classList.remove("open");
      els.menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}
/* ===== MOBILE NAV END ===== */

/* ===== SCROLL SPY START ===== */
function setupScrollSpy() {
  const links = Array.from(document.querySelectorAll(".neon-nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = `#${entry.target.id}`;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === id);
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-15% 0px -40% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}
/* ===== SCROLL SPY END ===== */

/* ===== POINTER EVENTS FOR PARTICLES START ===== */
function setupPointerTracking() {
  window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  window.addEventListener(
    "touchmove",
    (event) => {
      if (!event.touches[0]) return;
      mouse.x = event.touches[0].clientX;
      mouse.y = event.touches[0].clientY;
    },
    { passive: true }
  );

  window.addEventListener("resize", resizeCanvas);
}
/* ===== POINTER EVENTS FOR PARTICLES END ===== */

/* ===== APP INIT START ===== */
function init() {
  resizeCanvas();
  setStaticContent();
  renderSchedule();
  renderAvailableEvents();
  renderItinerary();
  renderBooths();
  renderFood();
  updateVibeUI();

  setupFilters();
  setupMapHotspots();
  setupVibeButtons();
  setupMobileNav();
  setupScrollSpy();
  setupPointerTracking();
  setupScrollPerformance();

  startCountdown();
  animateParticles();
}

init();
/* ===== APP INIT END ===== */