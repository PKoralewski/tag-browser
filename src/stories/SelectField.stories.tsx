import { Meta, StoryObj } from "@storybook/react"
import { SelectProps } from "@chakra-ui/react"

import SelectField from "../components/SelectField"
import { ISelectFieldProps } from "../types/SelectField"

const meta: Meta<typeof SelectField> = {
	title: "SelectField",
	component: SelectField,
	argTypes: { onSelectChange: { action: "onSelectChange" } },
}

export default meta

type StoryType = StoryObj<ISelectFieldProps & SelectProps>

export const Base: StoryType = (args: ISelectFieldProps) => <SelectField {...args} />

Base.args = {
	value: 1,
	values: [
		{
			name: "Base 1",
			value: 1,
		},
		{
			name: "Base 2",
			value: 2,
		},
	],
}

export const SelectPlaceholder: StoryType = (args: ISelectFieldProps) => <SelectField {...args} />

SelectPlaceholder.args = {
	placeholder: "Select",
}

export const SelectSecondOption: StoryType = (args: ISelectFieldProps) => <SelectField {...args} />

SelectSecondOption.args = {
	value: 2,
	values: [
		{
			name: "Base 1",
			value: 1,
		},
		{
			name: "Base 2",
			value: 2,
		},
	],
}

export const TagItems: StoryType = (args: ISelectFieldProps) => <SelectField {...args} />

TagItems.args = {
	value: 1,
	values: [
		{
			name: "Tag 1",
			value: 1,
		},
		{
			name: "Tag 2",
			value: 2,
		},
	],
}

export const SmallSelectField: StoryType = (args: ISelectFieldProps) => <SelectField {...args} />

SmallSelectField.args = {
	value: 1,
	values: [
		{
			name: "Tag 1",
			value: 1,
		},
		{
			name: "Tag 2",
			value: 2,
		},
	],
	size: "sm",
}

export const LargeSelectField: StoryType = (args: ISelectFieldProps) => <SelectField {...args} />

LargeSelectField.args = {
	value: 1,
	values: [
		{
			name: "Tag 1",
			value: 1,
		},
		{
			name: "Tag 2",
			value: 2,
		},
	],
	size: "lg",
}

export const RedSelectField: StoryType = (args: ISelectFieldProps) => <SelectField {...args} />

RedSelectField.args = {
	value: 1,
	values: [
		{
			name: "Tag 1",
			value: 1,
		},
		{
			name: "Tag 2",
			value: 2,
		},
	],
	bgColor: "red",
}

export const NarrowSelectField: StoryType = (args: ISelectFieldProps) => <SelectField {...args} />

NarrowSelectField.args = {
	value: 1,
	values: [
		{
			name: "Tag 1",
			value: 1,
		},
		{
			name: "Tag 2",
			value: 2,
		},
	],
	width: 100,
}

export const HighSelectField: StoryType = (args: ISelectFieldProps) => <SelectField {...args} />

HighSelectField.args = {
	value: 1,
	values: [
		{
			name: "Tag 1",
			value: 1,
		},
		{
			name: "Tag 2",
			value: 2,
		},
	],
	width: 300,
	height: 70,
}
