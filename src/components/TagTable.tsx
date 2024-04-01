import { Table, TableContainer, TableProps, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"

import { ITagsProps } from "../types/Tags"
import NoData from "./NoData"

const TagTable = ({ tags, ...props }: ITagsProps & TableProps) => {
	return (
		<>
			<TableContainer overflowY={"auto"}>
				<Table variant='striped' size={{ base: "sm", md: "md", lg: "lg" }} colorScheme='blackAlpha' {...props}>
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th isNumeric>Count</Th>
						</Tr>
					</Thead>
					<Tbody>
						{tags?.items.length &&
							tags?.items?.map((tag, index) => (
								<Tr key={index}>
									<Td>{tag.name}</Td>
									<Td isNumeric>{tag.count}</Td>
								</Tr>
							))}
					</Tbody>
				</Table>
			</TableContainer>
			{!tags?.items.length && <NoData />}
		</>
	)
}

export default TagTable
