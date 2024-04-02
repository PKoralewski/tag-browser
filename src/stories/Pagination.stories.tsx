import { Meta, StoryObj } from "@storybook/react"
import { FlexProps } from "@chakra-ui/react"

import Pagination from "../components/Pagination"
import { IPaginationProps } from "../types/Pagination"

const meta: Meta<typeof Pagination> = {
	title: "Pagination",
	component: Pagination,
	argTypes: { onPageChange: { action: "onPageChange" } },
}

export default meta

type StoryType = StoryObj<IPaginationProps & FlexProps>

export const Base: StoryType = (args: IPaginationProps) => <Pagination {...args} />

Base.args = {
	page: 1,
	totalPages: 25,
}

export const LastPage: StoryType = (args: IPaginationProps) => <Pagination {...args} />

LastPage.args = {
	page: 25,
	totalPages: 25,
}

export const OneHundredPages: StoryType = (args: IPaginationProps) => <Pagination {...args} />

OneHundredPages.args = {
	page: 1,
	totalPages: 100,
}

export const PageTen: StoryType = (args: IPaginationProps) => <Pagination {...args} />

PageTen.args = {
	page: 10,
	totalPages: 25,
}

export const NoGapPagination: StoryType = (args: IPaginationProps & FlexProps) => <Pagination {...args} />

NoGapPagination.args = {
	page: 10,
	totalPages: 25,
	gap: 0,
}

export const BigGapPagination: StoryType = (args: IPaginationProps & FlexProps) => <Pagination {...args} />

BigGapPagination.args = {
	page: 10,
	totalPages: 25,
	gap: 100,
}

export const ColumnPagination: StoryType = (args: IPaginationProps & FlexProps) => <Pagination {...args} />

ColumnPagination.args = {
	page: 10,
	totalPages: 25,
	flexDirection: "column",
}
