/* ============================================
   THE OPEN BOOK — KV JAMTARA LIBRARY
   Design: Warm editorial / library aesthetic
   Fonts: Playfair Display + DM Sans
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --cream:       #FFFDF5;
  --warm-white:  #FFF9EE;
  --parchment:   #F5EDD8;
  --amber:       #C8872A;
  --amber-light: #E8A84A;
  --amber-dark:  #9B6318;
  --green:       #2C5F2E;
  --green-light: #4A8F4D;
  --brown:       #5C3D1E;
  --dark:        #1A120B;
  --text:        #2D2015;
  --text-muted:  #7A6550;
  --border:      #E0D0B0;
  --shadow:      rgba(90, 50, 10, 0.12);
  --radius:      10px;
  --radius-lg:   18px;
  --transition:  0.25s ease;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--text);
  line-height: 1.65;
  min-height: 100vh;
}

/* ── TYPOGRAPHY ── */
h1, h2, h3 { font-family: 'Playfair Display', serif; color: var(--dark); }
h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); }
h2 { font-size: clamp(1.4rem, 3vw, 2rem); }
h3 { font-size: 1.2rem; }
a { color: var(--amber-dark); text-decoration: none; transition: color var(--transition); }
a:hover { color: var(--amber); }
p { margin-bottom: 0.8rem; }

/* ── LAYOUT ── */
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.section { padding: 60px 0; }
.section-title { text-align: center; margin-bottom: 40px; }
.section-title h2 { position: relative; display: inline-block; }
.section-title h2::after {
  content: ""; display: block; width: 60px; height: 3px;
  background: var(--amber); margin: 10px auto 0; border-radius: 2px;
}

/* ── NAV ── */
.navbar {
  background: var(--dark);
  padding: 0 20px;
  position: sticky; top: 0; z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,0.25);
}
.nav-inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 62px;
}
.nav-brand {
  font-family: 'Playfair Display', serif;
  color: var(--parchment);
  font-size: 1.15rem;
  font-weight: 700;
  display: flex; align-items: center; gap: 8px;
}
.nav-brand span { color: var(--amber-light); }
.nav-links {
  display: flex; align-items: center; gap: 4px;
  list-style: none;
}
.nav-links a {
  color: #ccc;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background var(--transition), color var(--transition);
}
.nav-links a:hover, .nav-links a.active {
  background: var(--amber);
  color: var(--dark);
}
.nav-auth {
  display: flex; align-items: center; gap: 10px;
}
#userInfo {
  display: none; align-items: center; gap: 8px;
  color: var(--parchment); font-size: 0.85rem;
}
.avatar, .comment-avatar, .leader-avatar, .mod-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  object-fit: cover; border: 2px solid var(--amber);
}
.nav-toggle {
  display: none; background: none; border: none;
  color: var(--parchment); font-size: 1.4rem; cursor: pointer;
}

