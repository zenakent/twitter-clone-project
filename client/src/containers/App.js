import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  //prevent tampering of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode));
  } catch (error) {
    store.dispatch(setCurrentUser({}));
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
