/*
 * @Author: 王荣
 * @Date: 2022-09-26 17:24:58
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-26 21:35:10
 * @Description: 填写简介
 */

import { combineReducers } from "redux-immutable";
// 使用combineReducers后的reducer 实际返回还是一个纯函数
// 目的是所有的reducer处理逻辑可以分散在不同的分reducer中
import { reducer as appReducer } from "../app/store";
// import { reducer as searchReducer } from 'src/view/components/searchBanner/store';

const reducer = combineReducers({
  APP: appReducer,
  // SEARCH: searchReducer,
});

export default reducer;

// 使用combineReducers后的reducer 实际返回还是一个纯函数
