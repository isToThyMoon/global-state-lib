/*
 * @Author: 王荣
 * @Date: 2022-09-26 11:51:04
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 23:29:59
 * @Description: 填写简介
 */
import React, { Component } from "react";
// import "antd/dist/antd.css";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList,
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

interface TodoListProps {}
interface TodoListState {
  inputValue: string;
  list: number[];
}

class TodoList extends Component<TodoListProps, TodoListState> {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // 最原始的方式，发布订阅模式，订阅store数据的更新，有更新时触发回调函数
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    // 首次挂载可以进行axios请求数据 执行store数据修改
    // redux thunk的作用就是dispatch()的参数可以是一个函数（并执行它），这个函数以dispatch为入参，开发者可以在该函数内部执行一些异步逻辑后继续dispatch。
    // const action = getTodoList();
    // store.dispatch(action);
    // // export const getTodoList = () => {
    // //   return (dispatch) => {
    // //     axios.get('/list.json').then((res) => {
    // //       const data = res.data;
    // //       const action = initListAction(data);
    // //       dispatch(action);
    // //     })
    // //   }
    // // };
  }

  // store数据有更新时，更新组件state，重新渲染组件
  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    console.log(action);
    store.dispatch(action);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
}

export default TodoList;
