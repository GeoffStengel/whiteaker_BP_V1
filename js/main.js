// js/main.js
// === PARTICLE SYSTEM (the mind-blowing glowing background) ===
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const colors = ['#00ffcc', '#ff00aa', '#ffff00', '#00ff88', '#ff8800'];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 6 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 300 + Math.random() * 200;
    }
    
    update(mouse) {
        // Mouse attraction – makes it feel ALIVE
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 300 && distance > 0) {
            this.speedX += dx / distance * 0.08;
            this.speedY += dy / distance * 0.08;
        }
        
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Gentle bounce
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        
        this.life--;
        this.size = Math.max(1, this.size - 0.01);
    }
    
    draw() {
        ctx.save();
        ctx.shadowBlur = 25;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life / 400;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.restore();
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Create new particles
    if (particles.length < 180) {
        particles.push(new Particle());
    }
    
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update(mouse);
        p.draw();
        
        // Connect nearby particles with glowing lines
        for (let j = i - 1; j >= 0; j--) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 130) {
                ctx.save();
                ctx.strokeStyle = p.color;
                ctx.globalAlpha = (130 - distance) / 300;
                ctx.shadowBlur = 15;
                ctx.shadowColor = p.color;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
                ctx.restore();
            }
        }
        
        if (p.life <= 0 || p.size <= 0.5) particles.splice(i, 1);
    }
    
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', resizeCanvas);

// === EVENT DATA (2026 placeholder – edit these!) ===
let eventsData = [
    { id: 1, time: "12:00", title: "Gates Open + Street Vendors", category: "vendor", location: "Blair Blvd", desc: "Food trucks, handmade goods, and glow merch line the street." },
    { id: 2, time: "1:00", title: "DJ Daye – Main Stage", category: "music", location: "Twenty After Four", desc: "Kickoff set from local legend DJ Daye." },
    { id: 3, time: "2:30", title: "Live Mural Painting", category: "art", location: "Sidewalk", desc: "Watch artists turn the pavement into a glowing masterpiece." },
    { id: 4, time: "3:15", title: "Taco Takeover", category: "food", location: "Vendor Row", desc: "Best tacos in the Whit – all day long." },
    { id: 5, time: "4:00", title: "Upstate Trio", category: "music", location: "Sam Bond's Stage", desc: "Eugene jam royalty." },
    { id: 6, time: "5:30", title: "Fire Spinners &amp; LED Flow", category: "art", location: "Fire Zone", desc: "Watch the sky light up." },
    { id: 7, time: "7:00", title: "Neon Comedy Hour", category: "music", location: "Blairally", desc: "Local comedians roast the Whit." },
    { id: 8, time: "8:30", title: "Late Night Glow Set", category: "music", location: "Twenty After Four", desc: "Bass that will rattle your soul." }
];

let myItinerary = JSON.parse(localStorage.getItem('whiteakerItinerary')) || [];

// Render schedule
function renderSchedule(filteredEvents) {
    const grid = document.getElementById('schedule-grid');
    grid.innerHTML = '';
    
    filteredEvents.forEach(event => {
        const card = document.createElement('div');
        card.className = 'schedule-card';
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:1rem;">
                <span style="background:#120022; padding:4px 14px; border-radius:30px; font-size:0.9rem;">${event.time}</span>
                <span style="color:#ffff00;">${event.location}</span>
            </div>
            <h4>${event.title}</h4>
            <p>${event.desc}</p>
            <button onclick="addToItinerary(${event.id}); event.stopImmediatePropagation();" class="glow-button" style="margin-top:1rem; width:100%; font-size:0.95rem;">ADD TO MY PLAN</button>
        `;
        grid.appendChild(card);
    });
    
    if (filteredEvents.length === 0) {
        grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:3rem; color:#ffff00;">No events in this category yet – the glow is still being built!</p>`;
    }
}

function filterCategory(cat) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (cat === 'all') {
        renderSchedule(eventsData);
    } else {
        const filtered = eventsData.filter(e => e.category === cat);
        renderSchedule(filtered);
    }
}

// Itinerary builder
function renderItinerary() {
    const container = document.getElementById('my-itinerary');
    container.innerHTML = '';
    
    myItinerary.forEach((event, index) => {
        const pill = document.createElement('div');
        pill.className = 'event-pill';
        pill.innerHTML = `
            <span>${event.time} – ${event.title}</span>
            <button onclick="removeFromItinerary(${index});" style="background:none;border:none;color:#ff00aa;font-size:1.4rem;">×</button>
        `;
        container.appendChild(pill);
    });
    
    // Vibe score
    const score = myItinerary.length * 25 + Math.floor(Math.random() * 20);
    document.getElementById('vibe-score').innerHTML = `${score} <span style="color:#ffff00;">GLOW</span>`;
    
    // Summary
    const summary = document.getElementById('itinerary-summary');
    if (myItinerary.length > 0) {
        summary.innerHTML = `You’re hitting <strong>${myItinerary.length}</strong> events • Total glow energy: MAXED OUT`;
    } else {
        summary.innerHTML = 'Your plan is empty – start adding energy!';
    }
}

