import dbAPI from "../dbAPI.js";
import renderChatRoom from "./renderMessages.js";
import createMessageBoard from "./messageContainerFactory.js";

const messageAPIManager = {
  postSendMessage() {
    //const chatContainer = document.getElementById("chatContainer");
    const sendButton = document.getElementById("sendMessage");
    sendButton.addEventListener("click", () => {
      const message = document.getElementById("writeMessage").value;
      const userId = (JSON.parse(sessionStorage.getItem('user'))).id;

      // define structure of object to be put in API
      const resourceObject = {
        userId,
        message,
      };
      dbAPI
      .postObjectByResource("messages", resourceObject)
      .then(response => {
        const chatContainer = document.getElementById("message-list");
        chatContainer.innerHTML = '';
        dbAPI.getMessages().then(dataFromAPi => {
          dataFromAPi.forEach(data => {
            const message = data.message;
            const chatHTML = createMessageBoard(message);
            renderChatRoom(chatHTML);
          });
        });
      })
      .catch(err => console.log({ err }));
    });
  }
};

export default messageAPIManager;
