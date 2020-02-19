import dbAPI from "../dbAPI.js";
import renderChatRoom from "./renderMessages.js";
import createMessageBoard from "./messageContainerFactory.js";

const messageAPIManager = {
  postSendMessage() {
    //const chatContainer = document.getElementById("chatContainer");
    const sendButton = document.getElementById("sendMessage");
    sendButton.addEventListener("click", () => {
      const messageInput = document.getElementById("writeMessage").value;
      let user = JSON.stringify(sessionStorage.getItem("user"));
      let id = user.id;
      let userId = user.userId;
      let message = user.message;

      // define structure of object to be put in API
      const resourceObject = {
        "userId": userId,
        "message": messageInput
      };
      dbAPI
      .postObjectByResource("messages", resourceObject)
      .then(response => {
        //console.log("response: ", response);
        dbAPI.getMessages().then(dataFromAPi => {
          dataFromAPi.forEach(user => {
            const chatContainer = document.getElementById("chatContainer")
            chatContainer.innerHTML = "";
            const message = user.message;
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
