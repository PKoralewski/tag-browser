import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IQueryOptions } from "../../pages/QueryOptions"

export const stackOverflowApi = createApi({
	reducerPath: "stackOverflowApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.stackexchange.com/2.3/tags?" }),
	endpoints: (builder) => ({
		getTags: builder.query({
			query: (queryOptions: IQueryOptions) =>
				`page=${queryOptions.page}&pagesize=${queryOptions.pageSize}&order=${queryOptions.sortDirection}&sort=${queryOptions.sortField}&site=stackoverflow`,
		}),
	}),
})

export const { useGetTagsQuery } = stackOverflowApi
