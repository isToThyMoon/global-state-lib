/*
 * @Author: 王荣
 * @Date: 2022-09-26 16:19:45
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 22:38:48
 * @Description: 填写简介
 */
import React from 'react';
import { Input, Button, List } from 'antd';

const Item = List.Item;

interface TodoListUIProps {
	inputValue: string;
	list: number[];
	handleInputChange: (e: any) => void;
	handleBtnClick: () => void;
	handleItemDelete: (index: any) => void;
}

const TodoListUI: React.FC<TodoListUIProps> = (props) => {
	return (
		<div>
			<span className="split-line">----------origin-redux-saga----------</span>
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

// const TodoListUI: React.FC<TodoListUIProps> = (props) => {

//     return (
//       	<div style = {{marginTop: '10px', marginLeft: '10px'}}>
// 				<div>

// 					<Input
// 						value = {props.inputValue}
// 						placeholder = "todo info"
// 						style = {{width: '300px', marginRight: '5px'}}
// 						onChange = {props.handleInputChange}
// 					/>

// 					<Button
// 						type="primary"
// 						onClick = {props.handleBtnClick}
// 					>
// 					提交
// 					</Button>

// 				</div>

// 				<List
// 					style = {{marginTop: '10px', width: '370px'}}
// 		      		bordered
// 				    dataSource={props.list}
// 				    renderItem={(item, index) => (
// 		      			<List.Item
// 		      			 	onClick = {()=>{props.handleItemDelete(index)}}
// 		      			>
// 		      				{index}:{item}
// 		      			</List.Item>
// 		      		)}
//     			/>
// 		</div>
//     )
// }

export default TodoListUI;
