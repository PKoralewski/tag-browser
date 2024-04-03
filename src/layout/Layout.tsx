import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const Layout = () => {
	return (
		<Box as='main'>
			<Outlet />
		</Box>
	)
}

export default Layout
