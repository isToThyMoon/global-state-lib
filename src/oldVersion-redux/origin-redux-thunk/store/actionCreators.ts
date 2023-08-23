/*
 * @Author: 王荣
 * @Date: 2022-09-26 11:50:55
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-26 16:06:00
 * @Description: 填写简介
 */
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
	index
});

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
});

// redux thunk的作用就是dispatch()的参数可以是一个函数（并执行它），这个函数以dispatch为入参，开发者可以在该函数内部执行一些异步逻辑后继续dispatch。
// 还有一个redux saga的第三方中间件 基本已死
export const getTodoList = () => {
	return (dispatch) => {
		axios.get('/list.json').then((res) => {
			const data = res.data;
			const action = initListAction(data);
			dispatch(action);
		});
	};
};
