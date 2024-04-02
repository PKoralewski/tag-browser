import { useEffect, useState } from "react"

import { OrderDirection } from "../types/OrderDirection"

export const useCurrentOrderDirection = (orderArray: OrderDirection[], order: string) => {
	const [currentOrderDirection, setCurrentOrderDirection] = useState(
		orderArray.some((record) => record.value === order.toLowerCase()) ? order : orderArray[0].value,
	)

	useEffect(() => {
		if (!order) return
		if (currentOrderDirection === order) return

		const isCorrectSortField = orderArray.some((record) => record.value === order.toLowerCase())
		if (isCorrectSortField) {
			setCurrentOrderDirection(order)
			return
		}
		setCurrentOrderDirection(orderArray[0].value)
	}, [order, orderArray])

	return { currentOrderDirection: currentOrderDirection.toString().toLowerCase(), setCurrentOrderDirection }
}
