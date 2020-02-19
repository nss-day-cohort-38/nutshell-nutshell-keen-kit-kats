
const chatButtonClickEvent = {
  // chatButtonFirstClick() {
  //   const chatButton = document.getElementById("chatButton");
  //   chatButton.addEventListener("click", () => {
  //     document.getElementById("chatContainer").innerHTML += createMessageBoard();
  //     document.getElementById("chatContainer").classList.toggle("hidden");
  //     document.getElementById("mainContainer").classList.toggle("shrink");
  //     document.getElementById("profileDropDown").classList.toggle("hidden");
  //   });
  // },
  exitMessages() {
    //const chatContainer = document.getElementById("chatContainer");
    const exitMessagesButton = document.getElementById("chatButtonClose");
    exitMessagesButton.addEventListener("click", () => {
      const exitChat = document.getElementById("chatContainer");
      exitChat.classList.toggle("hidden");

      if ((event.target.id = exitMessagesButton.id)) {
        document.getElementById("chatButton").classList.toggle("display");
        document.getElementById("profileDropDown").classList.toggle("display");
        document.getElementById("mainContainer").classList.toggle("shrink");
      }
    });
  }
};

export default chatButtonClickEvent;
