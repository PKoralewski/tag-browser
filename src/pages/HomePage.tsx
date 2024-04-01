import { useSearchParams } from "react-router-dom"
import { Flex } from "@chakra-ui/layout"
import { useState } from "react"

import { useGetTagsQuery } from "../services/api/stackOverflow-api"
import TagTable from "../components/TagTable"
import Loader from "../components/Loader"
import Pagination from "../components/Pagination"

const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [totalPages] = useState(25)
	const [defaultTagData] = useState({
		page: 1,
		pageSize: 5,
		sortDirection: "desc",
		sortField: "popular",
	})

	const tagData = {
		page: Number(searchParams.get("page")) || defaultTagData.page,
		pageSize: Number(searchParams.get("pagesize")) || defaultTagData.pageSize,
		sortDirection: searchParams.get("order") || defaultTagData.sortDirection,
		sortField: searchParams.get("sort") || defaultTagData.sortField,
	}

	const { data, isFetching } = useGetTagsQuery(tagData)

	const updatePageParam = (currentPage: number) => {
		setSearchParams({ page: currentPage.toString() })
	}

	return (
		<Flex h='100vh' flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={10}>
			<Loader isLoading={isFetching}>
				<TagTable tags={data} w='800px' />
				<Pagination page={tagData.page} totalPages={totalPages} onPageChange={updatePageParam} />
			</Loader>
		</Flex>
	)
}

export default HomePage
