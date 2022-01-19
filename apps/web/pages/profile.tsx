import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Grid,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { AppliedCard, PlacedCard, ProfileCard } from '../components/Card';
import { Loader } from '../components/Loader';
import SideBar from '../components/Sidebar/Sidebar';
import { useGetProfileDetailsLazyQuery } from '../generated/graphql';
import { getUSNAndRole } from '../lib/functions';

const Profile: NextPage = () => {
    const router = useRouter();
    const usn = useRef(null);

    useEffect(() => {
        usn.current = getUSNAndRole()?.USN;
        if (!usn.current) router.replace('/login');

        profile({
            variables: { usn: usn.current },
        });
    }, []);

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');

    const [profile, { data, loading, error }] = useGetProfileDetailsLazyQuery();

    if (loading || !data) return <Loader />;

    if (error) router.push('/login');

    return (
        <Flex flexDirection={'row'} bg={primaryBG}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={'295px'}
                width={'100%'}
                p={4}
            >
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
                            Student Profile
                        </Text>
                        <Breadcrumb
                            separator={<ChevronRightIcon color="gray.500" />}
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
                                    href="/profile"
                                    color="gray.500"
                                    _hover={{
                                        textDecoration: 'none',
                                        color: '#FF0080',
                                    }}
                                    _focus={{ outline: 'none' }}
                                    variant="no-hover"
                                >
                                    Profile
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Flex>
                </Box>
                <Grid
                    templateColumns={{ sm: '1fr', xl: 'repeat(2, 1fr)' }}
                    gap="22px"
                >
                    <Box
                        p="16px"
                        my={{ sm: '24px', xl: '0px' }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" mb="12px">
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                General Information
                            </Text>
                        </Box>
                        <Box px="5px">
                            {!loading && (
                                <ProfileCard data={data.user.details} />
                            )}
                        </Box>
                    </Box>
                    <Box
                        p="16px"
                        my={{ sm: '24px', xl: '0px' }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" mb="12px">
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Company&apos;s Applied
                            </Text>
                        </Box>
                        <Box px="5px">
                            <Flex direction="column">
                                {!loading &&
                                    data.user.details.applied.map((row) => {
                                        return (
                                            <AppliedCard
                                                key={row.company.name}
                                                data={row.company}
                                            />
                                        );
                                    })}
                            </Flex>
                        </Box>
                        <Box p="12px 5px" my="12px">
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Company Placed
                            </Text>
                        </Box>
                        <Box px="5px">
                            <Flex direction="column">
                                {!loading &&
                                    data.user.details.selected.map((row) => {
                                        console.log(row);
                                        return (
                                            <PlacedCard
                                                key={row.company.name}
                                                data={row.company}
                                            />
                                        );
                                    })}
                            </Flex>
                        </Box>
                    </Box>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Profile;
