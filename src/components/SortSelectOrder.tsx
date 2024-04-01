import { Flex, Text } from "@chakra-ui/layout"
import { useState } from "react"

import SelectField from "./SelectField"
import { ISortSelectOrderProps } from "../types/SortSelectOrder"

const SortSelectOrder = ({ onOrderChange }: ISortSelectOrderProps) => {
	const [ordersArray] = useState([
		{
			name: "Descending",
			value: "desc",
		},
		{
			name: "Ascending",
			value: "asc",
		},
	])

	return (
		<Flex alignItems={"center"} gap={2}>
			<Text>Sort order:</Text>
			<SelectField values={ordersArray} onChange={onOrderChange} />
		</Flex>
	)
}

export default SortSelectOrder
