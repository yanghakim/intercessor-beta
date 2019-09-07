import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import App from "./App";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reduxThunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk));
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
