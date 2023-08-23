/*
 * @Author: tothymoon istothymoon@gmail.com
 * @Date: 2022-12-13 15:20:10
 * @LastEditors: tothymoon istothymoon@gmail.com
 * @LastEditTime: 2023-07-16 01:26:11
 * @FilePath: /global-state-lib/src/redux-toolkit/RTK-Query/RTKQuery-witch-axios.ts
 * @Description:
 */

// import { createApi } from '@reduxjs/toolkit/query'
// import type { BaseQueryFn } from '@reduxjs/toolkit/query'
// 注意带有react后缀为react专用，会自动导出一些react hook
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

type IaxiosBaseQuery = ({ baseUrl }: { baseUrl: string }) => BaseQueryFn<
	{
		url: string;
		method: AxiosRequestConfig['method'];
		data?: AxiosRequestConfig['data'];
		params?: AxiosRequestConfig['params'];
	},
	unknown,
	unknown
>;

const axiosBaseQuery: IaxiosBaseQuery =
	({ baseUrl } = { baseUrl: '' }) =>
	async ({ url, method, data, params }) => {
		try {
			const result = await axios({ url: baseUrl + url, method, data, params });
			return { data: result.data };
		} catch (axiosError) {
			let err = axiosError as AxiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message
				}
			};
		}
	};

export const api = createApi({
	reducerPath: 'rtkApi',
	baseQuery: axiosBaseQuery({
		baseUrl:
			'https://raw.githubusercontent.com/ayrikiya/pic-store/main/note/37-15.png'
	}),
	endpoints(builder) {
		return {
			getPageMes: builder.query<any, string>({
				query: (name) => ({ url: '?name=' + name, method: 'get' })
			}),
			mutation: builder.mutation({
				query: () => ({ url: '/mutation', method: 'post' })
			})
		};
	}
});

console.log('api', api);

export const { useGetPageMesQuery } = api;
