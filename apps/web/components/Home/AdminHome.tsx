import {
    Box,
    Flex,
    Grid,
    SimpleGrid,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    BsBuilding,
    BsFillPersonLinesFill,
    BsPeople,
    BsPersonPlus,
} from 'react-icons/bs';
import { useGetAllDetailsQuery } from '../../generated/graphql';
import { StatsCard } from '../Card';
import { BarChart, DonutChart, LineChart, ProgressChart } from '../Charts';
import { Loader } from '../Loader';
import ErrorModal from '../Modal/Error';
import { SideBar } from '../Sidebar';

const AdminHome = () => {
    const { data, loading, error } = useGetAllDetailsQuery();

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');

    if (error) {
        console.log({ error });
        return <ErrorModal message={error.message} />;
    }
    if (loading || !data) return <Loader />;

    return (
        <Flex flexDirection={{ base: 'column', lg: 'row' }} bg={primaryBG}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={{ base: 0, md: '295px' }}
                width={'100%'}
                p={4}
            >
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 2, xl: 4 }}
                    spacing={{ base: 4, md: 8, lg: 12 }}
                    mb={4}
                >
                    {!loading && (
                        <StatsCard
                            title={'No.of Students'}
                            count={data.studentCount}
                            icon={BsPeople}
                        />
                    )}
                    {!loading && (
                        <StatsCard
                            title={'No.of Companies'}
                            count={data.companyCount}
                            icon={BsBuilding}
                        />
                    )}
                    {!loading && (
                        <StatsCard
                            title={'No.of Applications'}
                            count={data.appliedCount}
                            icon={BsFillPersonLinesFill}
                        />
                    )}
                    {!loading && (
                        <StatsCard
                            title={'No.of Offers Given'}
                            count={data.selectedCount}
                            icon={BsPersonPlus}
                        />
                    )}
                </SimpleGrid>
                <Grid
                    templateColumns={{ sm: '1fr', lg: '1.3fr 1.7fr' }}
                    templateRows={{ sm: 'repeat(2, 1fr)', lg: '1fr' }}
                    gap="24px"
                    my={{ lg: '26px' }}
                >
                    <Box p="16px" bg={secondaryBG} borderRadius={16}>
                        <Box>
                            <Flex direction="column" w="100%">
                                {!loading && (
                                    <BarChart
                                        branch={data.allStudentDetails.map(
                                            (b) => b.branch
                                        )}
                                        students={data.allStudentDetails
                                            .map((s) => s.branch)
                                            .reduce(
                                                (a, b) =>
                                                    (a[b] = a[b] + 1 || 1) && a,
                                                []
                                            )}
                                        placed={data.allStudentDetails
                                            .map((p) => ({
                                                branch: p.branch,
                                                placed:
                                                    p.placed === true
                                                        ? 'Placed'
                                                        : 'NotPlaced',
                                            }))
                                            .reduce(
                                                (acc, { branch, placed }) => {
                                                    acc[branch] ??= {
                                                        placed: [],
                                                    };
                                                    if (Array.isArray(placed))
                                                        acc[branch].placed =
                                                            acc[
                                                                branch
                                                            ].placed.concat(
                                                                placed
                                                            );
                                                    else
                                                        acc[branch].placed.push(
                                                            placed
                                                        );

                                                    return acc;
                                                },
                                                {}
                                            )}
                                    />
                                )}
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        p="28px 10px 16px 0px"
                        mb={{ sm: '26px', lg: '0px' }}
                        bg={secondaryBG}
                        borderRadius={16}
                    >
                        <Box mb="20px" pl="22px">
                            <Flex direction="column" alignSelf="flex-start">
                                <Text
                                    fontSize="lg"
                                    color={'#7928CA'}
                                    fontWeight="bold"
                                    mb="6px"
                                >
                                    Students
                                </Text>
                                <Text
                                    fontSize="md"
                                    fontWeight="medium"
                                    color="gray.400"
                                >
                                    in 2021
                                </Text>
                            </Flex>
                        </Box>
                        <Box w="100%" h={{ sm: '300px' }} ps="8px">
                            <LineChart />
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    templateColumns={{ sm: '1fr', lg: '1.3fr 1.7fr' }}
                    templateRows={{ sm: 'repeat(2, 1fr)', lg: '1fr' }}
                    gap="24px"
                    my={{ lg: '26px' }}
                >
                    <Box p="16px" bg={secondaryBG} borderRadius={16}>
                        <Box>
                            <Flex direction="column" w="100%">
                                {!loading && (
                                    <ProgressChart
                                        selected={data.companies.map(
                                            (c) => c.selected.length
                                        )}
                                        category={data.companies.map(
                                            (c) => c.name
                                        )}
                                    />
                                )}
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        p="28px 10px 16px 0px"
                        mb={{ sm: '26px', lg: '0px' }}
                        bg={secondaryBG}
                        borderRadius={16}
                    >
                        <Box w="100%" h={{ sm: '300px' }} ps="8px">
                            {!loading && (
                                <DonutChart
                                    data={[
                                        data.studentCount - data.eligibleCount,
                                        data.eligibleCount,
                                        data.placedStudentCount,
                                    ]}
                                />
                            )}
                        </Box>
                    </Box>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default AdminHome;
