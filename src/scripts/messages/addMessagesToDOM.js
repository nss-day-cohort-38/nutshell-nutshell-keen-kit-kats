import dbAPI from "../dbAPI.js";
import createMessageBoard from "./messageContainerFactory.js";
import renderChatRoom from "./renderMessages.js";

const init = () => {
  const chatButton = document.getElementById("chatButton");
  chatButton.addEventListener("click", () => {
    document.getElementById("chatContainer").classList.toggle("hidden");
    document.getElementById("mainContainer").classList.toggle("shrink");
    document.getElementById("profileDropDown").classList.toggle("hidden");
    dbAPI.getMessages().then(dataFromAPi => {
      const chatContainer = document.getElementById("message-list");
      chatContainer.innerHTML = "";
      dataFromAPi.forEach(user => {
        const message = user.message;
        const chatHTML = createMessageBoard(message);
        //document.getElementById("chatContainer").innerHTML += createMessageBoard(message);
        renderChatRoom(chatHTML);
      });
    });
  });
};

export { init as default };
