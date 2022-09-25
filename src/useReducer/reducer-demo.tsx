/*
 * @Author: 王荣
 * @Date: 2022-09-24 20:16:38
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-24 20:18:20
 * @Description: 填写简介
 */

import { useReducer } from "react";

const initialState = [
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
];

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case "add":
      return [...state, payload];
    case "remove":
      return state.filter((item: any) => item.id !== payload.id);
    case "update":
      return state.map((item: any) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );
    case "clear":
      return [];
    default:
      throw new Error();
  }
};

const List = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("useReducer demo render", state);
  return (
    <>
      List: {JSON.stringify(state)}
      <button
        onClick={() =>
          dispatch({ type: "add", payload: { id: 3, name: "周五" } })
        }
      >
        add
      </button>
      <button onClick={() => dispatch({ type: "remove", payload: { id: 1 } })}>
        remove
      </button>
      <button
        onClick={() =>
          dispatch({ type: "update", payload: { id: 2, name: "李四-update" } })
        }
      >
        update
      </button>
      <button onClick={() => dispatch({ type: "clear" })}>clear</button>
    </>
  );
};

export default List;
