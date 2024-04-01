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
			<Text fontWeight='600' fontSize={[12, 13, 14, 15, 16]} w={["120px", "auto"]} whiteSpace={"nowrap"}>
				Sort field:
			</Text>
			<SelectField
				fontSize={[12, 13, 14, 15, 16]}
				bgColor={"#FFF"}
				h={["30px", "35px"]}
				color='#333'
				values={sortFields}
				onSelectChange={onFieldChange}
			/>
		</Flex>
	)
}

export default SortSelectField
