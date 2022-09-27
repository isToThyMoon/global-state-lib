/*
 * @Author: 王荣
 * @Date: 2022-09-21 00:03:11
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 22:40:48
 * @Description: 填写简介
 */
import React from "react";
import "./App.css";

import ReducerDemo from "./useReducer/reducer-demo";
import ReduxDemo from "./oldVersion-redux";
import ReduxToolkitDemo from "./redux-toolkit";
import JotaiDemo from "./jotai";

function App() {
  console.log("app rerender");
  return (
    <div className="App">
      <ReducerDemo></ReducerDemo>

      <ReduxDemo></ReduxDemo>

      <ReduxToolkitDemo></ReduxToolkitDemo>

      <JotaiDemo></JotaiDemo>
    </div>
  );
}

export default App;
