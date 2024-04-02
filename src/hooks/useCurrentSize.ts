import { useEffect, useState } from "react"

export const useCurrentSize = (tableSize: number, min: number, max: number) => {
	const [currentSize, setCurrentSize] = useState(tableSize < min ? min : tableSize > max ? max : tableSize)

	useEffect(() => {
		const size = tableSize < min ? min : tableSize > max ? max : tableSize
		setCurrentSize(size)
	}, [tableSize, min, max])

	return { currentSize, setCurrentSize }
}
