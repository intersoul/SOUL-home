// script.js
document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('nameInput').value;
  var message = document.getElementById('messageInput').value;
  var messageList = document.getElementById('messages');
  var listItem = document.createElement('li');
  listItem.innerHTML = '<strong>' + name + ':</strong> ' + message;
  messageList.appendChild(listItem);
  document.getElementById('nameInput').value = '';
  document.getElementById('messageInput').value = '';
});
