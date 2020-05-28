import React from "react";
import "./App.css";
import { combineReducers, createStore } from "redux";
import Footer from "./Footer";

const updateCityDatas = {
  type: "UPDATE_CITY",
  payload: "Seoul",
};

const updateDistrictDatas = {
  type: "UPDATE_DISTRICT",
  payload: "Myeong-dong",
};

function cityReducer(state = "Tokyo", action) {
  switch (action.type) {
    case "UPDATE_CITY":
      return action.payload;
    default:
      return state;
  }
}

function districtReducer(state = "insa-dong", action) {
  switch (action.type) {
    case "UPDATE_DISTRICT":
      return action.payload;
    default:
      return state;
  }
}

const reducers = combineReducers({
  cities: cityReducer,
  districts: districtReducer,
});

function App() {
  const firstName = "Idil";
  const lastName = "Ugurnal";
  const cities = ["Seoul", "London", "Paris", "Rome"];
  const listItems = cities.map((city) => <li>{city}</li>);
  const store = createStore(reducers);

  store.dispatch(updateCityDatas);
  store.dispatch(updateDistrictDatas);
  console.log(store.getState());
  return (
    <div>
      <nav>
        <h1>Welcome to My Page!</h1>
        <h2>{`${firstName} ${lastName}`}</h2>
        <ul>{listItems}</ul>
      </nav>

      <main>
        <h3> My Favorite City is: </h3>
        <p> {store.getState().cities}</p>
        <h3> My Favorite District in the city is: </h3>
        <p> {store.getState().districts}</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
