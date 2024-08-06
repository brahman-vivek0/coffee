document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message-input');
    const messagesList = document.getElementById('messages');

    if (messageInput.value.trim()) {
        const newMessage = document.createElement('li');
        newMessage.textContent = messageInput.value;
        messagesList.appendChild(newMessage);
        messageInput.value = '';
    }
});