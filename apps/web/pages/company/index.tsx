import { Table, Tbody, Text, Box, Th, Thead, Tr, Flex } from '@chakra-ui/react';
import CompanyTable from '../../components/Tables/CompanyTable';
import SideBar from '../../components/Sidebar/Sidebar';

const companyTableData = [
    {
        name: 'Microsoft',
        type: 'Product',
        date: '03-05-2021',
        eligibility: 75,
        ctc: '7.5LPA',
        year: '2021',
    },
    {
        name: 'Add Progress Track',
        type: 'Product',
        date: '03-05-2021',
        eligibility: 75,
        ctc: '7.5LPA',
        year: '2021',
    },
    {
        name: 'Fix Platform Errors',
        type: 'Product',
        date: '03-05-2021',
        eligibility: 75,
        ctc: '7.5LPA',
        year: '2021',
    },
    {
        name: 'Launch our Mobile App',
        type: 'Product',
        date: '03-05-2021',
        eligibility: 75,
        ctc: '7.5LPA',
        year: '2021',
    },
];

const Company = () => {
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
                <Box mb="22px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
                    <Box pb={'25px'}>
                        <Flex direction="column">
                            <Text
                                fontSize="1.5rem"
                                color={'black'}
                                fontWeight="bold"
                                bg={'white'}
                                p={4}
                                borderRadius={8}
                                pb="1.5rem"
                            >
                                Company&apos;s Visiting
                            </Text>
                        </Flex>
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
                                    <Th color="gray.800" textAlign={'center'}>
                                        type
                                    </Th>
                                    <Th color="gray.800" textAlign={'center'}>
                                        Date of Arrival
                                    </Th>
                                    <Th color="gray.800" textAlign={'center'}>
                                        Ctc
                                    </Th>
                                    <Th color="gray.800" textAlign={'center'}>
                                        year
                                    </Th>
                                    <Th color="gray.800" textAlign={'center'}>
                                        More Info
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {companyTableData.map((company, index) => {
                                    return (
                                        <CompanyTable
                                            key={index}
                                            company={company}
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

export default Company;
