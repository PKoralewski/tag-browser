import { useEffect, useState } from "react"

export const useCurrentPage = (page: number, totalPages: number) => {
	const [currentPage, setCurrentPage] = useState(page > totalPages ? totalPages : page < 1 ? 1 : page)

	useEffect(() => {
		if (!page) return
		if (page === currentPage) return

		if (page > totalPages) {
			setCurrentPage(totalPages)
			return
		}

		if (page < 1) {
			setCurrentPage(1)
			return
		}

		setCurrentPage(page)
	}, [page])

	return { currentPage, setCurrentPage }
}
