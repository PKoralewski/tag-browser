import { Select } from "@chakra-ui/select"
import { Flex, Text } from "@chakra-ui/layout"
import { useState } from "react"

import { ISortSelectFieldProps } from "../types/SortSelectField"

const SortSelectField = ({ onFieldChange }: ISortSelectFieldProps) => {
	const [sortFields] = useState([
		{
			name: "popular",
			value: "popular",
		},
		{
			name: "activity",
			value: "activity",
		},
		{
			name: "name",
			value: "name",
		},
	])

	return (
		<Flex alignItems={"center"} gap={2}>
			<Text>Table size:</Text>
			<Select onChange={(e) => onFieldChange(e.target.value)}>
				{sortFields?.map((item, index) => (
					<option key={index} value={item.value}>
						{item.name}
					</option>
				))}
			</Select>
		</Flex>
	)
}

export default SortSelectField
