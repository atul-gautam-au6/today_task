import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchallDatareducer, notesDataReducer } from "./reducer/notesdataReducer";

// const intialState = {notes:{''}}

const reducer = combineReducers({
  userSavedStatus :notesDataReducer,
  AllSaveddata:fetchallDatareducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  // intialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
