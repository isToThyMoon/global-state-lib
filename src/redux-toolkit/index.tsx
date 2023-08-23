/*
 * @Author: 王荣
 * @Date: 2022-09-26 23:30:07
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 01:00:00
 * @Description: 填写简介
 */

import { Provider } from 'react-redux';
import { store } from './store';
import TodoList from './app/todolist/TodoList';

const ReduxToolkitDemo = () => {
	console.log('ReduxToolkitDemo rerender');
	return (
		<Provider store={store}>
			<TodoList></TodoList>
		</Provider>
	);
};

export default ReduxToolkitDemo;
