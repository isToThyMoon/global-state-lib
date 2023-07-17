/*
 * @Author: 王荣
 * @Date: 2022-02-24 22:31:06
 * @LastEditors: tothymoon istothymoon@gmail.com
 * @LastEditTime: 2023-07-15 22:28:01
 * @Description: 填写简介
 */

import { configureStore } from "@reduxjs/toolkit";
import projectSliceReducer from "../app/project/slice/project-slice";
import todoListSliceReducer from "../app/todolist/slice/todolist-slice";
import { api } from "../RTK-Query/RTKQuery-witch-axios";

export const rootReducer = {
  Project: projectSliceReducer,
  TodoList: todoListSliceReducer,
  // RTKQuery的Api对象的使用有两种方式，一种是直接使用，一种是作为store中的一个reducer使用。
  [api.reducerPath]: api.reducer,
};

export const store = configureStore({
  reducer: rootReducer, //不用写conbine了 这是toolkit的简化之一 reducer可以接收一个多reducer配置对象
  // 在redux中集成RTKQuery的数据，需要middleware中注册该api对象的中间件，这个中间件已自动生成了我们直接引入即可，中间件用来处理Api的缓存
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
