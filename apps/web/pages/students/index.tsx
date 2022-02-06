import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Loader } from '../../components/Loader';
import { SideBar } from '../../components/Sidebar';
import { StudentsTable } from '../../components/Tables';
import { useGetAllStudentsCardQuery } from '../../generated/graphql';
import { getUSNAndRole } from '../../lib/functions';

const Students: NextPage = () => {
    const router = useRouter();
    const role = useRef(getUSNAndRole().role);

    const { data, loading, error } = useGetAllStudentsCardQuery();

    const [inputData, setInputData] = useState('');
    const [filteredTable, setFilteredTable] = useState([]);

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const tableBoxShadow = useColorModeValue('0px 2px 3px #eee', '0px');

    useEffect(() => {
        setFilteredTable(data?.allStudentDetails ?? []);
    }, [data]);

    if (loading) return <Loader />;

    const onChangeHandler = (e) => {
        setInputData(e.target.value);
        const regex = new RegExp('.*' + e.target.value + '.*', 'i');

        const filteredData = data.allStudentDetails.filter((d) =>
            d.USN.match(regex)
        );
        setFilteredTable(filteredData);
    };

    return (
        <Flex flexDirection={'row'} bg={primaryBG}>
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
                            bg={secondaryBG}
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
                    <Box bg={secondaryBG} p={4} borderRadius={8}>
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
                            {role.current === 'ADMIN' && (
                                <>
                                    <InputGroup
                                        justifyContent={'flex-end'}
                                        w={'50%'}
                                    >
                                        <Input
                                            type="text"
                                            placeholder="Search Student"
                                            variant={'filled'}
                                            onChange={onChangeHandler}
                                        />
                                        <InputRightElement>
                                            <Icon as={SearchIcon} />
                                        </InputRightElement>
                                    </InputGroup>
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
                                            router.push(`/students/add`);
                                        }}
                                    >
                                        Add New Student
                                    </Button>
                                </>
                            )}
                        </Flex>
                        <Table
                            variant="simple"
                            color="white"
                            bgGradient={'linear(to-l, #7928CA, #FF0080)'}
                            rounded={'md'}
                            boxShadow={tableBoxShadow}
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
                                    {role.current === 'ADMIN' && (
                                        <Th color="white" textAlign={'center'}>
                                            More Info
                                        </Th>
                                    )}
                                </Tr>
                            </Thead>
                            <Tbody bg={secondaryBG}>
                                {filteredTable.map((student) => {
                                    return (
                                        <StudentsTable
                                            key={student.USN}
                                            student={student}
                                            role={role.current}
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
