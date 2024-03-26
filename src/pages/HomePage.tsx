import { useSearchParams } from "react-router-dom"
import { Flex } from "@chakra-ui/layout"

import { useGetTagsQuery } from "../services/api/stackOverflow-api"
import TagTable from "../components/TagTable"
import Loader from "../components/Loader"

const HomePage = () => {
	const [searchParams] = useSearchParams()

	const { data, isLoading } = useGetTagsQuery({
		page: Number(searchParams.get("page")) || 1,
		pageSize: Number(searchParams.get("pagesize")) || 5,
		sortDirection: searchParams.get("order") || "desc",
		sortField: searchParams.get("sort") || "popular",
	})

	return (
		<Flex h='100vh' justifyContent={"center"} alignItems={"center"}>
			<Loader isLoading={isLoading}>
				<TagTable tags={data} w='800px' />
			</Loader>
		</Flex>
	)
}

export default HomePage
