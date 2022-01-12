import { Box, Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import SideBar from '../../components/Sidebar/Sidebar';
import StudentInfoCard from '../../components/Card/StudentInfoCard';

const studentData = [
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

const StudentDetails = ({ student }) => {
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
                <Box px={4} borderRadius={8}>
                    <StudentInfoCard student={student} />
                </Box>
            </Flex>
        </Flex>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = studentData.map((student) => ({
        params: { slug: student.USN },
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
    const usn = ctx.params?.slug as string;
    return {
        props: {
            student: studentData.find((student) => student.USN === usn),
        },
    };
};

export default StudentDetails;
