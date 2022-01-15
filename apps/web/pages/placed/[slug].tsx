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
import { GetStaticPaths, GetStaticProps, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { SideBar } from '../../components/Sidebar';
import { StudentsTable } from '../../components/Tables';

const placedData = [
    {
        name: 'Purity UI Version',
        members: [
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
        ],
        ctc: '8LPA',
    },
    {
        name: 'Add Progress Track',
        members: [
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
        ],
        ctc: '8LPA',
    },
    {
        name: 'Fix Platform Errors',
        members: [
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
        ],
        ctc: '8LPA',
    },
    {
        name: 'Launch our Mobile App',
        members: [
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
        ],
        ctc: '8LPA',
    },
];

const CompanyDetails = ({ placed }) => {
    const placedStudentDetails = placed.members;
    console.log(placedStudentDetails);
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
                px={4}
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
                                        variant="no-hover"
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
                                        variant="no-hover"
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
                                        variant="no-hover"
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
                                {placedStudentDetails.map(
                                    (placedStudent, index) => {
                                        return (
                                            <StudentsTable
                                                key={index}
                                                student={placedStudent}
                                            />
                                        );
                                    }
                                )}
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = placedData.map((placed) => ({
        params: { slug: placed.name },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = (ctx: {
    params?: ParsedUrlQuery;
    preview?: boolean;
    previewData?: PreviewData;
}) => {
    const name = ctx.params?.slug as string;
    return {
        props: {
            placed: placedData.find((placed) => placed.name === name),
        },
    };
};

export default CompanyDetails;
