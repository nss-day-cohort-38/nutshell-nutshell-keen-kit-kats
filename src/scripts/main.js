
import addToDom from "./addToDom.js"
import eventListeners from "./mainEventListeners.js"
import friendsEventListeners from "./friends/eventListeners.js"
import profileEventListeners from "./myProfile/profileEventListeners.js"

// Calling check if logged in conditional function!
addToDom.checkIfLoggedIn()

// Calling event listeners for login form!
eventListeners.loginButtonEventListener()
eventListeners.signupButtonEventListener()
eventListeners.logoutButtonEventListener()
friendsEventListeners.friendsButtonEventListener()
eventListeners.profileDropDownEventListener()
eventListeners.logoutButtonEventListener()


// calling My Profile Event Listeners

profileEventListeners.myProfileButtonEventListener()
profileEventListeners.changeUsernameButtonEventListener()
profileEventListeners.submitChangedUserNameEventListener()
profileEventListeners.changePasswordButtonEventListener()
profileEventListeners.submitChangedPasswordEventListener()
