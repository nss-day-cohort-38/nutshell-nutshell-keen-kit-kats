export function editMessagesButtonAction() {
  const editButton = document.querySelector("#message-list");
  editButton.addEventListener("click", event => {
    if (event.target.id.startsWith("editMessage--")) {
      const messageToEditId = event.target.id.split("--")[1];
      populateMessageFields(messageToEditId);
    }
  });
}

// event listener on save button, after user edits the journal
// using PUT call to update the API with changes. Added a check in jounralManger.js to check initially if the entry feild has a hidden value. If it does, then the user is editing.
// if it doesn't then it is a new load, or freshly loaded page.

const populateMessageFields = (messageId) => {
    const hiddenId = document.querySelector("#hiddenMessageId");
    const message = document.getElementById("writeMessage");
    const user = JSON.parse(sessionStorage.getItem('user'));


    fetch(`http://localhost:8088/messages/${messageId}`) // promise response, for put call. Building the object by assigning values. These values are what will fill the entry fields, until the user makes an edit. When the user hits submit, it fires the PUT call.
      .then(response => response.json())
      .then(response => {
          console.log(response);
         hiddenId.value = response.id;
          user.id = response.userId;
          message.value = response.message;

      })
      .catch(err => console.log(err));
  };
