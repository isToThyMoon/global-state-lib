/*
 * @Author: 王荣
 * @Date: 2022-09-26 16:19:17
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-26 16:50:12
 * @Description: 填写简介
 */
import { put, takeEvery } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from "axios";

function* getInitList() {
  try {
    const res = yield axios.get("/list.json");
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    // console.log('list.json网络请求失败')
  }
}

function* TodoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default TodoSagas;
