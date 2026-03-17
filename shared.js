// comments.js — Secure comment submission and display

async function submitComment() {
  const user = firebase.auth().currentUser;
  if (!user) {
    alert("Please login first to leave a comment.");
    return;
  }

  const textEl = document.getElementById("commentText");
  const text = textEl ? textEl.value.trim() : "";

  if (!text) {
    alert("Please write something before submitting.");
    return;
  }
  if (isSpam(text)) {
    alert("Your comment is too short or looks like spam. Please write a meaningful comment.");
    return;
  }
  if (detectAbuse(text)) {
    alert("Your comment contains inappropriate language and cannot be submitted.");
    return;
  }

  // Get IP address for logging (for admin review only)
  let ipAddress = "unknown";
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();
    ipAddress = ipData.ip;
  } catch (e) { /* silently fail */ }

  const comment = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL || "",
    text: text,
    ip: ipAddress,
    browser: navigator.userAgent,
    timestamp: Date.now(),
    status: "pending"
  };

  try {
    await db.ref("pending_comments").push(comment);
    if (textEl) textEl.value = "";
    showNotification("✅ Comment submitted! It will appear after admin approval.", "success");
  } catch (err) {
    console.error("Error submitting comment:", err);
    alert("Failed to submit comment. Please try again.");
  }
}

function loadApprovedComments(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  db.ref("approved_comments").orderByChild("timestamp").on("value", snap => {
    container.innerHTML = "";
    const data = snap.val();
    if (!data) {
      container.innerHTML = `<p class="no-comments">No comments yet. Be the first to share your thoughts!</p>`;
      return;
    }
    // Display newest first
    const entries = Object.entries(data).reverse();
    entries.forEach(([id, comment]) => {
      container.appendChild(renderCommentCard(comment));
    });
  });
}

function renderCommentCard(comment) {
  const card = document.createElement("div");
  card.className = "comment-card";
  const date = new Date(comment.timestamp).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
  card.innerHTML = `
    <div class="comment-header">
      <img src="${comment.photoURL || 'assets/default-avatar.png'}" alt="${comment.name}" class="comment-avatar">
      <div>
        <strong class="comment-name">${escapeHTML(comment.name)}</strong>
        <span class="comment-date">${date}</span>
      </div>
    </div>
    <p class="comment-text">${escapeHTML(comment.text)}</p>
  `;
  return card;
}

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function showNotification(message, type = "info") {
  const notif = document.createElement("div");
  notif.className = `notification ${type}`;
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.classList.add("show"), 10);
  setTimeout(() => {
    notif.classList.remove("show");
    setTimeout(() => notif.remove(), 400);
  }, 3500);
}
