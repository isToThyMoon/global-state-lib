/*
 * @Author: 王荣
 * @Date: 2022-09-26 17:24:58
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-26 22:26:34
 * @Description: 填写简介
 */

//大型项目，复杂的组件层级，单单在一个store里用一个reducer文件来处理action显得非常臃肿了，将reducer按和组件层级拆分一样的逻辑将reducer拆分到各个组件中，单独负责该组件的action派发处理。总store里的reducer只有一个combineReducers的逻辑。

// import * as constants from './constants.js';
// 大型项目推荐将action的type字符串单独抽成一份constants文件，避免低级的文字错误。看个人需求
import {
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	DELETE_TODO_ITEM,
	INIT_LIST_ACTION
} from './actionTypes';
import { fromJS, List } from 'immutable';

interface actionType {
	type: string;
	value?: any;
}

// 对ts支持很差 这里不写any下面state.merge等方法直接无法使用
// formJS() toJS()是耗费性能的操作
// 读取性能较差
// 包体积60多k
// 自定义api较多
// 无法调试 console.log出来只有一个类型信息
const defaultState: any = fromJS({
	inputValue: '',
	list: ['1', '2', '3']
});

// 常规reducer导出的是一个纯函数 唯一输入 唯一输出 没有副作用
const reducer = (state = defaultState, action: actionType) => {
	switch (action.type) {
		case INIT_LIST_ACTION:
			return state.merge({
				list: action.value
			});

		case CHANGE_INPUT_VALUE:
			return state.merge({
				inputValue: action.value
			});

		case ADD_TODO_ITEM:
			return state.merge({
				inputValue: '',
				list: state.get('list').push(state.get('inputValue'))
			});

		case DELETE_TODO_ITEM:
			return state.merge({
				list: state.get('list').splice(action.value, 1)
			});

		// case DELETE_TODO_ITEM:
		//   return state.merge({
		//     comId: action.value.comId,
		//     currentUserId: action.value.currentUserId,
		//     currentUsername: action.value.currentUsername,

		//   });

		// case 'CHANGERESOURCEIDSLIST':
		//   return state.merge({
		//     accessibleResourceIdList: List(action.value.accessibleResourceIdList)
		//   });

		default:
			return state;
	}
};
export default reducer;
