/*
 * @Author: 王荣
 * @Date: 2022-09-26 13:44:42
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-29 22:52:45
 * @Description: 填写简介
 */

import { Provider } from "react-redux";

import { default as TodoListThunk } from "./origin-redux-thunk/TodoList";
import { default as TodoListSaga } from "./origin-redux-saga/TodoList";
import { default as storeClass } from "./redux-class-immer/store";
import { default as TodoListClass } from "./redux-class-immer/app/TodoList";
import { default as storeImmutable } from "./redux-class-immutable/store";
import { default as TodoListImmutable } from "./redux-class-immutable/app/TodoList";

const ReduxDemo = () => {
  return (
    <div>
      <TodoListThunk></TodoListThunk>
      <TodoListSaga></TodoListSaga>

      <Provider store={storeClass}>
        <TodoListClass></TodoListClass>
      </Provider>

      <Provider store={storeImmutable}>
        <TodoListImmutable></TodoListImmutable>
      </Provider>
    </div>
  );
};

export default ReduxDemo;
