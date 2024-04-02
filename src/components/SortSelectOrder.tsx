import { Flex, Text } from "@chakra-ui/layout"
import { useEffect, useState } from "react"
import { SelectProps } from "@chakra-ui/react"

import SelectField from "./SelectField"
import { ISortSelectOrderProps } from "../types/SortSelectOrder"
import { useCurrentOrderDirection } from "../hooks/useCurrentOrderDirection"

const SortSelectOrder = ({ orderDirection, onOrderChange, ...props }: ISortSelectOrderProps & SelectProps) => {
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
	const { currentOrderDirection, setCurrentOrderDirection } = useCurrentOrderDirection(ordersArray, orderDirection)

	useEffect(() => {
		onOrderChange(currentOrderDirection)
	}, [currentOrderDirection])

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
				{...props}
				value={currentOrderDirection}
				values={ordersArray}
				onSelectChange={setCurrentOrderDirection}
			/>
		</Flex>
	)
}

export default SortSelectOrder
