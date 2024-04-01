import Pagination from "../components/Pagination"

export default {
	title: "Pagination",
	component: Pagination,
}

export const Default = () => <Pagination page={1} totalPages={25} onPageChange={() => {}} />
