import { Select, SelectProps } from "@chakra-ui/select"

import { ISelectFieldProps } from "../types/SelectField"

const SelectField = ({ value, values, onSelectChange, ...props }: ISelectFieldProps & SelectProps) => {
	return (
		<Select value={value} onChange={(e) => onSelectChange(e.target.value)} {...props}>
			{values?.map((item, index) => (
				<option key={index} value={item.value}>
					{item.name}
				</option>
			))}
		</Select>
	)
}

export default SelectField
