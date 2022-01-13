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
import StudentsTable from '../../components/Tables/StudentsTable';
import SideBar from '../../components/Sidebar/Sidebar';

const studentsTableData = [
    {
        USN: '1JS19CS186',
        name: 'Varun S Athreya',
        email: '1js19cs186@jssateb.ac.in',
        branch: 'CSE',
        section: 'C',
        cgpa: '7.5',
    },
    {
        USN: '1JS19CS146',
        name: 'Sandeep M',
        email: '1js19cs146@jssateb.ac.in',
        branch: 'CSE',
        section: 'C',
        cgpa: '7.5',
    },
    {
        USN: '1JS19CS183',
        name: 'Ullas HP',
        email: '1js19cs183@jssateb.ac.in',
        branch: 'CSE',
        section: 'C',
        cgpa: '7.5',
    },
    {
        USN: '1JS19CS157',
        name: 'Shithin Shetty',
        email: '1js19cs157@jssateb.ac.in',
        branch: 'CSE',
        section: 'C',
        cgpa: '7.5',
    },
];

const Students = () => {
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
                <Box overflowX={{ sm: 'scroll', xl: 'hidden' }}>
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
                                Student&apos;s List
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
                                        href="/students"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Students
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Flex>
                    </Box>
                    <Box bg={'white'} p={4} borderRadius={8}>
                        <Table variant="simple">
                            <Thead>
                                <Tr my=".8rem" color="gray.500">
                                    <Th color="gray.500" textAlign={'center'}>
                                        Name
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        Branch
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        Section
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        USN
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        CGPA
                                    </Th>
                                    <Th color="gray.500" textAlign={'center'}>
                                        More Info
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {studentsTableData.map((student, index) => {
                                    return (
                                        <StudentsTable
                                            key={index}
                                            student={student}
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

export default Students;
