/*
 * @Author: 王荣
 * @Date: 2022-09-21 00:03:11
 * @LastEditors: tothymoon-mac istothymoon@gmail.com
 * @LastEditTime: 2023-08-27 00:47:13
 * @Description: 填写简介
 */
import React from 'react';
import './App.scss';
// import "./fonts/index.scss"
import ReducerDemo from './useReducer/TodoList';
import ReduxDemo from './oldVersion-redux';
import ReduxToolkitDemo from './redux-toolkit';
import JotaiDemo from './jotai（before1.8.4）';
import { Input, Button, List } from 'antd';
// import 'ayri-ui/es/button/style'

function App() {
	console.log('app rerender');
	const [count, setCount] = React.useState(0);

	return (
		<div className="App">
			<div>{count}</div>
			<Button
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				change count
			</Button>
			{/* <div style={{fontFamily: 'micon'}}>&#xe000;</div> */}

			{/* <ReducerDemo></ReducerDemo>

      <ReduxDemo></ReduxDemo> */}

			<ReduxToolkitDemo></ReduxToolkitDemo>
			{/*<img*/}
			{/*	id={'imgT'}*/}
			{/*	width={100}*/}
			{/*	height={100}*/}
			{/*	alt=""*/}
			{/*	src="https://pic.52112.com/180713/JPG-180713_971/IEJfum1Akb_small.jpg"*/}
			{/*/>*/}
			{/* <JotaiDemo></JotaiDemo> */}
		</div>
	);
}

export default App;
