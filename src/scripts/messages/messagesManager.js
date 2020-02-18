import dbAPI from "../dbAPI.js";
import renderChatRoom from "./renderMessages.js";
import createMessageBoard from "./messageContainerFactory.js";

const messageAPIManager = {
putSendMessage() {
    const chatContainer = document.getElementById("chatContainer");
    const sendButton = document.getElementById("sendMessage").id;
    chatContainer.addEventListener("click", event => {
      if ((event.target.id = sendButton)) {
        const messageInput = document.getElementById("writeMessage");
        const id = document.getElementById("").value;
        const userId = document.getElementById("").value;
        const message = document.getElementById("").value;
        // define structure of object to be put in API
        const resourceObject = { id, userId, message, };
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



const populateFields = Id => {
  const id = document.querySelector("journalDate");
  const journalConceptsInput = document.getElementById("concepts");
  const journalEntryInput = document.getElementById("journalEntry");
  const journalMoodInput = document.getElementById("mood");

  fetch(`http://localhost:8088/entries/${journalId}`) // promise response, for put call. Buuilding the object by assigning values. These values are what will fill the entry fields, until the user makes an edit. When the user hits submit, it fires the PUT call.
    .then(response => response.json())
    .then(response => {
      hiddenJournalId.value = response.id;
      journalDateInput.value = response.journalDate;
      journalConceptsInput.value = response.concepts;
      journalEntryInput.value = response.journalEntry;
      journalMoodInput.value = response.mood;
    })
    .catch(err => console.log(err));
};
