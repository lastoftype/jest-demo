import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
export const mockStore = configureStore(middlewares);
