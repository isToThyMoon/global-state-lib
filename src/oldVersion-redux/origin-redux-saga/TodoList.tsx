/*
 * @Author: 王荣
 * @Date: 2022-09-26 16:19:38
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 23:29:31
 * @Description: 填写简介
 */
import React, { Component } from "react";
// import "antd/dist/antd.css";
import store from "./store/";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitList,
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
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    // 应用redux saga
    // const action = getInitList();
    // store.dispatch(action);
    // // axios.get('/list.json').then((res)=>{
    // // 	const data = res.data;
    // // 	const action = initListAction(data);
    // // 	store.dispatch(action);
    // // }).catch();
  }

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
