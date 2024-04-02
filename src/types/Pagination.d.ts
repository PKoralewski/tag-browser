export interface IPaginationProps {
	page: number
	totalPages: number
	onPageChange: (currentPage: number) => void
}
