import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const useTagData = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [defaultTagData] = useState({
		page: 1,
		pageSize: 5,
		sortDirection: "desc",
		sortField: "popular",
	})
	const [page, setPage] = useState(Number(searchParams.get("page")) || defaultTagData.page)
	const [pageSize, setPageSize] = useState(Number(searchParams.get("pagesize")) || defaultTagData.pageSize)
	const [sortDirection, setSortDirection] = useState(searchParams.get("order") || defaultTagData.sortDirection)
	const [sortField, setSortField] = useState(searchParams.get("sort") || defaultTagData.sortField)
	const [tagData, setTagData] = useState({
		page,
		pageSize,
		sortDirection,
		sortField,
	})

	useEffect(() => {
		setTagData({
			page,
			pageSize,
			sortDirection,
			sortField,
		})
		setSearchParams({ page: page.toString(), pageSize: pageSize.toString(), sort: sortField, order: sortDirection })
	}, [page, pageSize, sortDirection, sortField])

	return {
		tagData,
		setPage,
		setPageSize,
		setSortDirection,
		setSortField,
	}
}
