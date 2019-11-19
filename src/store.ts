import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@/reducers/index';
import rootSaga from '@/sagas/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const middleware = [sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
