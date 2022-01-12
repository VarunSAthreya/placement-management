import { Table, Tbody, Text, Box, Th, Thead, Tr, Flex } from '@chakra-ui/react';
import PlacedTable from '../../components/Tables/PlacedTable';
import SideBar from '../../components/Sidebar/Sidebar';

const placedTableData = [
    {
        name: 'Purity UI Version',
        members: ['1', '2'],
        ctc: '8LPA',
    },
    {
        name: 'Add Progress Track',
        members: ['1', '2'],
        ctc: '8LPA',
    },
    {
        name: 'Fix Platform Errors',
        members: ['1', '2'],
        ctc: '8LPA',
    },
    {
        name: 'Launch our Mobile App',
        members: ['1', '2'],
        ctc: '8LPA',
    },
];

const Placed = () => {
    return (
        <Flex flexDirection={'row'} bg={'#f8f9fa'}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={'290px'}
                width={'100%'}
                p={4}
            >
                <Box
                    p="0px 16px 16px"
                    overflowX={{ sm: 'scroll', xl: 'hidden' }}
                >
                    <Box bg={'white'} mb={4} borderRadius={4}>
                        <Flex direction="column" p={4}>
                            <Text
                                fontSize="xl"
                                color={'black'}
                                fontWeight="bold"
                                pb=".5rem"
                            >
                                Placed Students
                            </Text>
                            <Flex align="center">
                                <Text
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="normal"
                                >
                                    <Text fontWeight="bold" as="span">
                                        30 placed
                                    </Text>{' '}
                                    in Total.
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box bg={'white'} p={6} borderRadius={8}>
                        <Table variant="simple" color={'black'}>
                            <Thead>
                                <Tr my=".8rem" ps="0px">
                                    <Th ps="0px" color="gray.400">
                                        Companies
                                    </Th>
                                    <Th color="gray.400">Students</Th>
                                    <Th color="gray.400" textAlign={'center'}>
                                        Packages
                                    </Th>
                                    <Th color="gray.400" textAlign={'center'}>
                                        Student Details
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {placedTableData.map((placed, index) => {
                                    return (
                                        <PlacedTable
                                            key={index}
                                            placed={placed}
                                        />
                                    );
                                })}
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Placed;
