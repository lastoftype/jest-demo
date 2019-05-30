import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { sagas } from "./sagas";
import { reducers } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

// Add Redux Dev Tools
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState?: object) {
  const middlewares = [sagaMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(reducers, initialState!, enhancer);
}
// pass an optional param to rehydrate state on app start
const store = configureStore();

sagaMiddleware.run(sagas);

// export store singleton instance
export default store;
