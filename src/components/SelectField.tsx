import { Select, SelectProps } from "@chakra-ui/select"

import { ISelectFieldProps } from "../types/SelectField"

const SelectField = ({ values, onSelectChange, ...props }: ISelectFieldProps & SelectProps) => {
	return (
		<Select onChange={(e) => onSelectChange(e.target.value)} {...props}>
			{values?.map((item, index) => (
				<option key={index} value={item.value}>
					{item.name}
				</option>
			))}
		</Select>
	)
}

export default SelectField
