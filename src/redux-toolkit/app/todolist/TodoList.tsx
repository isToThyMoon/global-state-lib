/*
 * @Author: 王荣
 * @Date: 2022-09-26 20:41:28
 * @LastEditors: tothymoon istothymoon@gmail.com
 * @LastEditTime: 2023-07-17 23:54:55
 * @Description: 填写简介
 */
import React, {
	Component,
	Dispatch,
	SetStateAction,
	Fragment,
	useEffect,
	useRef,
	useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { todoListActions, asyncChange } from './slice/todolist-slice';
// import "antd/dist/antd.css";

import TodoListUI from './TodoListUI';

import { api, useGetPageMesQuery } from '../../RTK-Query/RTKQuery-witch-axios';

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = (props) => {
	console.log('TodoList rerender');
	// 不需要再通过高阶组件connect的方法来连接redux的store和组件的属性（props） 直接使用hook引入 AppDispatch类型为thunkDispatch ts兼容非常好
	const dispatch = useDispatch<AppDispatch>();
	// 读总状态树里的状态 是总的状态树，接受一个函数去选择返回哪一个子store的数据
	// 注意一个特殊的点，selector可以摘取一个分store：TodoList，也可以更详细地摘取分store中的具体数据项，也可以进行derived计算
	// 区别在于，When an action is dispatched, useSelector() will do a reference comparison of the previous selector result value and the current result value.
	// If they are different, the component will be forced to re-render.
	// 所以当你useSelector摘取粒度过大时，可能会导致你不想的rerender
	// 例如TodoList中有两个全局状态list和inputValue，当inputValue变化时下面只摘取了list的组件并不会重新渲染
	// 但如果你摘取了整个TodoList，inputValue变化会导致整个TodoList这个状态变化，会导致该组件不必要的rerender
	// 体会这两种写法的区别
	const list = useSelector((state: RootState) => state.TodoList.list);
	const inputValue = useSelector(
		(state: RootState) => state.TodoList.inputValue
	);
	// const { list, inputValue } = useSelector((state: RootState) => state.TodoList);

	// console.log("请求");
	// const query = useGetPageMesQuery();
	const [getPageMesParams, reFetchGetPageMes] = useState('dada');
	// const getPageMesParams = useRef('dada')
	// const reFetchGetPageMes = (name)=>{ getPageMesParams.current = name }
	const { data, isLoading, isFetching, isSuccess, refetch } =
		useGetPageMesQuery(getPageMesParams);
	// const { refetch } = api.endpoints.getPageMes.useQuerySubscription('dada');
	// console.log('isLoading',isLoading);
	// console.log('isFetching',isFetching);
	// console.log('isSuccess',isSuccess);

	const handleInputChange = (e) => {
		dispatch(todoListActions.changeInputValue({ inputValue: e.target.value }));
	};

	const handleBtnClick = () => {
		dispatch(todoListActions.addItem());
		// dispatch(asyncChange(0));z
	};

	const handleItemDelete = (index) => {
		dispatch(todoListActions.deleteItem(index));
	};
	return (
		<Fragment>
			<TodoListUI
				inputValue={inputValue}
				list={list}
				handleInputChange={handleInputChange}
				handleBtnClick={handleBtnClick}
				handleItemDelete={handleItemDelete}
			/>
			<Foo
				inputValue={inputValue}
				refetch={refetch}
				reFetchGetPageMes={reFetchGetPageMes}
			></Foo>
		</Fragment>
	);
};

const Foo: React.FC<{
	inputValue?: string;
	refetch?: () => void;
	reFetchGetPageMes?: Dispatch<SetStateAction<string>>;
	children?: React.ReactNode;
}> = (props) => {
	console.log('Foo rerender');
	const dispatch = useDispatch<AppDispatch>();
	const { inputValue } = useSelector((state: RootState) => {
		return state.TodoList;
	});

	return (
		<>
			<div
				onClick={() => {
					props?.reFetchGetPageMes?.(props?.inputValue as string);
					// props?.refetch?.()
					// dispatch(todoListActions.changeInputValue({ inputValue: 'didi' }));
				}}
			>
				dada
			</div>
			<div>{inputValue}</div>
		</>
	);
};

export default TodoList;
