function submitMessage() {
    var message = document.getElementById("message-input").value;
    var messageContainer = document.getElementById("message-container");
    var newMessage = document.createElement("div");
    newMessage.textContent = message;
    messageContainer.appendChild(newMessage);
    document.getElementById("message-input").value = "";
}

function uploadMedia() {
    var mediaInput = document.getElementById("media-input");
    var mediaFile = mediaInput.files[0];
    // Logic for uploading media goes here
    alert("Media uploaded: " + mediaFile.name);
}
