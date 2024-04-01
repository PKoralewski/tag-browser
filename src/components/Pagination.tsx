import { Button, Flex, Text } from "@chakra-ui/react"

import { IPaginationProps } from "../types/Pagination"
import { useEffect, useState } from "react"

const Pagination = ({ page, totalPages, onPageChange }: IPaginationProps) => {
	const [currentPage, setCurrentPage] = useState(page)
	const [previousBtnDisabled, setPreviousBtnDisabled] = useState<boolean>(true)
	const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>()

	useEffect(() => {
		if (!page) return
		if (page === currentPage) return

		setCurrentPage(page)
	}, [page])

	useEffect(() => {
		updatePreviousBtnDisabled()
		updateNextBtnDisabled()
		onPageChange(currentPage)
	}, [currentPage])

	const updatePreviousBtnDisabled = () => {
		setPreviousBtnDisabled(currentPage <= 1)
	}

	const updateNextBtnDisabled = () => {
		setNextBtnDisabled(currentPage === totalPages)
	}

	const incrementPage = () => setCurrentPage((prevState) => prevState + 1)

	const decrementPage = () => setCurrentPage((prevState) => prevState - 1)

	const handleNextButtonClick = () => {
		incrementPage()
	}

	const handlePreviousButtonClick = () => {
		decrementPage()
	}

	return (
		<Flex alignItems={"center"} gap={5}>
			<Button bgColor={"blackAlpha.100"} isDisabled={previousBtnDisabled} onClick={handlePreviousButtonClick}>
				Previous
			</Button>
			<Text>{currentPage}</Text>
			<Button bgColor={"blackAlpha.100"} isDisabled={nextBtnDisabled} onClick={handleNextButtonClick}>
				Next
			</Button>
		</Flex>
	)
}

export default Pagination