window.addToItinerary = function(id) {
    const event = eventsData.find(e => e.id === id);
    if (!myItinerary.find(e => e.id === id)) {
        myItinerary.push(event);
        localStorage.setItem('whiteakerItinerary', JSON.stringify(myItinerary));
        renderItinerary();
        boostVibe(30); // instant vibe boost
    }
};

window.removeFromItinerary = function(index) {
    myItinerary.splice(index, 1);
    localStorage.setItem('whiteakerItinerary', JSON.stringify(myItinerary));
    renderItinerary();
};

window.clearItinerary = function() {
    if (confirm('Clear your entire day plan?')) {
        myItinerary = [];
        localStorage.setItem('whiteakerItinerary', JSON.stringify(myItinerary));
        renderItinerary();
    }
};

// Available events for drag & drop (simple version)
function renderAvailableEvents() {
    const container = document.getElementById('available-events');
    container.innerHTML = '';
    eventsData.forEach(event => {
        if (!myItinerary.find(e => e.id === event.id)) {
            const pill = document.createElement('div');
            pill.className = 'event-pill';
            pill.draggable = true;
            pill.innerHTML = `<span>${event.time} ${event.title}</span>`;
            pill.ondragstart = (ev) => {
                ev.dataTransfer.setData('text', event.id);
            };
            container.appendChild(pill);
        }
    });
}

// Map info modal
const mapInfo = [
    { title: "Twenty After Four – 420 Blair Blvd", body: "Main headquarters. Music, drinks, and the heart of the party. This is where it all began." },
    { title: "Blairally Vintage Arcade", body: "Pinball, retro games, and late-night dance parties. The neon never sleeps here." },
    { title: "Sam Bond’s Garage Stage", body: "Live music all day. Expect jam bands, rock, and surprise guests." },
    { title: "Vendor Row", body: "Handmade jewelry, art prints, food trucks, and glowing merch. Support local makers!" },
    { title: "Fire Spinners &amp; Flow Zone", body: "Watch pros light up the night with fire and LED poi. Bring your flow toys!" }
];

window.showMapInfo = function(index) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h2 style="color:#ffff00; margin-bottom:1rem;">${mapInfo[index].title}</h2>
        <p>${mapInfo[index].body}</p>
        <button onclick="closeModal()" style="margin-top:2rem; width:100%; padding:18px; background:#ff00aa; color:#120022; border:none; font-size:1.3rem; border-radius:50px;">BACK TO THE BLOCK</button>
    `;
    modal.style.display = 'flex';
};

window.closeModal = function() {
    document.getElementById('modal').style.display = 'none';
};

// Confetti explosion
function explodeConfetti() {
    for (let i = 0; i < 180; i++) {
        const p = new Particle();
        p.speedX = (Math.random() - 0.5) * 14;
        p.speedY = (Math.random() - 0.5) * 14 - 8;
        p.size = 9;
        p.life = 120;
        particles.push(p);
    }
    // Extra boost to vibe
    boostVibe(50);
}

// Vibe meter
let globalVibe = 65;

function boostVibe(amount = 12) {
    globalVibe = Math.min(100, globalVibe + amount);
    document.getElementById('vibe-bar').style.width = globalVibe + '%';
    
    const texts = ["THE BLOCK IS VIBRATING", "MAXIMUM GLOW ACHIEVED", "EUGENE IS LIT", "PURE WHITEAKER ENERGY"];
    document.getElementById('vibe-text').textContent = texts[Math.floor(Math.random() * texts.length)];
    
    // Occasionally spawn extra particles
    if (Math.random() > 0.6) explodeConfetti();
}

// Logo click = massive confetti
document.getElementById('logo').addEventListener('click', () => {
    explodeConfetti();
    boostVibe(40);
});

// Join button
document.getElementById('join-btn').addEventListener('click', () => {
    document.getElementById('itinerary').scrollIntoView({ behavior: 'smooth' });
    explodeConfetti();
});

// INIT EVERYTHING
function init() {
    resizeCanvas();
    animateParticles();
    
    // Render initial schedule
    renderSchedule(eventsData);
    
    // Render itinerary
    renderItinerary();
    renderAvailableEvents();
    
    // Keyboard Easter egg: press "G" for instant glow
    document.addEventListener('keydown', e => {
        if (e.key.toLowerCase() === 'g') boostVibe(25);
    });
    
    console.log('%c✅ Whiteaker Block Party site loaded – neon particles active! The Whit is glowing.', 'color:#ffff00; font-size:13px; background:#120022; padding:2px 6px; border-radius:3px;');
}

window.onload = init;