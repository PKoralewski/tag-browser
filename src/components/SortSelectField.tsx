import { Flex, Text } from "@chakra-ui/layout"
import { useEffect, useState } from "react"
import { SelectProps } from "@chakra-ui/react"

import { ISortSelectFieldProps } from "../types/SortSelectField"
import SelectField from "./SelectField"
import { useCurrentSortField } from "../hooks/useCurrentSortField"

const SortSelectField = ({ sortField, onFieldChange, ...props }: ISortSelectFieldProps & SelectProps) => {
	const [sortFields] = useState([
		{
			name: "Popular",
			value: "popular",
		},
		{
			name: "Activity",
			value: "activity",
		},
		{
			name: "Name",
			value: "name",
		},
	])
	const { currentSortField, setCurrentSortField } = useCurrentSortField(sortFields, sortField)

	useEffect(() => {
		onFieldChange(currentSortField.toString())
	}, [currentSortField])

	return (
		<Flex alignItems={"center"} gap={2}>
			<Text fontWeight='600' fontSize={[12, 13, 14, 15, 16]} minW={["75px", "auto"]} whiteSpace={"nowrap"}>
				Sort field:
			</Text>
			<SelectField
				fontSize={[12, 13, 14, 15, 16]}
				bgColor={"#FFF"}
				h={["30px", "35px"]}
				color='#333'
				{...props}
				value={currentSortField}
				values={sortFields}
				onSelectChange={setCurrentSortField}
			/>
		</Flex>
	)
}

export default SortSelectField
