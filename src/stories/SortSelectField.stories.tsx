import { Meta, StoryObj } from "@storybook/react"
import { SelectProps } from "@chakra-ui/react"

import SortSelectField from "../components/SortSelectField"
import { ISortSelectFieldProps } from "../types/SortSelectField"

const meta: Meta<typeof SortSelectField> = {
	title: "SortSelectField",
	component: SortSelectField,
	argTypes: { onFieldChange: { action: "onFieldChange" } },
}

export default meta

type StoryType = StoryObj<ISortSelectFieldProps & SelectProps>

export const Base: StoryType = (args: ISortSelectFieldProps) => <SortSelectField {...args} />

Base.args = {
	sortField: "popular",
}

export const SelectPlaceholder: StoryType = (args: ISortSelectFieldProps) => <SortSelectField {...args} />

SelectPlaceholder.args = {
	sortField: "",
	placeholder: "Select",
}

export const SelectNameOption: StoryType = (args: ISortSelectFieldProps) => <SortSelectField {...args} />

SelectNameOption.args = {
	sortField: "name",
}

export const SmallSortSelectField: StoryType = (args: ISortSelectFieldProps & SelectProps) => (
	<SortSelectField {...args} />
)

SmallSortSelectField.args = {
	sortField: "popular",
	h: "25px",
}

export const LargeSortSelectField: StoryType = (args: ISortSelectFieldProps) => <SortSelectField {...args} />

LargeSortSelectField.args = {
	sortField: "popular",
	h: "50px",
}

export const RedSortSelectField: StoryType = (args: ISortSelectFieldProps) => <SortSelectField {...args} />

RedSortSelectField.args = {
	sortField: "popular",
	bgColor: "red",
}

export const NarrowSortSelectField: StoryType = (args: ISortSelectFieldProps) => <SortSelectField {...args} />

NarrowSortSelectField.args = {
	sortField: "popular",
	width: 100,
}
