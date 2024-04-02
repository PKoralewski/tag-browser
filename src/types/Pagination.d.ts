import { FlexProps } from "@chakra-ui/react"

export interface IPaginationProps {
	page: number
	totalPages: number
	onPageChange: (currentPage: number) => void
	props?: FlexProps
}
