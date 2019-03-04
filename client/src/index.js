import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import "./index.css";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import * as serviceWorker from "./serviceWorker";
import ELAContainer from "./containers/SecondGrade/ELA/ELAContainer";
const initialState = {};
const store = configureStore(initialState);
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/second-grade-ela" component={ELAContainer} />
    </div>
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
