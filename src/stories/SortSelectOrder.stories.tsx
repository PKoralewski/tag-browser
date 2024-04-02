import { Meta, StoryObj } from "@storybook/react"
import { SelectProps } from "@chakra-ui/react"

import SortSelectOrder from "../components/SortSelectOrder"
import { ISortSelectOrderProps } from "../types/SortSelectOrder"

const meta: Meta<typeof SortSelectOrder> = {
	title: "SortSelectOrder",
	component: SortSelectOrder,
	argTypes: { onOrderChange: { action: "onOrderChange" } },
}

export default meta

type StoryType = StoryObj<ISortSelectOrderProps & SelectProps>

export const Base: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

Base.args = {
	orderDirection: "desc",
}

export const SelectPlaceholder: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

SelectPlaceholder.args = {
	orderDirection: "desc",
	placeholder: "Select",
}

export const SelectAscendingOption: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

SelectAscendingOption.args = {
	orderDirection: "asc",
}

export const SmallSortSelectOrder: StoryType = (args: ISortSelectOrderProps & SelectProps) => (
	<SortSelectOrder {...args} />
)

SmallSortSelectOrder.args = {
	orderDirection: "desc",
	h: "25px",
}

export const LargeSortSelectOrder: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

LargeSortSelectOrder.args = {
	orderDirection: "desc",
	h: "50px",
}

export const RedSortSelectOrder: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

RedSortSelectOrder.args = {
	orderDirection: "desc",
	bgColor: "red",
}

export const NarrowSortSelectField: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

NarrowSortSelectField.args = {
	orderDirection: "desc",
	width: 140,
}
