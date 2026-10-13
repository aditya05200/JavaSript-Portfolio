const isloggedIn = true;
const isSubscribed = false;

switch (isloggedIn && isSubscribed) {
  case true:
    console.log("user is logged in and subscribed");
    break;
  case false:
    console.log("user is not logged in or not subscribed");
    break;
  default:
    console.log("user status unknown");
}   