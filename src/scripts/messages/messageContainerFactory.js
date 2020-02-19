const createMessageBoard = message => {
  const currentUserObj = JSON.parse(sessionStorage.getItem("user"));
  return `
      <div class="chat-room-landing-page">
        <div id="messages">
          ${currentUserObj.username}: ${message}
        </div>
      </div>
  `;
};
export { createMessageBoard as default };
