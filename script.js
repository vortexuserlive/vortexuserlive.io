function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput !== "") {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<p>You: " + userInput + "</p>";
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}