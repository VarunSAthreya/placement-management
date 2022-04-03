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
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { Loader } from '../../components/Loader';
import ErrorModal from '../../components/Modal/Error';
import { SideBar } from '../../components/Sidebar';
import { StudentsTable } from '../../components/Tables';
import { useGetSelectedPerCompanyQuery } from '../../generated/graphql';
import { getUSNAndRole } from '../../lib/functions';

const CompanyDetails: NextPage = () => {
    const role = useRef(getUSNAndRole().role);

    const { asPath } = useRouter();
    const slug = asPath.split('/')[2].replace(/%20/g, ' ');

    const { data, loading, error } = useGetSelectedPerCompanyQuery({
        variables: { name: slug },
    });
    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const tableBoxShadow = useColorModeValue('0px 2px 3px #eee', '0px');

    if (error) {
        console.log({ error });
        return <ErrorModal message={error.message} />;
    }
    if (loading) return <Loader />;

    return (
        <Flex flexDirection={'row'} bg={primaryBG}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={'290px'}
                width={'100%'}
                px={4}
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
                                Placed Student&apos;s List
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
                                    >
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href="/placed"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                    >
                                        Placed Students
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink
                                        href="#"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                    >
                                        Students List
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
                                {data.company.selected.map((placedStudent) => {
                                    return (
                                        <StudentsTable
                                            key={placedStudent.user.USN}
                                            student={placedStudent.user}
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

export default CompanyDetails;
