import { Button, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import { IPaginationProps } from "../types/Pagination"

const Pagination = ({ page, totalPages, onPageChange }: IPaginationProps) => {
	const [currentPage, setCurrentPage] = useState(page > totalPages ? totalPages : page < 1 ? 1 : page)
	const [previousBtnDisabled, setPreviousBtnDisabled] = useState<boolean>(true)
	const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>()

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

	useEffect(() => {
		updatePreviousBtnDisabled()
		updateNextBtnDisabled()
		onPageChange(currentPage)
	}, [currentPage])

	const updatePreviousBtnDisabled = () => {
		setPreviousBtnDisabled(currentPage <= 1)
	}

	const updateNextBtnDisabled = () => {
		setNextBtnDisabled(currentPage >= totalPages)
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
			<Text>
				{currentPage} of {totalPages}
			</Text>
			<Button bgColor={"blackAlpha.100"} isDisabled={nextBtnDisabled} onClick={handleNextButtonClick}>
				Next
			</Button>
		</Flex>
	)
}

export default Pagination
