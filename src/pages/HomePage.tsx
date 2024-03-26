import { useSearchParams } from "react-router-dom"

import { useGetTagsQuery } from "../services/api/stackOverflow-api"
import TagTable from "../components/TagTable"

const HomePage = () => {
	const [searchParams] = useSearchParams()
	console.log(searchParams.get("page"))
	const { data } = useGetTagsQuery({
		page: Number(searchParams.get("page")) || 1,
		pageSize: Number(searchParams.get("pagesize")) || 5,
		sortDirection: searchParams.get("order") || "desc",
		sortField: searchParams.get("sort") || "popular",
	})

	return data && <TagTable tags={data} />
}

export default HomePage
