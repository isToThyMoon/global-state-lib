/*
 * @Author: 王荣
 * @Date: 2022-09-21 00:03:11
 * @LastEditors: tothymoon-mac istothymoon@gmail.com
 * @LastEditTime: 2023-08-30 14:56:25
 * @Description: 填写简介
 */
import React, { useLayoutEffect } from 'react';
import './App.scss';
// import "./fonts/index.scss"
import ReducerDemo from './useReducer/TodoList';
import ReduxDemo from './oldVersion-redux';
import ReduxToolkitDemo from './redux-toolkit';
import JotaiDemo from './jotai（before1.8.4）';
import { Input, Button, List } from 'antd';
// import 'ayri-ui/es/button/style'
import AntdTable from './antdDemo';
import { Tooltip } from 'antd';

function App() {
	console.log('app rerender');
	const [count, setCount] = React.useState(0);

	// const popRef = React.useRef<HTMLDivElement>(null);
	// const targetRef = React.useRef<HTMLDivElement>(null);
	//
	// const [popStyle, setPopStyle] = React.useState({});
	//
	// const handleResize = () => {
	// 	const rect = targetRef.current?.getBoundingClientRect() as DOMRect;
	//
	// 	const popRect = popRef.current?.getBoundingClientRect() as DOMRect;
	//
	// 	setPopStyle({
	// 		left: rect?.x + rect?.width / 2 - popRect.width / 2,
	// 		top: rect?.y - popRect?.height - 5
	// 	});
	// };
	//
	// useLayoutEffect(() => {
	// 	handleResize();
	//
	// 	const resizeObserver = new ResizeObserver((entries) => {
	// 		handleResize();
	// 		console.log('resize');
	// 	});
	// 	resizeObserver.observe(targetRef.current as HTMLDivElement);
	// }, []);

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
			{/*<AntdTable></AntdTable>*/}
			{/*<div className="demo-wrap" style={{ marginBottom: '100px' }}>*/}
			{/*	<div className="container" ref={targetRef}></div>*/}
			{/*	<div className="tooltip-wrap" ref={popRef} style={popStyle}></div>*/}
			{/*</div>*/}

			{/*<Tooltip title="prompt text" open>*/}
			{/*	<span>Tooltip will show on mouse enter.</span>*/}
			{/*</Tooltip>*/}
		</div>
	);
}

export default App;
