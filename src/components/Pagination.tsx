import { Button, Flex, Text } from "@chakra-ui/react"
import { useEffect } from "react"

import { IPaginationProps } from "../types/Pagination"
import { useCurrentPage } from "../hooks/useCurrentPage"
import { usePreviousBtnDisabled } from "../hooks/usePreviousBtnDisabled"
import { useNextBtnDisabled } from "../hooks/useNextBtnDisabled"

const Pagination = ({ page, totalPages, onPageChange }: IPaginationProps) => {
	const { currentPage, setCurrentPage } = useCurrentPage(page, totalPages)
	const { previousBtnDisabled } = usePreviousBtnDisabled(currentPage)
	const { nextBtnDisabled } = useNextBtnDisabled(currentPage, totalPages)

	useEffect(() => {
		onPageChange(currentPage)
	}, [currentPage])

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
