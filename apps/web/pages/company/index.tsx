import { gql, useQuery } from '@apollo/client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import SideBar from '../../components/Sidebar/Sidebar';
import CompanyTable from '../../components/Tables/CompanyTable';

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

const query = gql`
    query {
        companies {
            name
            type
            arrival_date
            package
            eligibility {
                CGPA
                backlogs
            }
        }
    }
`;

const Company = () => {
    const { loading, error, data } = useQuery(query);
    console.log({ data });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

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
                        <Flex
                            direction="column"
                            bg={'white'}
                            p={4}
                            borderRadius={8}
                            pb="1.5rem"
                        >
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Company&apos;s List
                            </Text>
                            <Breadcrumb
                                separator={
                                    <ChevronRightIcon color="gray.500" />
                                }
                            >
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href="/"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink
                                        href="/company"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Companies
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Flex>
                    </Box>
                    <Box bg={'white'} p={4} borderRadius={8}>
                        <Table variant="simple">
                            <Thead>
                                <Tr my=".8rem" pl="0px">
                                    <Th color="gray.500" textAlign={'center'}>
                                        Name
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        type
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        Date of Arrival
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        Ctc
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        year
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        More Info
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.companies.map((company, index) => {
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
