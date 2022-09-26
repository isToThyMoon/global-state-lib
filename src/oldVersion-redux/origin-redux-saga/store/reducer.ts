/*
 * @Author: 王荣
 * @Date: 2022-09-26 16:19:17
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-26 17:42:10
 * @Description: 填写简介
 */
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
} from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: [1, 2, 3],
};

// 常规reducer导出的是一个纯函数 唯一输入 唯一输出 没有副作用
const reducer = (state = defaultState, action) => {
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};

export default reducer;
