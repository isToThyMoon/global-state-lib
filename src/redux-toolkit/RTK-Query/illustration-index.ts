/*
 * @Author: tothymoon istothymoon@gmail.com
 * @Date: 2022-12-13 14:18:18
 * @LastEditors: tothymoon istothymoon@gmail.com
 * @LastEditTime: 2023-07-16 01:25:43
 * @FilePath: /global-state-lib/src/redux-toolkit/RTK-Query/illustration-index.ts
 * @Description: RTKquery 基础query用法
 */

// 注意带有react后缀为react专用，会自动导出一些react hook，钩子函数名字为useXxxQuery或useXxxMutation，方便我们在函数组件中使用api
// 如createApi()这个方法有两个版本，一个位于@reduxjs/toolkit/dist/query下，一个位于@reduxjs/toolkit/dist/query/react下
//（当然引入时候无需携带dist目录，node mudule中的package.json做了引入路径的转发）
// react目录下的为react hook专用，会自动把getPokemonByName这样的endpoint导出为useGetPokemonByNameQuery这样的自定义hook在函数组件中使用
// import { createApi } from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
// 要将RTKQuery缓存数据集成到redux数仓中，需要在redux的store配置中设置reducer，
// 和middleware
// export const rootReducer = {
//   // RTKQuery的Api对象的使用有两种方式，一种是直接使用，一种是作为store中的一个reducer使用。
//   [pokemonApi.reducerPath]: api.reducer,
// };
// export const store = configureStore({
//   reducer: rootReducer, //不用写conbine了 这是toolkit的简化之一 reducer可以接收一个多reducer配置对象
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
// });
export const pokemonApi = createApi({
  // 配置对象
  // 用来设置reducer的唯一标识，作为reducer的name，也主要用来在创建store时指定action的type属性，如果不指定默认为api
  reducerPath: "pokemonApi",
  // 用来设置发送请求的工具，RTKQuery提供了fetchBaseQuery作为查询工具，它对fetch进行了简单的封装，很方便，如果你不喜欢可以改用其他工具如axios
  // 简单封装过的fetch调用后会返回一个封装后的工具函数。需要一个配置对象作为参数，baseUrl表示Api请求的基本路径，指定后请求将会以该路径为基本路径
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  // Api对象封装了一类功能，比如学生的增删改查，我们会统一封装到一个对象中。一类功能中的每一个具体功能我们可以称它是一个端点。endpoints用来对请求中的端点进行配置。
  endpoints: (builder) => ({
    // endpoints是一个回调函数，收到一个build对象，使用build对象对点进行映射。回调函数的返回值是一个对象，Api对象中的所有端点都要在该对象中进行配置
    // 对象中属性名就是要实现的功能名，比如获取所有学生可以命名为getStudents，根据id获取学生可以命名为getStudentById。属性值要通过build对象创建，分两种情况：
    // 查询：build.query({})
    // 增删改：build.mutation({})

    // builder.query的ts参数，第一个时ResultType  第二个时QueryArg，RTKQuery通过复杂的类型体操实现了类型推导
    getPokemonByName: builder.query<any, string>({
      // builder.query也需要一个配置对象作为参数
      // query方法：返回一个子路径，这个子路径将会和baseUrl拼接为一个完整的请求路径 这是最基本的配置
      query: (name) => `pokemon/${name}`,
    }),

    mutateData: builder.mutation({
      query: () => ({ url: "/mutation", method: "post" }),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useMutateDataMutation } = pokemonApi;

// 在组件中通过hook请求并使用服务端缓存数据，竞态、缓存、refetch等等都被封装好了。
// 如果不想初次执行就自动获取数据，使用同时导出的useLazyGetPokemonByNameQuery，返回值和Mutation类似
// const { data, isFetching, isSuccess } = useGetPokemonByNameQuery()
// data – 最新返回的数据
// currentData – 当前的数据
// error – 错误信息
// isUninitialized – 如果为true则表示查询还没开始
// isLoading – 为true时，表示请求正在第一次加载
// isFetching 为true时，表示请求正在加载
// isSuccess 为true时，表示请求发送成功
// isError 为true时，表示请求有错误
// refetch 函数，用来重新加载数据

// 和query不一样，mutation在hook组件中不会自动触发，需要调用trigger function。
// const [trigger, {status, error, data }] = useMutateDataMutation();
// data - The data returned from the latest trigger response, if present. If subsequent triggers from the same hook instance are called, this will return undefined until the new data is received. Consider component level caching if the previous response data is required for a smooth transition to new data.
// error - The error result if present.
// isUninitialized - When true, indicates that the mutation has not been fired yet.
// isLoading - When true, indicates that the mutation has been fired and is awaiting a response.
// isSuccess - When true, indicates that the last mutation fired has data from a successful request.
// isError - When true, indicates that the last mutation fired resulted in an error state.
// reset - A method to reset the hook back to it's original state and remove the current result from the cache

// console.log('api', pokemonApi)
// {
//    "reducer"
//   "reducerPath": "pokemonApi",
//    "useGetPokemonByNameQuery"
//    "useLazyGetPokemonByNameQuery"
//    "useMutateDataMutation"
//    "usePrefetch"
//   "endpoints": {
//       "GetPokemonByName": {
//           "name": "GetPokemonByName"
//       },
//       "mutateData": {
//           "name": "mutateData"
//       }
//   },
//   "enhanceEndpoints"
//   "injectEndpoints"
//   "internalActions": {},
//   "middleware"
//   "util": {}
// }
