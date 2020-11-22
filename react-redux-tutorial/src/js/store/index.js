import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware, forbiddenWordsMiddleware2 } from "../middleware";

const store = createStore(rootReducer, applyMiddleware(forbiddenWordsMiddleware, forbiddenWordsMiddleware2));

export default store;