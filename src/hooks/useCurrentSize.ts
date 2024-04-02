import { useEffect, useState } from "react"

export const useCurrentSize = (tableSize: number, min: number, max: number) => {
	const [currentSize, setCurrentSize] = useState(tableSize < min ? min : tableSize > max ? max : tableSize)

	useEffect(() => {
		if (!tableSize) return
		if (tableSize === currentSize) return

		const size = tableSize < min ? min : tableSize > max ? max : tableSize
		setCurrentSize(size)
	}, [tableSize, min, max])

	return { currentSize, setCurrentSize }
}
