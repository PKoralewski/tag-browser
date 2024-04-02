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

Base.args = {}

export const SelectPlaceholder: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

SelectPlaceholder.args = {
	placeholder: "Select",
}

export const SmallSortSelectOrder: StoryType = (args: ISortSelectOrderProps & SelectProps) => (
	<SortSelectOrder {...args} />
)

SmallSortSelectOrder.args = {
	h: "25px",
}

export const LargeSortSelectOrder: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

LargeSortSelectOrder.args = {
	h: "50px",
}

export const RedSortSelectOrder: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

RedSortSelectOrder.args = {
	bgColor: "red",
}

export const NarrowSortSelectField: StoryType = (args: ISortSelectOrderProps) => <SortSelectOrder {...args} />

NarrowSortSelectField.args = {
	width: 140,
}
