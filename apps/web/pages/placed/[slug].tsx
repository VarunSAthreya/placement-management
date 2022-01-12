import { Box, Flex, Table, Tbody, Th, Thead, Tr, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import SideBar from '../../components/Sidebar/Sidebar';
import StudentsTable from '../../components/Tables/StudentsTable';

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

const companyDetails = ({ placed }) => {
    const placedStudentDetails = placed.members;
    console.log(placedStudentDetails);
    return (
        <Flex flexDirection={'row'} bg={'#f8f9fa'}>
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

export default companyDetails;
