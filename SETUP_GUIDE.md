<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In — The Open Book</title>
  <link rel="icon" href="assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/styles.css">
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>
</head>
<body>

<div class="login-page">
  <div class="login-card">
    <div class="login-logo">📚</div>
    <h1>The Open Book</h1>
    <p>PM Shri KV Jamtara Library<br>Sign in to join the community, comment on posts, and track your reading journey.</p>

    <button class="google-btn" onclick="login()">
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google">
      Continue with Google
    </button>

    <p class="login-note">
      Only <strong>Gmail</strong> or <strong>@kvs.gov.in</strong> accounts are allowed.<br>
      Your information is kept private and secure.
    </p>

    <div style="margin-top:24px;">
      <a href="index.html" style="font-size:0.85rem; color:var(--text-muted);">← Back to Library</a>
    </div>
  </div>
</div>

<script src="js/firebase-config.js"></script>
<script src="js/auth.js"></script>
<script>
  // If already logged in, redirect to home
  firebase.auth().onAuthStateChanged(user => {
    if (user) window.location.href = "index.html";
  });
</script>
</body>
</html>
