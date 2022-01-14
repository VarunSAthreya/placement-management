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
    Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiFillPlusCircle } from 'react-icons/ai';
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
    const router = useRouter();
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
                        <Flex
                            flexDirection={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            mb={4}
                            pb={4}
                            pt={2}
                        >
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                No.of Company&apos;s (4)
                            </Text>
                            <Button
                                fontSize={'1rem'}
                                size={'lg'}
                                color={'white'}
                                rightIcon={<AiFillPlusCircle />}
                                bg={
                                    'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                                }
                                _hover={{
                                    bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                                }}
                                _focus={{ outline: 'none' }}
                                variant="no-hover"
                                type="submit"
                                textTransform={'uppercase'}
                                onClick={() => {
                                    router.push(`/companyForm`);
                                }}
                            >
                                Add New Company
                            </Button>
                        </Flex>
                        <Table
                            variant="simple"
                            color="white"
                            bgGradient={'linear(to-l, #7928CA, #FF0080)'}
                            rounded={'md'}
                            boxShadow={'0px 2px 3px #eee'}
                        >
                            <Thead>
                                <Tr my=".8rem" pl="0px">
                                    <Th color="white" textAlign={'center'}>
                                        Name
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        type
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        Date of Arrival
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        Ctc
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        year
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        More Info
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody bg={'white'}>
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
