// leaderboard.js — Reading leaderboard

function loadLeaderboard() {
  const container = document.getElementById("leaderboardList");
  if (!container) return;

  db.ref("leaderboard").orderByChild("booksRead").limitToLast(10)
    .on("value", snap => {
      container.innerHTML = "";
      const data = snap.val();
      if (!data) {
        container.innerHTML = `<p class="no-items">No readers yet. Start reading! 📖</p>`;
        return;
      }
      // Sort descending by booksRead
      const sorted = Object.entries(data).sort((a, b) => (b[1].booksRead || 0) - (a[1].booksRead || 0));
      sorted.forEach(([id, student], index) => {
        container.appendChild(renderLeaderRow(student, index + 1));
      });
    });
}

function renderLeaderRow(student, rank) {
  const row = document.createElement("div");
  row.className = `leader-row rank-${rank <= 3 ? rank : "other"}`;
  const medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`;
  row.innerHTML = `
    <span class="rank-badge">${medal}</span>
    <img src="${student.photoURL || 'assets/default-avatar.png'}" class="leader-avatar" alt="">
    <div class="leader-info">
      <strong>${escapeHTML(student.name || "Anonymous")}</strong>
      <span class="leader-class">${escapeHTML(student.class || "")}</span>
    </div>
    <div class="leader-stats">
      <span class="books-count">${student.booksRead || 0}</span>
      <span class="books-label">books read</span>
    </div>
  `;
  return row;
}

function updateMyProgress() {
  const user = firebase.auth().currentUser;
  if (!user) { alert("Please login to update your reading progress."); return; }

  const booksRead = parseInt(document.getElementById("booksReadInput").value) || 0;
  const className = document.getElementById("classInput").value.trim();

  if (booksRead < 0) { alert("Please enter a valid number."); return; }

  const key = user.uid;
  db.ref("leaderboard/" + key).set({
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL || "",
    class: className,
    booksRead: booksRead,
    updatedAt: Date.now()
  }).then(() => showNotification("🎉 Your reading progress updated!", "success"))
    .catch(err => alert("Error: " + err.message));
}

function loadMyStats() {
  const user = firebase.auth().currentUser;
  if (!user) return;
  db.ref("leaderboard/" + user.uid).once("value", snap => {
    const data = snap.val();
    const input = document.getElementById("booksReadInput");
    const classInput = document.getElementById("classInput");
    if (data && input) input.value = data.booksRead || 0;
    if (data && classInput) classInput.value = data.class || "";
  });
}

document.addEventListener("authReady", e => {
  if (e.detail.user) loadMyStats();
});
