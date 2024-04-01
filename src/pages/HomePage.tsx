import { useSearchParams } from "react-router-dom"
import { Flex } from "@chakra-ui/layout"

import { useGetTagsQuery } from "../services/api/stackOverflow-api"
import TagTable from "../components/TagTable"
import Loader from "../components/Loader"
import Pagination from "../components/Pagination"

const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	// TODO: Create default tag various

	const { data, isLoading } = useGetTagsQuery({
		page: Number(searchParams.get("page")) || 1,
		pageSize: Number(searchParams.get("pagesize")) || 5,
		sortDirection: searchParams.get("order") || "desc",
		sortField: searchParams.get("sort") || "popular",
	})

	const updatePageParam = (currentPage: number) => {
		setSearchParams({ page: currentPage.toString() })
	}

	return (
		<Flex h='100vh' flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={10}>
			<Loader isLoading={isLoading}>
				<TagTable tags={data} w='800px' />
				<Pagination page={1} totalPages={5} onPageChange={updatePageParam} />
			</Loader>
		</Flex>
	)
}

export default HomePage
