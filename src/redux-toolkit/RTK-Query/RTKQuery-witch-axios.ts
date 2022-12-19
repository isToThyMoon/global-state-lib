// import { createApi } from '@reduxjs/toolkit/query'
// 注意带有react后缀为react专用，会自动导出一些react hook
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  // reducerPath配置在 redux中作为缓存服务器状态的reducer的名字
  // 通过react定制版RTK query来创建的createApi，
  // 需要在redux的store配置中设置reducer，
  // 和middleware
  // export const store = configureStore({
  //   reducer: rootReducer, //不用写conbine了 这是toolkit的简化之一 reducer可以接收一个多reducer配置对象
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  // });
  reducerPath: "rtkApi",
  baseQuery: axiosBaseQuery({
    baseUrl:
      "https://raw.githubusercontent.com/ayrikiya/pic-store/main/note/37-15.png",
  }),
  endpoints(builder) {
    return {
      getPageMes: builder.query<{ name: string }, void>({
        query: () => ({ url: "", method: "get" }),
      }),
      mutation: builder.mutation({
        query: () => ({ url: "/mutation", method: "post" }),
      }),
    };
  },
});

export const { useGetPageMesQuery } = api;
