import { Table, Tbody, Text, Box, Th, Thead, Tr, Flex } from '@chakra-ui/react';
import {
    AdobexdLogo,
    AtlassianLogo,
    SlackLogo,
    SpotifyLogo,
} from '../components/Icons/Icons';
import CompanyTable from '../components/Tables/CompanyTable';
import SideBar from '../components/Sidebar/Sidebar';

const companyTableData = [
    {
        logo: AdobexdLogo,
        name: 'Purity UI Version',
        type: 'Product Based',
        date: '03-05-2021',
        eligibility: 75,
        ctc: '7.5LPA',
        year: '2021',
    },
    {
        logo: AtlassianLogo,
        name: 'Add Progress Track',
        type: 'Product Based',
        date: '03-05-2021',
        eligibility: 75,
        ctc: '7.5LPA',
        year: '2021',
    },
    {
        logo: SlackLogo,
        name: 'Fix Platform Errors',
        type: 'Product Based',
        date: '03-05-2021',
        eligibility: 75,
        ctc: '7.5LPA',
        year: '2021',
    },
    {
        logo: SpotifyLogo,
        name: 'Launch our Mobile App',
        type: 'Product Based',
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
                <Box my="22px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
                    <Box p="6px 0px 22px 0px">
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
                                {companyTableData.map((row) => {
                                    return (
                                        <CompanyTable
                                            key={row.name}
                                            name={row.name}
                                            logo={row.logo}
                                            type={row.type}
                                            date={row.date}
                                            eligibility={row.eligibility}
                                            ctc={row.ctc}
                                            year={row.year}
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
