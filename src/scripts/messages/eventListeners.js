import dbAPI from "../dbAPI.js";
//import renderChatRoom from "./renderMessages.js";
import createMessageBoard from "./messageContainerFactory.js";

//grab ref to mainContainer
// event needs to blow away what is on the page
// chat with other users, when the user activated their account
// chat section top right of page
// 1 messages, userID, display username based on userID.
// save users id as foriegn key on the chat

const chatButtonClickEvent = {
  chatButtonFirstClick() {
    const chatButton = document.getElementById("chatButton");
    chatButton.addEventListener("click", () => {
      document.getElementById(
        "mainContainer"
      ).innerHTML += createMessageBoard();
      document.getElementById("chatContainer").classList.toggle("hidden");
      document.getElementById("mainContainer").classList.toggle("shrink");
      document.getElementById("profileDropDown").classList.toggle("hidden");
    });
  },
  exitMessages() {
    //const chatContainer = document.getElementById("chatContainer");
    const exitMessagesButton = document.getElementById("chatButtonClose");
    exitMessagesButton.addEventListener("click", event => {
      if ((event.target.id = exitMessagesButton.id)) {
        const exitChat = document.getElementById("chatContainer");
        exitChat.classList.toggle("hidden");
        document.getElementById("chatContainer").classList.toggle("display");
        document.getElementById("chatButton").classList.toggle("display");
        document.getElementById("profileDropDown").classList.toggle("display");
        document.getElementById("mainContainer").classList.toggle("shrink");
      }
    });
  }
};

export default chatButtonClickEvent;
