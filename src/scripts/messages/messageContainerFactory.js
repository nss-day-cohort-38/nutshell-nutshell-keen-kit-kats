const createMessageBoard = (message, userId, username) => {
  return `
      <div class="chat-room-landing-page">
        <div id="messages" data-user-id="${userId}">
          <p>${username}: ${message}</p>
        </div>
      </div>
  `;
};
export { createMessageBoard as default };
