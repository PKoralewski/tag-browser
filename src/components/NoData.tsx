import { Flex, Text } from "@chakra-ui/layout"
import { TextProps } from "@chakra-ui/react"

const NoData = ({ ...props }: TextProps) => {
	return (
		<Flex w='100%' justifyContent={"center"}>
			<Text fontSize={[24, 32, 36, 40]} color={"gray.600"} {...props}>
				No data
			</Text>
		</Flex>
	)
}

export default NoData
