import { combineReducers } from "redux-immutable";
// 使用combineReducers后的reducer 实际返回还是一个纯函数
// 目的是所有的reducer处理逻辑可以分散在不同的分reducer中
import { reducer as appReducer } from "../app/store";
// import { reducer as searchReducer } from 'src/view/components/searchBanner/store';

const reducer = appReducer;

export default reducer;

// 使用combineReducers后的reducer 实际返回还是一个纯函数
