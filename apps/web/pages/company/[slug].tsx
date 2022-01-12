import { Box, Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import SideBar from '../../components/Sidebar/Sidebar';
import CompanyInfoCard from '../../components/Card/CompanyInfoCard';

const companyData = [
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

const companyDetails = ({ company }) => {
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
                    <CompanyInfoCard company={company} />
                </Box>
            </Flex>
        </Flex>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = companyData.map((company) => ({
        params: { slug: company.name },
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
            company: companyData.find((company) => company.name === name),
        },
    };
};

export default companyDetails;
