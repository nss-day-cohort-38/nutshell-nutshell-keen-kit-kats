import dbAPI from "../dbAPI.js";
import renderChatRoom from "./renderMessages.js";
import createMessageBoard from "./messageContainerFactory.js";

const messageAPIManager = {
putSendMessage() {
    const chatContainer = document.getElementById("chatContainer");
    const sendButton = document.getElementById("sendMessage").id;
    chatContainer.addEventListener("click", event => {
      if ((event.target.id = sendButton)) {
        const messageInput = document.getElementById("writeMessage").value;
        //messageBody = event.target.value;
        dbAPI
        .putObjectByResource(resource, resourceObject)
        .then(response => {
          console.log(response);
        });
      };
    });
  }
};

export default messageAPIManager
