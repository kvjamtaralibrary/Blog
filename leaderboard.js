// auth.js — Authentication for KV Jamtara Library

const ALLOWED_DOMAINS = ["gmail.com", "kvs.gov.in"];
const ADMIN_EMAIL = "kvjamtaralibrary@gmail.com";

function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const email = result.user.email;
      const domain = email.split("@")[1];
      if (!ALLOWED_DOMAINS.includes(domain)) {
        alert("Only school (@kvs.gov.in) or Gmail accounts are allowed.");
        firebase.auth().signOut();
        return;
      }
      // Redirect to home after login
      if (window.location.pathname.includes("login.html")) {
        window.location.href = "index.html";
      } else {
        updateAuthUI(result.user);
      }
    })
    .catch(err => {
      console.error("Login error:", err);
      alert("Login failed. Please try again.");
    });
}

function logout() {
  firebase.auth().signOut().then(() => {
    updateAuthUI(null);
  });
}

function isAdmin(user) {
  return user && user.email === ADMIN_EMAIL;
}

function updateAuthUI(user) {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userInfo = document.getElementById("userInfo");
  const adminLink = document.getElementById("adminLink");

  if (user) {
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-flex";
    if (userInfo) {
      userInfo.style.display = "flex";
      userInfo.innerHTML = `<img src="${user.photoURL || 'assets/default-avatar.png'}" alt="Avatar" class="avatar"> <span>${user.displayName}</span>`;
    }
    if (adminLink) adminLink.style.display = isAdmin(user) ? "block" : "none";
  } else {
    if (loginBtn) loginBtn.style.display = "inline-flex";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (userInfo) userInfo.style.display = "none";
    if (adminLink) adminLink.style.display = "none";
  }
}

// Listen to auth state changes on every page
firebase.auth().onAuthStateChanged(user => {
  updateAuthUI(user);
  // Dispatch a custom event so other scripts can react
  document.dispatchEvent(new CustomEvent("authReady", { detail: { user } }));
});
