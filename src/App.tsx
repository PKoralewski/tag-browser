import { Routes, Route, BrowserRouter } from "react-router-dom"

import HomePage from "./pages/HomePage"

export const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='*' element={<HomePage />} />
		</Routes>
	</BrowserRouter>
)
