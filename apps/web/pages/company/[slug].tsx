import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { CompanyInfoCard } from '../../components/Card';
import { Loader } from '../../components/Loader';
import { SideBar } from '../../components/Sidebar';
import { useGetCompanyDetailsWithStudentEligibilityQuery } from '../../generated/graphql';
import { getUSNAndRole } from '../../lib/functions';

const CompanyDetails = () => {
    const { asPath } = useRouter();
    const router = useRouter();

    const slug = asPath.split('/')[2].replace(/%20/g, ' ');
    console.log({ slug });

    const role = useRef(null);
    const usn = useRef(null);

    useEffect(() => {
        const { USN, role: rol } = getUSNAndRole();
        usn.current = USN;
        role.current = rol;
    }, []);

    const { data, loading, error } =
        useGetCompanyDetailsWithStudentEligibilityQuery({
            variables: { name: slug, usn: getUSNAndRole().USN ?? '' },
        });

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');

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
                <Box mb="22px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
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
                        {data && (
                            <CompanyInfoCard
                                company={data.company}
                                user={usn.current}
                                isEligible={data.isStudentEligible}
                            />
                        )}
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export default CompanyDetails;
