import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer
  // Uncomment this line if you want to use Redux DevTools Extension in development
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
