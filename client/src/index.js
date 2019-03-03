import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import "./index.css";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import * as serviceWorker from "./serviceWorker";
import Home from "./containers/Home";
const initialState = {};
const store = configureStore(initialState);
const AppRouter = () => (
  <Router history={history}>
    <Route path="/" component={Home} />
  </Router>
);
export default AppRouter;

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
