import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { createStore } from "redux";
import Footer from "./Footer";

const updateCityDatas = {
  type: "UPDATE_CITY",
  payload: "Tokyo",
};

function cityReducer(state = "Seoul", action) {
  switch (action.type) {
    case "UPDATE_CITY":
      return action.payload;
    default:
      return state;
  }
}

function App() {
  const firstName = "Idil";
  const lastName = "Ugurnal";
  const cities = ["Seoul", "London", "Paris", "Rome"];
  const listItems = cities.map((city) => <li>{city}</li>);
  const store = createStore(cityReducer);
  console.log(store.getState());
  store.dispatch(updateCityDatas);
  console.log(store.getState());
  return (
    <div>
      <nav>
        <h1>Welcome to My Page!</h1>
        <h2>{`${firstName} ${lastName}`}</h2>
        <ul>{listItems}</ul>
      </nav>
      <main>
        <p>This is where the main content will go!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
