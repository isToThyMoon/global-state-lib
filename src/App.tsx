/*
 * @Author: 王荣
 * @Date: 2022-09-21 00:03:11
 * @LastEditors: 王荣
 * @LastEditTime: 2022-11-04 13:59:05
 * @Description: 填写简介
 */
import React from "react";
import "./App.scss";
// import "./fonts/index.scss"
import ReducerDemo from "./useReducer/TodoList";
import ReduxDemo from "./oldVersion-redux";
import ReduxToolkitDemo from "./redux-toolkit";
import JotaiDemo from "./jotai";
import { Input, Button, List } from "antd";
// import 'ayri-ui/es/button/style'

function App() {
  console.log("app rerender");
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <div>{count}</div>
      <Button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        change count
      </Button>
      {/* <div style={{fontFamily: 'micon'}}>&#xe000;</div> */}

      {/* <ReducerDemo></ReducerDemo>

      <ReduxDemo></ReduxDemo> */}

      <ReduxToolkitDemo></ReduxToolkitDemo>

      {/* <JotaiDemo></JotaiDemo> */}
    </div>
  );
}

export default App;
