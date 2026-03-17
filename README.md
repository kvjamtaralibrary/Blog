<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Open Book — PM Shri KV Jamtara Library</title>
  <meta name="description" content="Official library blog of PM Shri Kendriya Vidyalaya, Jamtara, Jharkhand. Celebrating reading, knowledge and creativity.">
  <link rel="icon" href="assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    /* Marquee ticker */
    .ticker-wrap {
      background: var(--amber-dark); overflow: hidden;
      padding: 8px 0; white-space: nowrap;
    }
    .ticker {
      display: inline-block;
      animation: ticker-scroll 40s linear infinite;
      font-size: 0.85rem; color: #fff; font-weight: 500;
    }
    .ticker:hover { animation-play-state: paused; }
    .ticker-item { display: inline-block; padding: 0 40px; }
    .ticker-item::after { content: "✦"; margin-left: 40px; opacity: 0.6; }
    @keyframes ticker-scroll {
      from { transform: translateX(100vw); }
      to   { transform: translateX(-100%); }
    }
    /* Weather widget */
    .weather-bar {
      background: var(--dark); color: #bba88a;
      padding: 6px 20px; font-size: 0.82rem;
      display: flex; align-items: center; justify-content: center;
      gap: 24px; flex-wrap: wrap;
    }
    .weather-bar span { display: flex; align-items: center; gap: 5px; }
    .weather-icon { font-size: 1.1rem; }
  </style>
  <!-- Firebase v9 compat (CDN — no bundler needed) -->
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>
</head>
<body>

<!-- NAV -->
<nav class="navbar" id="mainNav"></nav>

<!-- WEATHER BAR -->
<div class="weather-bar" id="weatherBar">
  <span><span class="weather-icon">📍</span> Jamtara, Jharkhand</span>
  <span id="wTemp"><span class="weather-icon">🌡️</span> --°C</span>
  <span id="wDesc"><span class="weather-icon">🌤️</span> Loading...</span>
  <span id="wHumidity"><span class="weather-icon">💧</span> Humidity: --%</span>
  <span id="wWind"><span class="weather-icon">💨</span> Wind: -- km/h</span>
</div>

<!-- MARQUEE TICKER -->
<div class="ticker-wrap">
  <span class="ticker">
    <span class="ticker-item">📚 Book of the Week: <strong>हम पंछी उन्मुक्त गगन के</strong> — Available on Shelf A3!</span>
    <span class="ticker-item">⭐ Write a book review in English or Hindi — your voice matters!</span>
    <span class="ticker-item">🔥 Wings of Fire is our most-requested book — check the catalog today!</span>
    <span class="ticker-item">📖 हिन्दी पुस्तक कोना — गोदान, मृगनयनी, चित्रलेखा उपलब्ध हैं</span>
    <span class="ticker-item">💬 Sign in with Google to leave a comment — bottom of this page!</span>
    <span class="ticker-item">🏆 Check the Reading Leaderboard — are you in the Top 10?</span>
    <span class="ticker-item">🏫 PM Shri Kendriya Vidyalaya, Jamtara, Jharkhand — Building Future Leaders!</span>
  </span>
</div>

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <div class="school-tag">🏫 PM Shri Kendriya Vidyalaya, Jamtara, Jharkhand</div>
    <h1>Where every great story starts with an <em>open book.</em></h1>
    <p>Welcome to the official blog of our school library — celebrating reading, knowledge, creativity and the incredible community of KV Jamtara.</p>
    <div class="hero-actions">
      <a href="catalog.html" class="btn btn-primary">📖 Explore Catalog</a>
      <a href="leaderboard.html" class="btn btn-outline">🏆 Leaderboard</a>
      <a href="#comments" class="btn btn-outline">💬 Leave a Comment</a>
    </div>
  </div>
</section>

<!-- HIGHLIGHTS -->
<section class="section" style="background: var(--parchment);">
  <div class="container">
    <div class="section-title"><h2>Library Highlights</h2></div>
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:20px;">

      <div class="card">
        <div style="font-size:2rem; margin-bottom:12px;">📚</div>
        <h3>Book of the Week</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-top:8px;">
          <strong>हम पंछी उन्मुक्त गगन के</strong><br>
          Available on Shelf A3. Come borrow it today!
        </p>
      </div>

      <div class="card">
        <div style="font-size:2rem; margin-bottom:12px;">🔥</div>
        <h3>Most Requested</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-top:8px;">
          <strong>Wings of Fire</strong> by A.P.J. Abdul Kalam is our most-requested book. Ask the librarian for availability.
        </p>
      </div>

      <div class="card">
        <div style="font-size:2rem; margin-bottom:12px;">🏆</div>
        <h3>Reading Champions</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-top:8px;">
          Check our <a href="leaderboard.html">Reading Leaderboard</a> to see the top readers of KV Jamtara!
        </p>
      </div>

      <div class="card">
        <div style="font-size:2rem; margin-bottom:12px;">📖</div>
        <h3>हिन्दी पुस्तक कोना</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-top:8px;">
          गोदान, मृगनयनी, चित्रलेखा — सभी पुस्तकें उपलब्ध हैं। आज ही पढ़ें!
        </p>
      </div>

    </div>
  </div>
</section>

