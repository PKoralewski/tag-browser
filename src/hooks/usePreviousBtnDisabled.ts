import { useEffect, useState } from "react"

export const usePreviousBtnDisabled = (currentPage: number) => {
	const [previousBtnDisabled, setPreviousBtnDisabled] = useState<boolean>(true)

	useEffect(() => {
		updatePreviousBtnDisabled()
	}, [currentPage])

	const updatePreviousBtnDisabled = () => {
		setPreviousBtnDisabled(currentPage <= 1)
	}

	return { previousBtnDisabled }
}
