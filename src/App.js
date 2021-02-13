import React, {useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";

import { addEmployees } from './actions';
import AsideBar from "./AsideBar";
import Main from "./Main";

import './App.css';

function App() {
  const dispatch = useDispatch();

  function getData() {
    axios.get('http://localhost:8000/get-employees')
    .then((response) => {
      dispatch(addEmployees(response.data));
    });
  }
  useEffect(() => {
    getData()
  });

  return (
    <div className="app">
      <BrowserRouter>
        <AsideBar />
        <Route exact path="/:name" component={Main} />
      </BrowserRouter>
    </div>
  );
}

export default App;
