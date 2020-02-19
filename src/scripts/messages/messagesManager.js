import dbAPI from "../dbAPI.js";
import renderChatRoom from "./renderMessages.js";
import createMessageBoard from "./messageContainerFactory.js";

const messageAPIManager = {
  postSendMessage() {
    const sendButton = document.getElementById("sendMessage");
    sendButton.addEventListener("click", () => {
      const message = document.getElementById("writeMessage").value;
      const userId = (JSON.parse(sessionStorage.getItem('user'))).id;

      const resource = {
        userId,
        message,
      };

      dbAPI
      .postObjectByResource("messages", resource)
      .then((response) => {
        console.log("Message created: ", response);
        document.getElementById("writeMessage").value = '';

        const chatContainer = document.getElementById("message-list");
        chatContainer.innerHTML = '';

        dbAPI.getMessagesExpanded().then(dataFromAPi => {
          dataFromAPi.forEach(data => {

            const message = data.message;
            const userId = data.userId;
            const username = data.user.username;
            const messageId = message.id;
            const chatHTML = createMessageBoard(message, userId, username, messageId);

            renderChatRoom(chatHTML);
          });
        });
      })
      .catch(err => console.log({ err }));
    });
  }
};

export default messageAPIManager;
