import { Select } from "@chakra-ui/select"

import { ISelectFieldProps } from "../types/SelectField"

const SelectField = ({ values, onChange }: ISelectFieldProps) => {
	return (
		<Select onChange={(e) => onChange(e.target.value)}>
			{values?.map((item, index) => (
				<option key={index} value={item.value}>
					{item.name}
				</option>
			))}
		</Select>
	)
}

export default SelectField
