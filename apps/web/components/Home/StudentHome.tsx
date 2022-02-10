import {
    Box,
    Flex,
    Grid,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useGetStudentHomeDetailsQuery } from '../../generated/graphql';
import { getUSNAndRole } from '../../lib/functions';
import { AppliedCard, PlacedCard, UpcomingCard } from '../Card';
import { Loader } from '../Loader';
import ErrorModal from '../Modal/Error';
import { SideBar } from '../Sidebar';

const StudentHome: NextPage = () => {
    const usn = getUSNAndRole().USN;

    const { data, loading, error } = useGetStudentHomeDetailsQuery({
        variables: { usn },
    });

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const textHeight = useBreakpointValue({ base: '20%', md: '30%' });

    if (error) {
        console.log({ error });
        return <ErrorModal message={error.message} />;
    }
    if (loading || !data) return <Loader />;

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
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    bg={secondaryBG}
                    borderRadius={8}
                >
                    <Flex
                        p={6}
                        flexDir={'column'}
                        justifyContent={'flex-start'}
                    >
                        <Heading fontSize={{ base: '3xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: textHeight,
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    zIndex: -1,
                                }}
                            >
                                WELCOME TO
                            </Text>
                            <br />{' '}
                            <Text
                                as={'span'}
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Placement Portal
                            </Text>{' '}
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.500'}
                            mt={3}
                        >
                            Here You get all the details about the upcoming
                            company&apos;s visting our college and all there
                            package details.
                        </Text>
                    </Flex>
                </Stack>
                <Grid
                    templateColumns={{ sm: '1fr', xl: 'repeat(2, 1fr)' }}
                    gap="22px"
                    mt={8}
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
                                Upcoming Company&apos;s
                            </Text>
                        </Box>
                        <Box px="5px">
                            {!loading &&
                                data.getUpcomingCompanies.map((company) => (
                                    <UpcomingCard
                                        key={company.name}
                                        data={company}
                                    />
                                ))}
                        </Box>
                    </Box>
                    {/*Applied & Placed*/}
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
                                    data.studentDetails.applied.map((row) => {
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
                                    data.studentDetails.selected.map((row) => {
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

export default StudentHome;
