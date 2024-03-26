import { Table, TableContainer, TableProps, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"

import { ITagsProps } from "./TagsProps"

const TagTable = ({ tags, ...props }: ITagsProps & TableProps) => {
	return (
		<TableContainer>
			<Table variant='striped' colorScheme='blackAlpha' fontSize={[13, 14, 15, 16]} {...props}>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th isNumeric>Count</Th>
					</Tr>
				</Thead>
				<Tbody>
					{tags.items.map((tag, index) => (
						<Tr key={index}>
							<Td>{tag.name}</Td>
							<Td isNumeric>{tag.count}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default TagTable
