import { useSearchParams } from "react-router-dom"
import { Divider, Flex } from "@chakra-ui/layout"
import { useState } from "react"

import { useGetTagsQuery } from "../services/api/stackOverflow-api"
import TagTable from "../components/TagTable"
import Loader from "../components/Loader"
import Pagination from "../components/Pagination"
import TableSizer from "../components/TableSizer"
import SortSelectField from "../components/SortSelectField"
import SortSelectOrder from "../components/SortSelectOrder"

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

	const updateSortDirectionParam = (orderDirection: string) => {
		setSearchParams({ ...getParamsObject(), order: orderDirection })
	}

	return (
		<Flex
			h='100vh'
			minH='400px'
			w='100%'
			flexDirection={"column"}
			p={[4, 6, 8, 10]}
			alignItems={"center"}
			bgColor={"blue.700"}
			color='#FFF'
			gap={["30px", "40px", "50px", "60px"]}
		>
			<Flex w='100%' alignItems={"center"} gap={5} flexDirection={"column"}>
				<Flex gap={[3, 4, 6, 10]} flexWrap={"wrap"}>
					<TableSizer
						tableSize={tagData.pageSize}
						minValue={1}
						maxValue={100}
						onSizeChange={updatePageSizeParam}
					/>
					<SortSelectField onFieldChange={updateSortFieldParam} />
					<SortSelectOrder onOrderChange={updateSortDirectionParam} />
				</Flex>
				<Divider borderColor={"#FFF"} />
			</Flex>
			<Loader isLoading={isFetching}>
				<Flex
					flexDirection={"column"}
					h='100%'
					justifyContent={"space-between"}
					alignItems={"center"}
					gap={5}
					border={"1px solid transparent"}
					borderRadius={8}
					color='#333'
					bgColor={"#FFF"}
					p={5}
					overflowX={"auto"}
				>
					<TagTable tags={data} h='100%' minW={["250px", "400px", "600px", "800px"]} />
					<Pagination page={tagData.page} totalPages={totalPages} onPageChange={updatePageParam} />
				</Flex>
			</Loader>
		</Flex>
	)
}

export default HomePage
