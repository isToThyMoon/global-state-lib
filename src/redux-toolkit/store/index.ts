/*
 * @Author: 王荣
 * @Date: 2022-02-24 22:31:06
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 00:37:53
 * @Description: 填写简介
 */

import { configureStore } from "@reduxjs/toolkit";
import projectSliceReducer from "../app/project/slice/project-slice";
import todoListSliceReducer from "../app/todolist/slice/todolist-slice";
import { api } from "../RTK-Query/RTKQuery-witch-axios";

export const rootReducer = {
  Project: projectSliceReducer,
  TodoList: todoListSliceReducer,
  [api.reducerPath]: api.reducer,
};

export const store = configureStore({
  reducer: rootReducer, //不用写conbine了 这是toolkit的简化之一 reducer可以接收一个多reducer配置对象
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
