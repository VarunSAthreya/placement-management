import {
    Box,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
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

const CompanyDetails = ({ company }) => {
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
                <Box mb="22px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
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
                                Company Details
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
                                        href="/company"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Companies
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
                                        Company Details
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Flex>
                    </Box>
                    <Box borderRadius={8}>
                        <CompanyInfoCard company={company} />
                    </Box>
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

export default CompanyDetails;
