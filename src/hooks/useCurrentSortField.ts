import { useEffect, useState } from "react"

import { SortField } from "../types/SortField"

export const useCurrentSortField = (sortFields: SortField[], sortField: string) => {
	const [currentSortField, setCurrentSortField] = useState(
		sortFields.some((field) => field.value === sortField.toLowerCase()) ? sortField : sortFields[0].value,
	)

	useEffect(() => {
		if (!sortField) return
		if (currentSortField === sortField) return

		const isCorrectSortField = sortFields.some((field) => field.value === sortField.toLowerCase())
		if (isCorrectSortField) {
			setCurrentSortField(sortField)
			return
		}
		setCurrentSortField(sortFields[0].value)
	}, [sortField, sortFields])

	return { currentSortField: currentSortField.toString().toLowerCase(), setCurrentSortField }
}
