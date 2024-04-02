import { Meta, StoryObj } from "@storybook/react"
import { SpinnerProps } from "@chakra-ui/react"

import Loader from "../components/Loader"
import { ILoaderProps } from "../types/Loader"

const meta: Meta<typeof Loader> = {
	title: "Loader",
	component: Loader,
}

export default meta

type StoryType = StoryObj<ILoaderProps & SpinnerProps>

export const LoadingData: StoryType = (args: ILoaderProps) => (
	<Loader {...args}>
		<p>Data loaded</p>
	</Loader>
)

LoadingData.args = {
	isLoading: true,
}

export const DataLoaded: StoryType = (args: ILoaderProps) => (
	<Loader {...args}>
		<p>Data loaded</p>
	</Loader>
)

DataLoaded.args = {
	isLoading: false,
}

export const RedLoader: StoryType = (args: ILoaderProps & SpinnerProps) => (
	<Loader {...args}>
		<p>Data loaded</p>
	</Loader>
)

RedLoader.args = {
	isLoading: true,
	color: "red.700",
	emptyColor: "red.200",
}

export const SlowLoader: StoryType = (args: ILoaderProps & SpinnerProps) => (
	<Loader {...args}>
		<p>Data loaded</p>
	</Loader>
)

SlowLoader.args = {
	isLoading: true,
	speed: "1.5s",
}

export const BoldLoader: StoryType = (args: ILoaderProps & SpinnerProps) => (
	<Loader {...args}>
		<p>Data loaded</p>
	</Loader>
)

BoldLoader.args = {
	isLoading: true,
	thickness: "4px",
}

export const BigLoader: StoryType = (args: ILoaderProps & SpinnerProps) => (
	<Loader {...args}>
		<p>Data loaded</p>
	</Loader>
)

BigLoader.args = {
	isLoading: true,
	boxSize: "300px",
}
