/*
 * @Author: 王荣
 * @Date: 2022-09-26 20:41:28
 * @LastEditors: 王荣
 * @LastEditTime: 2022-10-26 09:32:30
 * @Description: 填写简介
 */
import React, { useReducer, useState } from 'react';

import TodoListUI from './TodoListUI';

const initialState = ['0', '1', '2'];

const reducer = (state: any, { type, payload }: any) => {
	switch (type) {
		case 'add':
			return state.concat([payload]);
		case 'remove':
			return state.filter((item: any, index) => index !== payload);
		default:
			throw new Error();
	}
};

export const TodoContext = React.createContext<any>(null);
interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = (props) => {
	const [inputValue, setInputValue] = useState('');
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleBtnClick = () => {
		console.log(inputValue);
		dispatch({ type: 'add', payload: inputValue });
		setInputValue('');
	};

	const handleItemDelete = (index) => {
		dispatch({ type: 'remove', payload: index });
	};

	return (
		<TodoContext.Provider value={dispatch}>
			<TodoListUI
				inputValue={inputValue}
				list={state}
				handleInputChange={handleInputChange}
				handleBtnClick={handleBtnClick}
				handleItemDelete={handleItemDelete}
			/>
		</TodoContext.Provider>
	);
};

export default TodoList;
