import { Flex, Text } from "@chakra-ui/layout"
import { useState } from "react"

import { ISortSelectFieldProps } from "../types/SortSelectField"
import SelectField from "./SelectField"

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
			<Text>Sort field:</Text>
			<SelectField values={sortFields} onChange={onFieldChange} />
		</Flex>
	)
}

export default SortSelectField
