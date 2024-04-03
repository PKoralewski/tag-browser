import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from "@chakra-ui/number-input"
import { Flex, Text } from "@chakra-ui/layout"
import { FlexProps } from "@chakra-ui/react"

import { ITableSizerProps } from "../types/TableSizer"
import { useDebounce } from "../hooks/useDebounce"
import { useCurrentSize } from "../hooks/useCurrentSize"

const TableSizer = ({ tableSize, minValue, maxValue, onSizeChange, ...props }: ITableSizerProps & FlexProps) => {
	const { currentSize, setCurrentSize } = useCurrentSize(tableSize, minValue, maxValue)
	useDebounce(currentSize, onSizeChange, 300)

	const handleSizerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "-" || e.key === "+" || e.key === ".") {
			e.preventDefault()
			return
		}
	}

	const handleSizerOnChange = (value: string | number) => {
		if (Number(value) < minValue) {
			setCurrentSize(minValue)
			return
		}
		if (Number(value) > maxValue) {
			setCurrentSize(maxValue)
			return
		}
		setCurrentSize(Number(value))
	}

	return (
		<Flex alignItems={"center"} gap={2} {...props}>
			<Text fontWeight='600' fontSize={[12, 13, 14, 15, 16]} minW={["75px", "auto"]} whiteSpace={"nowrap"}>
				Table size:
			</Text>
			<NumberInput
				bgColor={"#FFF"}
				color='#333'
				borderRadius={8}
				value={currentSize}
				min={minValue}
				max={maxValue}
				allowMouseWheel
				onKeyDown={handleSizerKeyDown}
				onChange={handleSizerOnChange}
			>
				<NumberInputField fontSize={[12, 13, 14, 15, 16]} h={["30px", "35px"]} />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
		</Flex>
	)
}

export default TableSizer
