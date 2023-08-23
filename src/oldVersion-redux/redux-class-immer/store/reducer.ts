// combineReducers方法来合并多个reducer
// 使用combineReducers后的reducer 实际返回还是一个纯函数
// 早期redux包内导出这个方法，现在在@reduxjs/toolkit中
// import { createStore, combineReducers } from 'redux'
import { combineReducers } from 'redux';
// import { combineReducers } from "@reduxjs/toolkit";

// 目的是所有的reducer处理逻辑可以分散在不同的分reducer中
import { reducer as appReducer } from '../app/recipe';
// 假如你有其他reducer的话
// import { reducer as searchReducer } from 'src/view/components/searchBanner/store';

// 使用该方法合并两个reducer
const rootReducer = combineReducers({
	appReducer
	// UserReducer
});

export default rootReducer;

// 使用combineReducers后的reducer 实际返回还是一个纯函数
