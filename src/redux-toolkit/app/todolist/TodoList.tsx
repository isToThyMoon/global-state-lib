/*
 * @Author: 王荣
 * @Date: 2022-09-26 20:41:28
 * @LastEditors: 王荣
 * @LastEditTime: 2022-10-25 22:22:23
 * @Description: 填写简介
 */
import React, { Component, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { todoListActions, asyncChange } from "./slice/todolist-slice";
// import "antd/dist/antd.css";

import TodoListUI from "./TodoListUI";

import { useGetPageMesQuery } from "../../RTK-Query/RTKQuery-witch-axios";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = (props) => {
  // 不需要再通过高阶组件connect的方法来连接redux的store和组件的属性（props） 直接使用hook引入 AppDispatch类型为thunkDispatch ts兼容非常好
  const dispatch = useDispatch<AppDispatch>();
  //读总状态树里的状态 是总的状态树，接受一个函数去选择返回哪一个子store的数据
  const { inputValue, list } = useSelector(
    (state: RootState) => state.TodoList
  );
  console.log("请求");
  // const query = useGetPageMesQuery();
  // const { data } = useGetPageMesQuery();

  // console.log('query',query);
  useEffect(() => {
    console.log("首次");
  }, []);
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
  console.log("TodoList rerender");
  return (
    <Fragment>
      <TodoListUI
        inputValue={inputValue}
        list={list}
        handleInputChange={handleInputChange}
        handleBtnClick={handleBtnClick}
        handleItemDelete={handleItemDelete}
      />
      <Foo></Foo>
    </Fragment>
  );
};

const Foo: React.FC<TodoListProps> = (props) => {
  console.log("Foo rerender");
  return <div>daad</div>;
};

export default TodoList;
