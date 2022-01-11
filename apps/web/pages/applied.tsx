import { Table, Tbody, Text, Box, Th, Thead, Tr, Flex } from '@chakra-ui/react';
import AppliedTable from '../components/Tables/AppliedTable';
import SideBar from '../components/Sidebar/Sidebar';

const appliedTableData = [
    {
        name: 'Oliver Liam',
        usn: '1JS19CS157',
        email: 'oliver@burrito.com',
        branch: 'CSE',
        section: 'C',
        company: 'Microsoft',
        type: 'Product',
        ctc: '7.5LPA',
    },
    {
        name: 'Oliver Liam',
        usn: '1JS19CS157',
        email: 'oliver@burrito.com',
        branch: 'CSE',
        section: 'C',
        company: 'Microsoft',
        type: 'Product',
        ctc: '7.5LPA',
    },
    {
        name: 'Oliver Liam',
        usn: '1JS19CS157',
        email: 'oliver@burrito.com',
        branch: 'CSE',
        section: 'C',
        company: 'Microsoft',
        type: 'Product',
        ctc: '7.5LPA',
    },
];

const Applied = () => {
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
                <Box mb={{ lg: '24px' }} me={{ lg: '24px' }}>
                    <Flex direction="column">
                        <Box pb="12px">
                            <Text
                                fontSize="1.5rem"
                                color={'black'}
                                fontWeight="bold"
                                bg={'white'}
                                p={4}
                                borderRadius={8}
                                pb="1.5rem"
                            >
                                Applied Student&apos;s Detail&apos;s
                            </Text>
                        </Box>
                        <Box bg={'white'} p={4} borderRadius={8}>
                            <Table variant="simple" color={'black'}>
                                <Thead>
                                    <Tr my=".8rem" pl="0px">
                                        <Th
                                            pl="0px"
                                            color="gray.800"
                                            textAlign={'center'}
                                        >
                                            Name
                                        </Th>
                                        <Th
                                            color="gray.800"
                                            textAlign={'center'}
                                        >
                                            Email
                                        </Th>
                                        <Th
                                            color="gray.800"
                                            textAlign={'center'}
                                        >
                                            Branch & Section
                                        </Th>
                                        <Th
                                            color="gray.800"
                                            textAlign={'center'}
                                        >
                                            Company
                                        </Th>
                                        <Th
                                            color="gray.800"
                                            textAlign={'center'}
                                        >
                                            Company Type
                                        </Th>
                                        <Th
                                            color="gray.800"
                                            textAlign={'center'}
                                        >
                                            Ctc Package
                                        </Th>
                                        <Th
                                            color="gray.800"
                                            textAlign={'center'}
                                        >
                                            Application
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {appliedTableData.map((row) => {
                                        return (
                                            <AppliedTable
                                                key={row.usn}
                                                name={row.name}
                                                branch={row.branch}
                                                section={row.section}
                                                usn={row.usn}
                                                email={row.email}
                                                company={row.company}
                                                ctc={row.ctc}
                                                type={row.type}
                                            />
                                        );
                                    })}
                                </Tbody>
                            </Table>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Applied;
