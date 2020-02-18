
import dbAPI from "../dbAPI.js"
import createMessageBoard from "./messageContainerFactory.js"
import renderChatRoom from "./renderMessages.js"



const init = () => {
  dbAPI.getMessages().then(dataFromAPi => {
    dataFromAPi.forEach(user => {
      const message = user.message;
      const chatHTML = createMessageBoard(message);
      renderChatRoom(chatHTML);
    });
  });
};

export { init as default };
