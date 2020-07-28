import React from "react";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

import "./index.css";

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
serviceWorker.unregister();
