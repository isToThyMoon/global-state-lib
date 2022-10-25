/*
 * @Author: 王荣
 * @Date: 2022-09-26 23:37:09
 * @LastEditors: 王荣
 * @LastEditTime: 2022-10-25 22:41:45
 * @Description: 填写简介
 */
/*
 * @Author: 王荣
 * @Date: 2022-02-24 22:37:21
 * @LastEditors: 王荣
 * @LastEditTime: 2022-03-31 22:02:09
 * @Description: 填写简介
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodoListState {
  inputValue: string;
  list: string[];
}

const initialState: ITodoListState = {
  inputValue: "",
  list: ["0", "1", "2"],
};

//使用createSlice方法创建一个slice（其实就是子reducer）。每一个slice里面包含了reducer和actions，可以实现模块化的封装。所有的相关操作都独立在一个文件中完成。
// createSlice返回的对象有两个属性 actions 和reducer 对应旧版redux的两个概念
// aciton包含了本次更新操作的type和value 通过dispatch传递给store，告知本次更新需要如何更新数据
// reducer作为纯函数接收prevState和当前的action，根据store传来的本次操作action，对比aciton的type，依据action.value返回一个新state更新store数据
// 这里的actions相当于旧版模版代码中actionCreators的所有集合对象。
// reducer还是相当于一个子reducer
export const todoListSlice = createSlice({
  name: "todoListSlice", // 命名空间，在调用action的时候会默认的设置为action type的前缀 自动的把每一个action进行独立，解决了action的type出现同名的文件。在使用的时候默认会使用name/actionName
  initialState, //该切片维护的状态
  reducers: {
    //定义actionsCreators和reducer。由于内置了immutable插件immer，可以直接使用赋值的方式进行数据的改变，不需要每一次都返回一个新的state数据。
    // 这里的属性函数会自动的导出为actionsCreators，在组件中可以直接通过dispatch进行触发
    // 被导出的action类型 todoListSlice.actions.changeInputValue：
    //   changeInputValue(payload: {
    //     inputValue: string;
    // }): {
    //     payload: {
    //         inputValue: string;
    //     };
    //     type: string;
    // }
    // 被dispatch调用时，执行这个changeInputValue方法 创造了一个aciton对象 所以todoListSlice.actions.changeInputValue就是一个actionCreator 旧版redux的工作量都被省略了
    changeInputValue(state, action: PayloadAction<{ inputValue: string }>) {
      // action属性推导定义为{payload:{ inputValue: string }, type: string}
      // 内置了immer 采用mutable的方式更新immutable数据
      state.inputValue = action.payload.inputValue;
    },
    //action:  {type: 'todoListSlice/addItem', payload: undefined}
    addItem(state, action: PayloadAction) {
      console.log(state.inputValue);
      //{type: "todoListSlice/addItem",payload:undefined}
      console.log("action", action);
      state.list.push(state.inputValue);
      state.inputValue = "";
    },

    deleteItem(state, action: PayloadAction<{ deleteIndex: number }>) {
      state.list.splice(action.payload.deleteIndex, 1);
    },
  },
  // 这里类比之前原始的rducers 但是不是之前的纯函数（传入actions 比较action.type 返回新的State）；
  // toolkit提供更加直观的方式 会通过immer.js(不可变数据)这个库转化为原reducer的写法
});

export default todoListSlice.reducer; // 默认导出reducer 在store中组合成总的reducer

export const todoListActions = todoListSlice.actions; //和原reducer的action概念是一样的 但它的类型已经变成上面reducer里的一个个的方法 导出action

// 内置了thunk插件，可以直接处理thunk函数
// dispatch(asyncChange(123)); dispatch会直接执行asyncChange()返回的匿名函数，
// 匿名函数接收dispatch，getState这两个参数，dispatch为它提供了在异步操作完成后继续派发状态更新的能力，
// getState提供了在函数执行中获得当前数仓state状态的能力
export const asyncChange = (payload) => (dispatch, getState) => {
  // console.log("beforestate", getState());
  // dispatch(todoListActions.deleteItem(payload)); // dispatch(increment({ step: 2 })); // dispatch派发action
  // // 注意这里dispatch是同步更新的，先后的beforestate，state打印结果不同，dispatch之后getState()得到的已经是更新后的状态
  // console.log("state", getState());

  // dispatch直接执行的函数内部可以进行异步操作，可以在promise resolve或者reject之后继续dispatch派发aciton
  return Promise.resolve(getState().Project.count);
};

// Later, dispatch the thunk as needed in the app
// dispatch(asyncChange(123))

// import produce from "@reduxjs/toolkit/node_modules/immer";
// const baseState = [
//     {
//         todo: 'learn ts',
//         done: true
//     },
//     {
//         todo: 'try immer',
//         done: false
//     },
// ]

// const nextState = produce(baseState, draftState => {
//     draftState.push({ todo: 'Tweet about it', done: false})
//     draftState[1].done = true
// })
