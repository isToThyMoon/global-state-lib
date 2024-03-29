/*
 * @Author: 王荣
 * @Date: 2022-09-26 11:51:13
 * @LastEditors: 王荣
 * @LastEditTime: 2022-10-26 09:32:18
 * @Description: 填写简介
 */

import React, { useContext } from 'react';
import { TodoContext } from './TodoList';
import { Input, Button, List } from 'antd';

const Item = List.Item;

interface TodoListUIProps {
	inputValue: string;
	list: string[];
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleBtnClick: () => void;
	handleItemDelete: (index: any) => void;
}

const TodoListUI: React.FC<TodoListUIProps> = (props) => {
	const dispatch = useContext(TodoContext);

	return (
		<div>
			<span className="split-line">
				----------useReducer&useContext----------
			</span>
			<div>
				<Button
					type="primary"
					onClick={() => {
						dispatch({ type: 'remove', payload: 0 });
					}}
				>
					通过context删除index 0 的todo
				</Button>
			</div>
			<div className="todolist-wrap">
				<div>
					<Input
						value={props.inputValue}
						placeholder="todo info"
						style={{ width: '300px', marginRight: '5px' }}
						onChange={props.handleInputChange}
					/>

					<Button type="primary" onClick={props.handleBtnClick}>
						提交
					</Button>
				</div>

				<List
					style={{ marginTop: '10px', width: '370px' }}
					bordered
					dataSource={props.list}
					renderItem={(item, index) => (
						<Item
							onClick={(e) => {
								props.handleItemDelete(index);
							}}
						>
							{index}:{item}
						</Item>
					)}
				/>
			</div>
		</div>
	);
};

export default TodoListUI;
