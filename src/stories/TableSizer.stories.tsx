import { Meta, StoryObj } from "@storybook/react"
import { FlexProps } from "@chakra-ui/react"

import TableSizer from "../components/TableSizer"
import { ITableSizerProps } from "../types/TableSizer"

const meta: Meta<typeof TableSizer> = {
	title: "TableSizer",
	component: TableSizer,
	argTypes: { onSizeChange: { action: "onSizeChange" } },
}

export default meta

type StoryType = StoryObj<ITableSizerProps & FlexProps>

export const Base: StoryType = (args: ITableSizerProps) => <TableSizer {...args} />

Base.args = {
	tableSize: 5,
	minValue: 1,
	maxValue: 10,
}

export const MinSize: StoryType = (args: ITableSizerProps) => <TableSizer {...args} />

MinSize.args = {
	tableSize: 5,
	minValue: 5,
	maxValue: 25,
}

export const MaxSize: StoryType = (args: ITableSizerProps) => <TableSizer {...args} />

MaxSize.args = {
	tableSize: 100,
	minValue: 1,
	maxValue: 100,
}

export const NoGapSizer: StoryType = (args: ITableSizerProps) => <TableSizer {...args} />

NoGapSizer.args = {
	tableSize: 5,
	minValue: 1,
	maxValue: 20,
	gap: 0,
}

export const BigGapSizer: StoryType = (args: ITableSizerProps) => <TableSizer {...args} />

BigGapSizer.args = {
	tableSize: 5,
	minValue: 1,
	maxValue: 20,
	gap: 100,
}

export const ColumnSizer: StoryType = (args: ITableSizerProps) => <TableSizer {...args} />

ColumnSizer.args = {
	tableSize: 5,
	minValue: 1,
	maxValue: 20,
	flexDirection: "column",
}

export const RedSizeText: StoryType = (args: ITableSizerProps) => <TableSizer {...args} />

RedSizeText.args = {
	tableSize: 5,
	minValue: 1,
	maxValue: 20,
	color: "red",
}
