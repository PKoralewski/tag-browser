import { Meta, StoryObj } from "@storybook/react"
import { TextProps } from "@chakra-ui/react"

import NoData from "../components/NoData"

const meta: Meta<typeof NoData> = {
	title: "NoData",
	component: NoData,
}

export default meta

type StoryType = StoryObj<TextProps>

export const Base: StoryType = () => <NoData />

Base.args = {}

export const SmallNoData: StoryType = (args: TextProps) => <NoData {...args} />

SmallNoData.args = {
	fontSize: "12px",
}

export const BigNoData: StoryType = (args: TextProps) => <NoData {...args} />

BigNoData.args = {
	fontSize: "100px",
}

export const RedNoData: StoryType = (args: TextProps) => <NoData {...args} />

RedNoData.args = {
	color: "red",
}

export const UppercaseNoData: StoryType = (args: TextProps) => <NoData {...args} />

UppercaseNoData.args = {
	textTransform: "uppercase",
}

export const LowercaseNoData: StoryType = (args: TextProps) => <NoData {...args} />

LowercaseNoData.args = {
	textTransform: "lowercase",
}
