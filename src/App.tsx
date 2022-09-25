/*
 * @Author: 王荣
 * @Date: 2022-09-21 00:03:11
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-24 22:16:28
 * @Description: 填写简介
 */
import React from "react";
import "./App.css";
import Add from "./jotai/jotai-immer";
import Extra from "./jotai/extra";
import ChildJotai from "./jotai/child";
import { Provider } from "jotai";
import PureOne from "./pure-one";
import List from "./useReducer/reducer-demo";

function App() {
  console.log("app rerender");
  return (
    <div className="App">
      <Provider>
        <Add></Add>
        <Extra></Extra>
      </Provider>
      <PureOne></PureOne>
      <List></List>
      {/* <ChildJotai></ChildJotai> */}
      {/* <ItemList></ItemList> */}
    </div>
  );
}

export default App;
