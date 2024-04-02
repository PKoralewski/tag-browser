import { Button, Flex, FlexProps, Text } from "@chakra-ui/react"
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons"
import { useEffect } from "react"

import { IPaginationProps } from "../types/Pagination"
import { useCurrentPage } from "../hooks/useCurrentPage"
import { usePreviousBtnDisabled } from "../hooks/usePreviousBtnDisabled"
import { useNextBtnDisabled } from "../hooks/useNextBtnDisabled"

const Pagination = ({ page, totalPages, onPageChange, ...props }: IPaginationProps & FlexProps) => {
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
		<Flex alignItems={"center"} justifyContent={"center"} gap={[2, 3, 4, 5]} {...props}>
			<Button
				bgColor={"blackAlpha.100"}
				w={["120px", "130px", "140px", "150px"]}
				h={["30px", "35px"]}
				fontSize={[12, 13, 14, 15, 16]}
				gap={2}
				isDisabled={previousBtnDisabled}
				onClick={handlePreviousButtonClick}
			>
				<ArrowBackIcon boxSize={{ base: 4, md: 5 }} />
				Previous
			</Button>
			<Text fontSize={[12, 13, 14, 15, 16]} textAlign={"center"}>
				{currentPage} of {totalPages}
			</Text>
			<Button
				bgColor={"blackAlpha.100"}
				w={["120px", "130px", "140px", "150px"]}
				h={["30px", "35px"]}
				fontSize={[12, 13, 14, 15, 16]}
				gap={2}
				isDisabled={nextBtnDisabled}
				onClick={handleNextButtonClick}
			>
				Next
				<ArrowForwardIcon boxSize={{ base: 4, md: 5 }} />
			</Button>
		</Flex>
	)
}

export default Pagination
