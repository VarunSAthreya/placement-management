import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiFillPlusCircle } from 'react-icons/ai';
import { SideBar } from '../../components/Sidebar';
import { StudentsTable } from '../../components/Tables';

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
    const router = useRouter();
    return (
        <Flex
            flexDirection={'row'}
            bg={useColorModeValue('#f8f9fa', '#18191A')}
        >
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
                            bg={useColorModeValue('white', '#242526')}
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
                    <Box
                        bg={useColorModeValue('white', '#242526')}
                        p={4}
                        borderRadius={8}
                    >
                        <Flex
                            flexDirection={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            mb={4}
                            pb={4}
                            pt={2}
                            pl={2}
                        >
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                No.of Student&apos;s (4)
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
                                    router.push(`/studentForm`);
                                }}
                            >
                                Add New Student
                            </Button>
                        </Flex>
                        <Table
                            variant="simple"
                            color="white"
                            bgGradient={'linear(to-l, #7928CA, #FF0080)'}
                            rounded={'md'}
                            boxShadow={useColorModeValue(
                                '0px 2px 3px #eee',
                                '0px'
                            )}
                        >
                            <Thead>
                                <Tr my=".8rem">
                                    <Th color="white" textAlign={'center'}>
                                        Name
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        Branch
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        Section
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        USN
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        CGPA
                                    </Th>
                                    <Th color="white" textAlign={'center'}>
                                        More Info
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody bg={useColorModeValue('white', '#242526')}>
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
