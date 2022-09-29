/*
 * @Author: 王荣
 * @Date: 2022-09-26 17:24:58
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-29 00:09:28
 * @Description: 填写简介
 */

//大型项目，复杂的组件层级，单单在一个store里用一个reducer文件来处理action显得非常臃肿了，将reducer按和组件层级拆分一样的逻辑将reducer拆分到各个组件中，单独负责该组件的action派发处理。总store里的reducer只有一个combineReducers的逻辑。

// import * as constants from './constants.js';
// 大型项目推荐将action的type字符串单独抽成一份constants文件，避免低级的文字错误。看个人需求
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
} from "./actionTypes";
import { produce } from "immer";

interface actionType {
  type: string;
  value?: any;
}

const defaultState: any = {
  inputValue: "",
  list: ["1", "2", "3"],
};

// 常规reducer导出的是一个纯函数 唯一输入 唯一输出 没有副作用
// const reducer = (state = defaultState, action: actionType) => {
//   switch (action.type) {
//     case INIT_LIST_ACTION:
//       return {
//         ...state,
//         list: action.value,
//       };

//     case CHANGE_INPUT_VALUE:
//       return {
//         ...state,
//         inputValue: action.value,
//       };

//     case ADD_TODO_ITEM:
//       return {
//         ...state,
//         inputValue: "",
//         list: state.list.concat([state.inputValue]),
//       };

//     case DELETE_TODO_ITEM:
//       const newState = JSON.parse(JSON.stringify(state));

//       newState.list.splice(action.value, 1);

//       return newState;

//     // case DELETE_TODO_ITEM:
//     //   return state.merge({
//     //     comId: action.value.comId,
//     //     currentUserId: action.value.currentUserId,
//     //     currentUsername: action.value.currentUsername,

//     //   });

//     // case 'CHANGERESOURCEIDSLIST':
//     //   return state.merge({
//     //     accessibleResourceIdList: List(action.value.accessibleResourceIdList)
//     //   });

//     default:
//       return state;
//   }
// };

// const reducer = (state = defaultState, action: actionType) => {
//   return produce(state, (draftState)=>{
//     switch (action.type) {
//       case INIT_LIST_ACTION:
//         draftState.list = action.value
//         break;
//       case CHANGE_INPUT_VALUE:
//         draftState.inputValue = action.value
//         break;
//       case ADD_TODO_ITEM:
//         draftState.list.push(state.inputValue)
//         break;
//       case DELETE_TODO_ITEM:
//         draftState.list.splice(action.value, 1);
//         break;
//       default:
//         return draftState;
//     }
//   })
// };

const reducer = produce((draftState = defaultState, action: actionType) => {
  switch (action.type) {
    case INIT_LIST_ACTION:
      draftState.list = action.value;
      break;
    case CHANGE_INPUT_VALUE:
      draftState.inputValue = action.value;
      break;
    case ADD_TODO_ITEM:
      draftState.list.push(draftState.inputValue);
      draftState.inputValue = "";
      break;
    case DELETE_TODO_ITEM:
      draftState.list.splice(action.value, 1);
      break;
    default:
      return draftState;
  }
});

export default reducer;

// class Immer {

//   //...

//   produce = (base: any, recipe?: any, patchListener?: any) => {
//     // curried invocation

//     if (typeof base === "function" && typeof recipe !== "function") {

//       const defaultBase = recipe;
//       recipe = base;

//       const self = this;
//       return function curriedProduce(this: any,base = defaultBase, ...args: any[]) {
//         return self.produce(base, (draft) => recipe.call(this, draft, ...args))
//       }

//     }
//   }

// }

// const immer = new Immer()

// export const produce = immer.produce
