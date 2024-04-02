import { useEffect } from "react"
import { debounce } from "lodash"

export const useDebounce = <T>(value: T, callback: (value: T) => void, delay: number = 1000) => {
	useEffect(() => {
		const debounceHandler = debounce(() => {
			callback(value)
		}, delay)

		debounceHandler()

		return () => {
			debounceHandler.cancel()
		}
	}, [value, delay])
}
