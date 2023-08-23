/*
 * @Author: 王荣
 * @Date: 2022-09-27 20:18:23
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 20:51:42
 * @Description: 填写简介
 */
import React from 'react';
import { Provider } from 'jotai';
import JotaiImmerDemo from './jotai-immer-demo';
import JotaiImmerConsumer from './jotai-immer-consumer';

function JotaiDemo() {
	console.log('JotaiDemo rerender');
	return (
		<div>
			<Provider>
				<JotaiImmerDemo></JotaiImmerDemo>
				<JotaiImmerConsumer></JotaiImmerConsumer>
			</Provider>
		</div>
	);
}

export default JotaiDemo;
