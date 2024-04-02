import { Meta, StoryObj } from "@storybook/react"
import { TableProps } from "@chakra-ui/react"

import TagTable from "../components/TagTable"
import { ITagsProps } from "../types/Tags"

const meta: Meta<typeof TagTable> = {
	title: "TagTable",
	component: TagTable,
}

export default meta

type StoryType = StoryObj<ITagsProps & TableProps>

export const Base: StoryType = (args: ITagsProps) => <TagTable {...args} />

Base.args = {
	tags: {
		items: [
			{
				name: "Tag 1",
				count: 1,
			},
			{
				name: "Tag 2",
				count: 2,
			},
			{
				name: "Tag 3",
				count: 3,
			},
			{
				name: "Tag 4",
				count: 4,
			},
		],
	},
}

export const SmallTable: StoryType = (args: ITagsProps) => <TagTable {...args} />

SmallTable.args = {
	tags: {
		items: [
			{
				name: "Tag 1",
				count: 1,
			},
			{
				name: "Tag 2",
				count: 2,
			},
			{
				name: "Tag 3",
				count: 3,
			},
			{
				name: "Tag 4",
				count: 4,
			},
		],
	},
	size: "sm",
}

export const MediumTable: StoryType = (args: ITagsProps) => <TagTable {...args} />

MediumTable.args = {
	tags: {
		items: [
			{
				name: "Tag 1",
				count: 1,
			},
			{
				name: "Tag 2",
				count: 2,
			},
			{
				name: "Tag 3",
				count: 3,
			},
			{
				name: "Tag 4",
				count: 4,
			},
		],
	},
	size: "md",
}

export const LargeTable: StoryType = (args: ITagsProps) => <TagTable {...args} />

LargeTable.args = {
	tags: {
		items: [
			{
				name: "Tag 1",
				count: 1,
			},
			{
				name: "Tag 2",
				count: 2,
			},
			{
				name: "Tag 3",
				count: 3,
			},
			{
				name: "Tag 4",
				count: 4,
			},
		],
	},
	size: "lg",
}

export const RedTable: StoryType = (args: ITagsProps) => <TagTable {...args} />

RedTable.args = {
	tags: {
		items: [
			{
				name: "Tag 1",
				count: 1,
			},
			{
				name: "Tag 2",
				count: 2,
			},
			{
				name: "Tag 3",
				count: 3,
			},
			{
				name: "Tag 4",
				count: 4,
			},
		],
	},
	colorScheme: "red",
}

export const RedTextTable: StoryType = (args: ITagsProps) => <TagTable {...args} />

RedTextTable.args = {
	tags: {
		items: [
			{
				name: "Tag 1",
				count: 1,
			},
			{
				name: "Tag 2",
				count: 2,
			},
			{
				name: "Tag 3",
				count: 3,
			},
			{
				name: "Tag 4",
				count: 4,
			},
		],
	},
	color: "red",
}

export const GreenBackgroundTable: StoryType = (args: ITagsProps) => <TagTable {...args} />

GreenBackgroundTable.args = {
	tags: {
		items: [
			{
				name: "Tag 1",
				count: 1,
			},
			{
				name: "Tag 2",
				count: 2,
			},
			{
				name: "Tag 3",
				count: 3,
			},
			{
				name: "Tag 4",
				count: 4,
			},
		],
	},
	bgColor: "green",
}

export const SimpleTable: StoryType = (args: ITagsProps) => <TagTable {...args} />

SimpleTable.args = {
	tags: {
		items: [
			{
				name: "Tag 1",
				count: 1,
			},
			{
				name: "Tag 2",
				count: 2,
			},
			{
				name: "Tag 3",
				count: 3,
			},
			{
				name: "Tag 4",
				count: 4,
			},
		],
	},
	variant: "simple",
}

export const UnstyledTable: StoryType = (args: ITagsProps) => <TagTable {...args} />

UnstyledTable.args = {
	tags: {
		items: [
			{
				name: "Tag 1",
				count: 1,
			},
			{
				name: "Tag 2",
				count: 2,
			},
			{
				name: "Tag 3",
				count: 3,
			},
			{
				name: "Tag 4",
				count: 4,
			},
		],
	},
	variant: "unstyled",
}
