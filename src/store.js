import { createStore, applyMiddleware, compose } from "redux"
import PaymentReducer from './reducers/PaymentReducer'
import thunk from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
    return createStore(
        PaymentReducer,
        composeEnhancer(applyMiddleware(thunk)),
    );
}

export const store = configureStore();