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
			<Text fontWeight='600' fontSize={[12, 13, 14, 15, 16]} minW={["75px", "auto"]} whiteSpace={"nowrap"}>
				Sort order:
			</Text>
			<SelectField
				fontSize={[12, 13, 14, 15, 16]}
				bgColor={"#FFF"}
				h={["30px", "35px"]}
				color='#333'
				values={ordersArray}
				onSelectChange={onOrderChange}
			/>
		</Flex>
	)
}

export default SortSelectOrder
