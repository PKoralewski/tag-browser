import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { QueryOptionsProps } from "./QueryOptionsProps"

export const stackOverflowApi = createApi({
	reducerPath: "stackOverflowApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.stackexchange.com/2.3" }),
	endpoints: (builder) => ({
		getTags: builder.query({
			query: (queryOptions: QueryOptionsProps) =>
				`tags?page=${queryOptions.page}&pagesize=${queryOptions.pageSize}&order=${queryOptions.sortDirection}&sort=${queryOptions.sortField}&site=stackoverflow`,
		}),
	}),
})

export const { useGetTagsQuery } = stackOverflowApi
