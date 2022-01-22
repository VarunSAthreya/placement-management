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
import { useGetTableCountQuery } from '../../generated/graphql';
import { StatsCard } from '../Card';
import { BarChart, DonutChart, LineChart, ProgressChart } from '../Charts';
import { Loader } from '../Loader';
import { SideBar } from '../Sidebar';

const AdminHome = () => {
    const { data, loading, error } = useGetTableCountQuery();

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');

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
                <SimpleGrid
                    columns={{ sm: 1, md: 2, xl: 4 }}
                    spacing={12}
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
                                <BarChart />
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
                                <ProgressChart />
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
