// moderation.js — Admin moderation panel logic

function loadPendingComments() {
  const container = document.getElementById("pendingContainer");
  if (!container) return;

  db.ref("pending_comments").on("value", snap => {
    container.innerHTML = "";
    const data = snap.val();
    if (!data) {
      container.innerHTML = `<p class="no-items">No pending comments. 🎉</p>`;
      return;
    }
    Object.entries(data).forEach(([id, comment]) => {
      container.appendChild(renderPendingCard(id, comment));
    });
  });
}

function renderPendingCard(id, comment) {
  const card = document.createElement("div");
  card.className = "mod-card";
  const date = new Date(comment.timestamp).toLocaleString("en-IN");
  card.innerHTML = `
    <div class="mod-meta">
      <img src="${comment.photoURL || 'assets/default-avatar.png'}" class="mod-avatar" alt="">
      <div>
        <strong>${escapeHTML(comment.name)}</strong>
        <span class="mod-email">${escapeHTML(comment.email)}</span>
        <span class="mod-date">${date}</span>
      </div>
    </div>
    <p class="mod-text">${escapeHTML(comment.text)}</p>
    <div class="mod-meta-info">
      <span>IP: ${comment.ip}</span>
    </div>
    <div class="mod-actions">
      <button class="btn-approve" onclick="approve('${id}', ${JSON.stringify(comment).replace(/"/g, '&quot;')})">✅ Approve</button>
      <button class="btn-reject" onclick="reject('${id}')">❌ Reject</button>
    </div>
  `;
  return card;
}

function approve(id, data) {
  data.status = "approved";
  data.approvedAt = Date.now();
  db.ref("approved_comments/" + id).set(data)
    .then(() => db.ref("pending_comments/" + id).remove())
    .then(() => showNotification("Comment approved!", "success"))
    .catch(err => alert("Error approving: " + err.message));
}

function reject(id) {
  if (!confirm("Are you sure you want to reject and delete this comment?")) return;
  db.ref("pending_comments/" + id).remove()
    .then(() => showNotification("Comment rejected.", "info"))
    .catch(err => alert("Error rejecting: " + err.message));
}

function loadStats() {
  db.ref("pending_comments").once("value", snap => {
    const el = document.getElementById("pendingCount");
    if (el) el.textContent = snap.numChildren();
  });
  db.ref("approved_comments").once("value", snap => {
    const el = document.getElementById("approvedCount");
    if (el) el.textContent = snap.numChildren();
  });
  db.ref("books").once("value", snap => {
    const el = document.getElementById("bookCount");
    if (el) el.textContent = snap.numChildren();
  });
  db.ref("leaderboard").once("value", snap => {
    const el = document.getElementById("studentCount");
    if (el) el.textContent = snap.numChildren();
  });
}

function addBook() {
  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const category = document.getElementById("bookCategory").value.trim();
  const rating = parseFloat(document.getElementById("bookRating").value) || 0;
  const shelf = document.getElementById("bookShelf").value.trim();
  const available = document.getElementById("bookAvailable").checked;

  if (!title || !author || !category) {
    alert("Please fill in title, author, and category.");
    return;
  }
  const book = { title, author, category, rating, shelf, available, addedAt: Date.now() };
  db.ref("books").push(book)
    .then(() => {
      showNotification("📚 Book added successfully!", "success");
      ["bookTitle","bookAuthor","bookCategory","bookRating","bookShelf"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });
    })
    .catch(err => alert("Error adding book: " + err.message));
}

function deleteBook(id) {
  if (!confirm("Delete this book from the catalog?")) return;
  db.ref("books/" + id).remove()
    .then(() => showNotification("Book deleted.", "info"))
    .catch(err => alert("Error: " + err.message));
}

function loadAdminBooks() {
  const container = document.getElementById("adminBookList");
  if (!container) return;
  db.ref("books").on("value", snap => {
    container.innerHTML = "";
    const data = snap.val();
    if (!data) { container.innerHTML = "<p>No books yet.</p>"; return; }
    Object.entries(data).forEach(([id, book]) => {
      const row = document.createElement("div");
      row.className = "admin-book-row";
      row.innerHTML = `
        <span><strong>${escapeHTML(book.title)}</strong> — ${escapeHTML(book.author)}</span>
        <span class="book-cat">${escapeHTML(book.category)}</span>
        <span>${book.available ? "✅ Available" : "❌ Issued"}</span>
        <button class="btn-reject small" onclick="deleteBook('${id}')">🗑 Delete</button>
      `;
      container.appendChild(row);
    });
  });
}
