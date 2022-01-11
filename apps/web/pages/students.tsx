import { Table, Tbody, Text, Box, Th, Thead, Tr, Flex } from '@chakra-ui/react';
import StudentsTable from '../components/Tables/StudentsTable';
import SideBar from '../components/Sidebar/Sidebar';

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
                        <Text
                            fontSize="1.5rem"
                            color={'black'}
                            fontWeight="bold"
                            bg={'white'}
                            p={4}
                            borderRadius={8}
                            pb="1.5rem"
                        >
                            Student&apos;s
                        </Text>
                    </Box>
                    <Box bg={'white'} p={4} borderRadius={8}>
                        <Table variant="simple" color={'black'}>
                            <Thead>
                                <Tr my=".8rem" pl="0px" color="gray.800">
                                    <Th pl="0px" color="gray.800">
                                        Name
                                    </Th>
                                    <Th color="gray.800" textAlign={'center'}>
                                        Branch
                                    </Th>
                                    <Th color="gray.800" textAlign={'center'}>
                                        USN
                                    </Th>
                                    <Th color="gray.800" textAlign={'center'}>
                                        CGPA
                                    </Th>
                                    <Th color="gray.800" textAlign={'center'}>
                                        More Info
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {studentsTableData.map((row) => {
                                    return (
                                        <StudentsTable
                                            key={row.name}
                                            name={row.name}
                                            logo={'S'}
                                            usn={row.USN}
                                            email={row.email}
                                            branch={row.branch}
                                            section={row.section}
                                            cgpa={row.cgpa}
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
