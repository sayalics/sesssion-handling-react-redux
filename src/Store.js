import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './Reducers/index';


const initialState = {};const middleware = [thunk];
const Store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);export default Store;