function addMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  if (message) {
    const note = document.createElement('p');
    note.textContent = message;
    document.getElementById('notes').appendChild(note);
    input.value = '';
  }
}
const dbRef = firebase.database().ref("messages");

// Gửi lưu bút
function addMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  if (message) {
    dbRef.push({
      text: message,
      timestamp: Date.now()
    });
    input.value = '';
  }
}

// Hiển thị lời nhắn theo thời gian thực
dbRef.on("child_added", function(snapshot) {
  const data = snapshot.val();
  const note = document.createElement('p');
  note.textContent = data.text;
  document.getElementById('notes').appendChild(note);
});

