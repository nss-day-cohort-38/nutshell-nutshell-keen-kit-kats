const createMessageBoard = message => {
  const currentUserObj = JSON.parse(sessionStorage.getItem("user"));
  return `
          <div class="chat-room-landing-page">
            <section>
              <h1>Chat Room</h1>
            </section>
            <div id="messages">
            ${message}
            </div>
          <div class="chat-room-field">
        <fieldset>
        <label for="writeMessage">${currentUserObj.username}: Write Message</label>
        <input type="text" name="writeMessage" id="writeMessage">
        </fieldset>
        </div>
    </div>
      `;
};

const addMessagesToDOM = {
  addMessageContainer() {
    document.getElementById("mainContainer").innerHTML += createMessageBoard();
  },
  exitMessages() {
    const exitMessagesButton = document.getElementById("chatButtonClose");
    exitMessagesButton.addEventListener("click", () => {
      const exitChat = document.getElementById("chatContainer");
      exitChat.classList.toggle("hidden");
      document.getElementById("chatContainer").classList.toggle("");
      document.getElementById("chatButton").classList.toggle("");
      document.getElementById("profileDropDown").classList.toggle("");

    });
  },
  messageButtonEventListener() {
    document.getElementById("chatButton").addEventListener("click", () => {
      //addMessagesToDOM.addMessageContainer();
      document.getElementById("chatContainer").classList.toggle("hidden");
      document.getElementById("profileDropDown").classList.toggle("hidden");
    });
  }
};

export default addMessagesToDOM
