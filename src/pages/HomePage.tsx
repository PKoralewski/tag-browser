import { Box } from "@chakra-ui/react"
import { useGetTagsQuery } from "../services/api/stackOverflow-api"
import { useSearchParams } from "react-router-dom"

const HomePage = () => {
	const [searchParams] = useSearchParams()
	console.log(searchParams.get("page"))
	const { data } = useGetTagsQuery({
		page: Number(searchParams.get("page")) || 1,
		pageSize: Number(searchParams.get("pagesize")) || 5,
		sortDirection: searchParams.get("order") || "desc",
		sortField: searchParams.get("sort") || "popular",
	})

	console.log(data)

	return <Box>Home Page</Box>
}

export default HomePage
