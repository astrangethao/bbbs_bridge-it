import { combineReducers } from "redux";
import errors from "./errors.reducer";
import loginMode from "./loginMode.reducer";
import user from "./user.reducer";
import profiles from "./profiles.reducer";
import { resetUser } from "./resetUser.reducer";
import search from "./search.reducer";
import selectedProfile from "./selected.profile.reducer";
import matchTable from "./matchtable.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  profiles, //will have all of the profiles
  resetUser,
  search, //will contain search term
  selectedProfile, // will contain searched/selected Big or Little
  matchTable, // contains active "status" table info
});

export default rootReducer;
