/*
 * @Author: 王荣
 * @Date: 2022-09-26 20:41:28
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 23:30:12
 * @Description: 填写简介
 */
import React, { Component } from "react";
// import "antd/dist/antd.css";

import TodoListUI from "./TodoListUI";

import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from "./store/actionCreators";
// redux
import { AnyAction } from "redux";
import { actionCreators } from "./store";
import { connect } from "react-redux";
// ts redux
import { ThunkDispatch } from "redux-thunk";

interface TodoListProps {
  inputValue: string;
  list: number[];
  dispatchInputChangeValue: (inputValue: string) => void;
  dispatchAddItemAction: () => void;
  dispatchDeleteItemAction: (index: number) => void;
}
interface TodoListState {}

class TodoList extends Component<TodoListProps, TodoListState> {
  // constructor(props: TodoListProps) {
  //   super(props);
  //   console.log(props);
  // }

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

  handleInputChange = (e) => {
    this.props.dispatchInputChangeValue(e.target.value);
  };

  handleBtnClick = () => {
    this.props.dispatchAddItemAction();
  };

  handleItemDelete = (index) => {
    this.props.dispatchDeleteItemAction(index);
  };

  render() {
    return (
      <TodoListUI
        inputValue={this.props.inputValue}
        list={this.props.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
}

// store数据有更新时，connect高阶组件自动更新组件，重新渲染组件
const mapStateToProps = (state: any) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    dispatchInputChangeValue(inputValue) {
      dispatch(getInputChangeAction(inputValue));
    },

    dispatchAddItemAction() {
      dispatch(getAddItemAction());
    },

    dispatchDeleteItemAction(index) {
      dispatch(getDeleteItemAction(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
