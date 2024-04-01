import { Flex, Text } from "@chakra-ui/layout"

const NoData = () => {
	return (
		<Flex w='100%' justifyContent={"center"}>
			<Text fontSize={[24, 32, 36, 40]} color={"gray.600"}>
				No data
			</Text>
		</Flex>
	)
}

export default NoData
