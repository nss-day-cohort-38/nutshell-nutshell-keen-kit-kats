
import addToDom from "./addToDom.js"
import eventListeners from "./mainEventListeners.js"
import friendsEventListeners from "./friends/eventListeners.js"
import profileEventListeners from "./myProfile/profileEventListeners.js"
import chatButtonClickEvent from "./messages/eventListeners.js"
import init from "./messages/addMessagesToDOM.js"
import messageAPIManager from "./messages/messagesManager.js"
//import messageButtonEventListener from "./messages/addMessagesToDOM.js"
//import addMessagesToDOM from "./messages/addMessagesToDOM.js"


// Calling initial render of messages
init()
messageAPIManager.putSendMessage()

// Calling check if logged in conditional function!
addToDom.checkIfLoggedIn()

// Calling event listeners for login form!
eventListeners.loginButtonEventListener()
eventListeners.signupButtonEventListener()
eventListeners.logoutButtonEventListener()
eventListeners.profileDropDownEventListener()


// calling My Profile Event Listeners

profileEventListeners.myProfileButtonEventListener()
profileEventListeners.changeUsernameButtonEventListener()
profileEventListeners.submitChangedUserNameEventListener()
profileEventListeners.changePasswordButtonEventListener()
profileEventListeners.submitChangedPasswordEventListener()
//addMessagesToDOM.messageButtonEventListener()


// Calling messages event listeners
chatButtonClickEvent.chatButtonFirstClick()
chatButtonClickEvent.exitMessages()


// Friends event listeners
friendsEventListeners.friendsButtonEventListener()
