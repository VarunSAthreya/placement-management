import {
    Table,
    Tbody,
    Text,
    Box,
    Th,
    Thead,
    Tr,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
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
                                    Applied Student&apos;s List
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
                                            href="/applied"
                                            color="gray.500"
                                            _hover={{
                                                textDecoration: 'none',
                                                color: '#FF0080',
                                            }}
                                            _focus={{ outline: 'none' }}
                                            variant="no-hover"
                                        >
                                            Applied Students
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Flex>
                        </Box>
                        <Box borderRadius={8}>
                            <Table
                                variant="simple"
                                color="white"
                                bgGradient={'linear(to-l, #7928CA, #FF0080)'}
                                rounded={'md'}
                                boxShadow={'0px 2px 3px #eee'}
                            >
                                <Thead>
                                    <Tr my=".8rem">
                                        <Th color="white" textAlign={'center'}>
                                            Name
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            USN
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Branch & Section
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Company
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Company Type
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Ctc Package
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Application
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody bg={'white'}>
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
