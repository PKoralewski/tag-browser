import { useEffect, useState } from "react"

export const useNextBtnDisabled = (currentPage: number, totalPages: number) => {
	const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>()

	useEffect(() => {
		updateNextBtnDisabled()
	}, [currentPage])

	const updateNextBtnDisabled = () => {
		setNextBtnDisabled(currentPage >= totalPages)
	}

	return { nextBtnDisabled }
}
