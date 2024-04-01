import { useSearchParams } from "react-router-dom"
import { Flex } from "@chakra-ui/layout"
import { useState } from "react"

import { useGetTagsQuery } from "../services/api/stackOverflow-api"
import TagTable from "../components/TagTable"
import Loader from "../components/Loader"
import Pagination from "../components/Pagination"
import TableSizer from "../components/TableSizer"
import SortSelectField from "../components/SortSelectField"

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

	const getParamsObject = () => Object.fromEntries(searchParams)

	const updatePageParam = (currentPage: number) => {
		setSearchParams({ ...getParamsObject(), page: currentPage.toString() })
	}

	const updatePageSizeParam = (size: string) => {
		setSearchParams({ ...getParamsObject(), pagesize: size })
	}

	const updateSortFieldParam = (field: string) => {
		setSearchParams({ ...getParamsObject(), sort: field })
	}

	return (
		<Flex h='100vh' flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={10}>
			<TableSizer tableSize={tagData.pageSize} minValue={1} maxValue={100} onSizeChange={updatePageSizeParam} />
			<SortSelectField onFieldChange={updateSortFieldParam} />
			<Loader isLoading={isFetching}>
				<TagTable tags={data} w='800px' />
				<Pagination page={tagData.page} totalPages={totalPages} onPageChange={updatePageParam} />
			</Loader>
		</Flex>
	)
}

export default HomePage
