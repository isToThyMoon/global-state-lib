// import * as constants from './constants.js';
// import Axios from '../../../axios/index.js';
// import Utils from '../../../utils/utils.js';

// actionCreators原本可以直接写在容器组件的mapDispatchToProps中，比较简单易懂。
// 当容器组件中的dispatch逻辑越来越多时，代码量过高，容易想到拆分这个actionCreators函数到统一的文件中。
// 使用的thunk中间件后，dispatch()方法（除了一个action对象外）可以接收一个函数了，将dispatch方法作为参数传入并执行方法中的全部内容。我们可以在这个方法中执行异步请求和其他逻辑，再完成后继续dispatch的工作。
// 其实也是整合的异步逻辑的处理地点。

// axios
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
// import { getSearchList, getMoreList } from '../../ajax/api';

import {
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	DELETE_TODO_ITEM,
	INIT_LIST_ACTION
} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value: value
});

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	value: index
});

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	value: data
});

// export const handleSearch = (type:string, content:string)=>{
//  return (dispatch:ThunkDispatch<any, any, AnyAction>) => {
//    getSearchList(type, content).then((data)=>{
//      console.log('搜索结果', data)
//      dispatch({type:'SEARCHCOMLIST', value: {isEnd: data.isEnd, comInfoList: data.comInfoLists, lastSearchComId: data.lastSearchComId}})
//    })
//  }
// }
