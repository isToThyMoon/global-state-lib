/*
 * @Author: 王荣
 * @Date: 2022-09-21 00:03:11
 * @LastEditors: 王荣
 * @LastEditTime: 2022-10-25 23:06:08
 * @Description: 填写简介
 */
import React from "react";
import "./App.css";

import ReducerDemo from "./useReducer/TodoList";
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
