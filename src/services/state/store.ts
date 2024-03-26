import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { stackOverflowApi } from "../api/stackOverflow-api"

export const store = configureStore({
	reducer: {
		[stackOverflowApi.reducerPath]: stackOverflowApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stackOverflowApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