<!-- ABOUT LIBRARIAN -->
<section class="section">
  <div class="container">
    <div style="max-width:680px; margin:0 auto; text-align:center;">
      <div style="font-size:3rem; margin-bottom:16px;">👩‍🏫</div>
      <h2>Meet Our Librarian</h2>
      <h3 style="color:var(--amber-dark); margin:12px 0 8px; font-family:'DM Sans',sans-serif; font-weight:600;">Snehlata Shaw</h3>
      <p style="color:var(--text-muted);">
        Passionate about nurturing a love for reading in every student at KV Jamtara.
        The library is her classroom — every book a lesson waiting to be discovered.
      </p>
    </div>
  </div>
</section>

<!-- QUICK STATS -->
<section class="section" style="background: var(--dark); padding: 50px 20px;">
  <div class="container">
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(150px,1fr)); gap:20px; text-align:center;">
      <div>
        <div style="font-size:2.2rem; font-weight:700; color:var(--amber-light); font-family:'Playfair Display',serif;" id="statBooks">—</div>
        <div style="color:#9a8870; font-size:0.85rem; margin-top:4px;">Books in Catalog</div>
      </div>
      <div>
        <div style="font-size:2.2rem; font-weight:700; color:var(--amber-light); font-family:'Playfair Display',serif;" id="statReaders">—</div>
        <div style="color:#9a8870; font-size:0.85rem; margin-top:4px;">Registered Readers</div>
      </div>
      <div>
        <div style="font-size:2.2rem; font-weight:700; color:var(--amber-light); font-family:'Playfair Display',serif;" id="statComments">—</div>
        <div style="color:#9a8870; font-size:0.85rem; margin-top:4px;">Comments & Reviews</div>
      </div>
    </div>
  </div>
</section>

<!-- COMMENTS SECTION -->
<section class="section" id="comments">
  <div class="container">
    <div class="section-title"><h2>Community Comments</h2></div>
    <div class="comments-section">

      <!-- Submit Form -->
      <div class="comment-form">
        <h3>💬 Share Your Thoughts</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:16px;">
          Write about a book you loved, a library experience, or anything you'd like to share with our community!
        </p>
        <div id="commentFormInner">
          <div class="login-prompt">
            🔒 Please <a href="login.html"><strong>sign in with Google</strong></a> to leave a comment.
          </div>
        </div>
      </div>

      <!-- Approved Comments Display -->
      <div id="commentsContainer"></div>

    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer" id="mainFooter"></footer>

<!-- Scripts -->
<script src="js/firebase-config.js"></script>
<script src="js/shared.js"></script>
<script src="js/auth.js"></script>
<script src="js/ai-filter.js"></script>
<script src="js/comments.js"></script>

<script>
  injectNav("home");
  injectFooter();
  loadApprovedComments("commentsContainer");

  // Fetch live weather for Jamtara, Jharkhand
  // Using Open-Meteo (free, no API key needed)
  async function loadWeather() {
    try {
      // Jamtara coords: lat 23.9667, lon 86.5667
      const url = "https://api.open-meteo.com/v1/forecast?latitude=23.9667&longitude=86.5667&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&wind_speed_unit=kmh&temperature_unit=celsius";
      const res = await fetch(url);
      const data = await res.json();
      const c = data.current;

      const weatherDesc = {
        0:"☀️ Clear sky", 1:"🌤️ Mainly clear", 2:"⛅ Partly cloudy", 3:"☁️ Overcast",
        45:"🌫️ Foggy", 48:"🌫️ Icy fog", 51:"🌦️ Light drizzle", 61:"🌧️ Light rain",
        63:"🌧️ Moderate rain", 65:"🌧️ Heavy rain", 71:"❄️ Light snow", 80:"🌧️ Rain showers",
        95:"⛈️ Thunderstorm"
      };
      const desc = weatherDesc[c.weather_code] || "🌡️ --";

      document.getElementById("wTemp").innerHTML = `🌡️ ${Math.round(c.temperature_2m)}°C`;
      document.getElementById("wDesc").innerHTML = desc;
      document.getElementById("wHumidity").innerHTML = `💧 Humidity: ${c.relative_humidity_2m}%`;
      document.getElementById("wWind").innerHTML = `💨 Wind: ${Math.round(c.wind_speed_10m)} km/h`;
    } catch(e) {
      document.getElementById("wDesc").innerHTML = "🌤️ Weather unavailable";
    }
  }
  loadWeather();

  db.ref("books").once("value", s => { document.getElementById("statBooks").textContent = s.numChildren() || "0"; });
  db.ref("leaderboard").once("value", s => { document.getElementById("statReaders").textContent = s.numChildren() || "0"; });
  db.ref("approved_comments").once("value", s => { document.getElementById("statComments").textContent = s.numChildren() || "0"; });

  // Show comment form once user is known
  document.addEventListener("authReady", e => {
    const user = e.detail.user;
    const inner = document.getElementById("commentFormInner");
    if (user) {
      inner.innerHTML = `
        <textarea id="commentText" placeholder="Share your thoughts about a book, the library, or anything you'd like to say..."></textarea>
        <button class="btn btn-primary" onclick="submitComment()">📨 Submit Comment</button>
      `;
    } else {
      inner.innerHTML = `
        <div class="login-prompt">
          🔒 Please <a href="login.html"><strong>sign in with Google</strong></a> to leave a comment.
        </div>
      `;
    }
  });
</script>
</body>
</html>
