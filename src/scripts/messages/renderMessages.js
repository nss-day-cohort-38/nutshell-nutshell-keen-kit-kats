const renderChatRoom = chatHTML => {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.innerHTML += chatHTML;
  };

export { renderChatRoom as default }