/* ── BUTTONS ── */
.btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 9px 20px; border-radius: 8px;
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600;
  cursor: pointer; border: none; transition: all var(--transition);
}
.btn-primary { background: var(--amber); color: var(--dark); }
.btn-primary:hover { background: var(--amber-dark); color: #fff; }
.btn-outline {
  background: transparent; color: var(--amber);
  border: 2px solid var(--amber);
}
.btn-outline:hover { background: var(--amber); color: var(--dark); }
.btn-green { background: var(--green); color: #fff; }
.btn-green:hover { background: var(--green-light); }
.btn-approve { background: var(--green); color: #fff; padding: 6px 14px; border-radius: 6px; border: none; cursor: pointer; font-weight: 600; transition: background var(--transition); }
.btn-approve:hover { background: var(--green-light); }
.btn-reject { background: #c0392b; color: #fff; padding: 6px 14px; border-radius: 6px; border: none; cursor: pointer; font-weight: 600; transition: background var(--transition); }
.btn-reject:hover { background: #e74c3c; }
.btn-reject.small { padding: 4px 10px; font-size: 0.82rem; }
#loginBtn { background: var(--amber); color: var(--dark); font-weight: 600; }
#logoutBtn { display: none; background: transparent; color: #aaa; border: 1px solid #444; }
#logoutBtn:hover { border-color: #c0392b; color: #c0392b; }
#adminLink { display: none; }

/* ── HERO ── */
.hero {
  background: linear-gradient(135deg, var(--dark) 0%, #2a1a0a 100%);
  padding: 80px 20px;
  text-align: center;
  position: relative; overflow: hidden;
}
.hero::before {
  content: ""; position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8872a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content { position: relative; z-index: 1; }
.hero h1 { color: var(--parchment); margin-bottom: 16px; }
.hero h1 em { color: var(--amber-light); font-style: italic; }
.hero p { color: #bba88a; max-width: 550px; margin: 0 auto 32px; font-size: 1.05rem; }
.hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.school-tag {
  display: inline-block;
  background: rgba(200,135,42,0.15);
  border: 1px solid rgba(200,135,42,0.3);
  color: var(--amber-light); border-radius: 20px;
  padding: 4px 14px; font-size: 0.82rem; margin-bottom: 20px;
}

/* ── PAGE HEADER ── */
.page-header {
  background: linear-gradient(135deg, var(--dark), #2a1a0a);
  padding: 50px 20px; text-align: center;
}
.page-header h1 { color: var(--parchment); }
.page-header p { color: #bba88a; max-width: 500px; margin: 10px auto 0; }

/* ── CARDS ── */
.card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: 0 2px 12px var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
}
.card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px var(--shadow); }

/* ── BOOK CATALOG ── */
.catalog-controls {
  display: flex; gap: 12px; flex-wrap: wrap;
  align-items: center; margin-bottom: 28px;
}
.search-box {
  flex: 1; min-width: 200px;
  display: flex; gap: 8px;
}
.search-box input {
  flex: 1; padding: 10px 14px; border: 2px solid var(--border);
  border-radius: 8px; font-size: 0.95rem; font-family: 'DM Sans', sans-serif;
  background: #fff; transition: border-color var(--transition);
}
.search-box input:focus { outline: none; border-color: var(--amber); }
.filter-btn {
  background: var(--parchment); border: 2px solid var(--border);
  color: var(--text-muted); padding: 6px 16px; border-radius: 20px;
  cursor: pointer; font-size: 0.85rem; font-weight: 500;
  transition: all var(--transition);
}
.filter-btn.active, .filter-btn:hover {
  background: var(--amber); border-color: var(--amber); color: var(--dark);
}
#categoryFilters { display: flex; flex-wrap: wrap; gap: 8px; }
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.book-card {
  background: #fff; border: 1px solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition);
  display: flex; flex-direction: column;
}
.book-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px var(--shadow); }
.book-cover {
  background: linear-gradient(135deg, var(--green), var(--amber-dark));
  height: 120px; display: flex; align-items: center; justify-content: center;
  position: relative;
}
.book-icon { font-size: 2.5rem; }
.book-category-badge {
  position: absolute; top: 8px; right: 8px;
  background: rgba(0,0,0,0.45); color: #fff;
  padding: 2px 8px; border-radius: 10px; font-size: 0.72rem;
}
.book-info { padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 6px; }
.book-title { font-family: 'Playfair Display', serif; font-size: 1rem; line-height: 1.3; }
.book-author { color: var(--text-muted); font-size: 0.85rem; }
.book-rating { color: var(--amber); font-size: 0.9rem; }
.book-availability { font-size: 0.82rem; font-weight: 600; }
.book-availability.available { color: var(--green); }
.book-availability.issued { color: #c0392b; }
.book-shelf { font-size: 0.8rem; color: var(--text-muted); }

/* ── COMMENTS ── */
.comments-section { max-width: 720px; margin: 0 auto; }
.comment-form {
  background: var(--warm-white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px; margin-bottom: 36px;
}
.comment-form h3 { margin-bottom: 16px; }
.comment-form textarea {
  width: 100%; min-height: 110px; padding: 12px;
  border: 2px solid var(--border); border-radius: 8px;
  font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
  resize: vertical; background: #fff; margin-bottom: 12px;
  transition: border-color var(--transition);
}
.comment-form textarea:focus { outline: none; border-color: var(--amber); }
.login-prompt {
  background: var(--parchment); border: 1px solid var(--border);
  border-radius: 8px; padding: 16px; text-align: center;
  color: var(--text-muted); margin-bottom: 12px;
}
.comment-card {
  background: #fff; border: 1px solid var(--border);
  border-radius: var(--radius); padding: 18px; margin-bottom: 14px;
}
.comment-header { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
.comment-avatar { width: 38px; height: 38px; }
.comment-name { display: block; font-weight: 600; }
.comment-date { font-size: 0.78rem; color: var(--text-muted); }
.comment-text { color: var(--text); line-height: 1.6; }
.no-comments { text-align: center; color: var(--text-muted); padding: 30px; }

/* ── LEADERBOARD ── */
.leader-row {
  display: flex; align-items: center; gap: 14px;
  background: #fff; border: 1px solid var(--border);
  border-radius: var(--radius); padding: 14px 20px;
  margin-bottom: 10px; transition: all var(--transition);
}
.leader-row:hover { box-shadow: 0 4px 14px var(--shadow); }
.leader-row.rank-1 { border-left: 4px solid gold; }
.leader-row.rank-2 { border-left: 4px solid silver; }
.leader-row.rank-3 { border-left: 4px solid #cd7f32; }
.rank-badge { font-size: 1.4rem; width: 36px; text-align: center; }
.leader-avatar { width: 44px; height: 44px; }
.leader-info { flex: 1; }
.leader-class { font-size: 0.82rem; color: var(--text-muted); margin-left: 8px; }
.leader-stats { text-align: center; }
.books-count { display: block; font-size: 1.6rem; font-weight: 700; color: var(--amber-dark); font-family: 'Playfair Display', serif; }
.books-label { font-size: 0.75rem; color: var(--text-muted); }
.my-progress-form {
  background: var(--warm-white); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 28px; margin-bottom: 36px;
}
.form-row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 12px; }
.form-group { display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 150px; }
.form-group label { font-size: 0.85rem; font-weight: 600; color: var(--text-muted); }
.form-group input, .form-group select, .form-group textarea {
  padding: 10px 12px; border: 2px solid var(--border);
  border-radius: 8px; font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem; background: #fff;
  transition: border-color var(--transition);
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  outline: none; border-color: var(--amber);
}

/* ── ADMIN DASHBOARD ── */
.stats-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px; margin-bottom: 40px;
}
.stat-card {
  background: #fff; border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 24px; text-align: center;
}
.stat-number {
  font-size: 2.4rem; font-weight: 700; color: var(--amber-dark);
  font-family: 'Playfair Display', serif; display: block;
}
.stat-label { font-size: 0.85rem; color: var(--text-muted); }
.mod-card {
  background: #fff; border: 1px solid var(--border);
  border-radius: var(--radius); padding: 20px; margin-bottom: 14px;
}
.mod-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
.mod-avatar { width: 40px; height: 40px; }
.mod-email, .mod-date { display: block; font-size: 0.78rem; color: var(--text-muted); }
.mod-text { margin: 10px 0; line-height: 1.6; }
.mod-meta-info { font-size: 0.78rem; color: var(--text-muted); margin-bottom: 10px; }
.mod-actions { display: flex; gap: 10px; }
.admin-book-row {
  display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
  background: #fff; border: 1px solid var(--border);
  border-radius: 8px; padding: 12px 16px; margin-bottom: 8px;
}
.admin-book-row span { flex: 1; font-size: 0.9rem; }
.book-cat {
  background: var(--parchment); padding: 2px 10px;
  border-radius: 10px; font-size: 0.8rem;
}
.admin-tabs { display: flex; gap: 4px; border-bottom: 2px solid var(--border); margin-bottom: 28px; }
.admin-tab {
  padding: 10px 20px; background: none; border: none;
  cursor: pointer; font-weight: 600; font-size: 0.9rem;
  color: var(--text-muted); border-bottom: 3px solid transparent;
  margin-bottom: -2px; transition: all var(--transition);
}
.admin-tab.active { color: var(--amber-dark); border-bottom-color: var(--amber-dark); }
.admin-panel { display: none; }
.admin-panel.active { display: block; }

/* ── LOGIN PAGE ── */
.login-page {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--dark) 0%, #2a1a0a 100%);
  padding: 20px;
}
.login-card {
  background: var(--cream); border-radius: var(--radius-lg);
  padding: 48px 40px; text-align: center; max-width: 440px; width: 100%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}
.login-logo { font-size: 3rem; margin-bottom: 16px; }
.login-card h1 { font-size: 1.8rem; margin-bottom: 8px; }
.login-card p { color: var(--text-muted); margin-bottom: 32px; font-size: 0.95rem; }
.google-btn {
  width: 100%; display: flex; align-items: center; justify-content: center; gap: 12px;
  padding: 14px; background: #fff; border: 2px solid var(--border);
  border-radius: 10px; cursor: pointer; font-size: 1rem; font-weight: 600;
  font-family: 'DM Sans', sans-serif; transition: all var(--transition);
  color: var(--text);
}
.google-btn:hover { border-color: var(--amber); box-shadow: 0 4px 16px var(--shadow); }
.google-btn img { width: 22px; }
.login-note { font-size: 0.78rem; color: var(--text-muted); margin-top: 20px; }

/* ── NOTIFICATION ── */
.notification {
  position: fixed; bottom: 24px; right: 24px;
  background: var(--dark); color: var(--parchment);
  padding: 14px 22px; border-radius: 10px; font-size: 0.9rem;
  z-index: 999; box-shadow: 0 6px 24px rgba(0,0,0,0.3);
  transform: translateY(60px); opacity: 0;
  transition: transform 0.35s ease, opacity 0.35s ease;
}
.notification.show { transform: translateY(0); opacity: 1; }
.notification.success { border-left: 4px solid var(--green); }
.notification.info { border-left: 4px solid var(--amber); }

/* ── FOOTER ── */
.footer {
  background: var(--dark); color: #9a8870;
  padding: 32px 20px; text-align: center; font-size: 0.85rem;
}
.footer a { color: var(--amber-light); }
.footer-nav { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-bottom: 16px; }
.footer-nav a { color: #9a8870; }
.footer-nav a:hover { color: var(--amber-light); }
.no-items { text-align: center; color: var(--text-muted); padding: 40px 20px; }
.badge {
  display: inline-block; background: var(--amber); color: var(--dark);
  border-radius: 10px; padding: 2px 10px; font-size: 0.78rem; font-weight: 700;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .nav-links { display: none; flex-direction: column; position: absolute; top: 62px; left: 0; right: 0; background: var(--dark); padding: 16px; gap: 4px; z-index: 99; }
  .nav-links.open { display: flex; }
  .nav-toggle { display: block; }
  .hero { padding: 50px 20px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .catalog-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
  .login-card { padding: 32px 24px; }
  .form-row { flex-direction: column; }
  .leader-row { flex-wrap: wrap; }
}
@media (max-width: 480px) {
  .catalog-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .hero-actions { flex-direction: column; align-items: center; }
}
