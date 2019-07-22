import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";
import modal from "./modal";
const chat = combineReducers({
      messages ,
      users,
      modal
})

export default chat;