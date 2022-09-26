/*
 * @Author: 王荣
 * @Date: 2022-09-21 00:03:11
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 01:00:34
 * @Description: 填写简介
 */
import React from "react";
import "./App.css";
import Add from "./jotai/jotai-immer";
import Extra from "./jotai/extra";
import ChildJotai from "./jotai/child";
import { Provider } from "jotai";
import List from "./useReducer/reducer-demo";
import ReduxDemo from "./oldVersion-redux";
import ReduxToolkitDemo from "./redux-toolkit";

function App() {
  console.log("app rerender");
  return (
    <div className="App">
      <ReduxDemo></ReduxDemo>
      <ReduxToolkitDemo></ReduxToolkitDemo>

      <Provider>
        <Add></Add>
        <Extra></Extra>
      </Provider>

      <List></List>
    </div>
  );
}

export default App;
