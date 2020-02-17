const createMessageBoard = (message) => {
    const currentUserObj = JSON.parse(sessionStorage.getItem("user"));
    return `
              <div id="messages">
              ${message}
              </div>

        `;
  };
export { createMessageBoard as default }
