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

