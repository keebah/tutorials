import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware, forbiddenWordsMiddleware2 } from "../middleware";
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(forbiddenWordsMiddleware, thunk));

export default store;