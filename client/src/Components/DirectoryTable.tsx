import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";

export interface Student {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;

}

const DirectoryTable = () => {
  return (
    <>
        <TableContainer>
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                        <Th>Address</Th>
                        <Th>Phone Number</Th>
                        <Th>Email</Th>
                    </Tr>
                </Thead>
            </Table>
        </TableContainer>
    </>
  )
}

export default DirectoryTable