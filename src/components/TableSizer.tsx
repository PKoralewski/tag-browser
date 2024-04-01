import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from "@chakra-ui/number-input"

import { ITableSizerProps } from "../types/TableSizer"
import { Flex, Text } from "@chakra-ui/layout"

const TableSizer = ({ tableSize, minValue, maxValue, onSizeChange }: ITableSizerProps) => {
	const handleSizerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "-" || e.key === "+" || e.key === ".") {
			e.preventDefault()
			return
		}
	}

	const handleSizerOnChange = (value: string | number) => {
		if (Number(value) < 1) {
			onSizeChange("1")
			return
		}
		if (Number(value) > 100) {
			onSizeChange("100")
			return
		}
		onSizeChange(value.toString())
	}

	return (
		<Flex alignItems={"center"} gap={2}>
			<Text>Table size:</Text>
			<NumberInput
				value={tableSize}
				min={minValue}
				max={maxValue}
				allowMouseWheel
				onKeyDown={handleSizerKeyDown}
				onChange={handleSizerOnChange}
			>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
		</Flex>
	)
}

export default TableSizer
