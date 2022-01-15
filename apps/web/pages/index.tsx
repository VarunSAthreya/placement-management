import {
    Box,
    Flex,
    Grid,
    SimpleGrid,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import StatsCard from '../components/Card/StatsCard';
import BarChart from '../components/Charts/BarChart';
import DonutChart from '../components/Charts/DonutChart';
import LineChart from '../components/Charts/LineChart';
import ProgressChart from '../components/Charts/ProgressChart';
import SideBar from '../components/Sidebar/Sidebar';

const Home = () => {
    return (
        <Flex
            flexDirection={'row'}
            bg={useColorModeValue('#f8f9fa', '#18191A')}
        >
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
                    spacing={24}
                    mb={4}
                >
                    <StatsCard />
                    <StatsCard />
                    <StatsCard />
                    <StatsCard />
                </SimpleGrid>
                <Grid
                    templateColumns={{ sm: '1fr', lg: '1.3fr 1.7fr' }}
                    templateRows={{ sm: 'repeat(2, 1fr)', lg: '1fr' }}
                    gap="24px"
                    my={{ lg: '26px' }}
                >
                    <Box
                        p="16px"
                        bg={useColorModeValue('white', '#242526')}
                        borderRadius={16}
                    >
                        <Box>
                            <Flex direction="column" w="100%">
                                <BarChart />
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        p="28px 10px 16px 0px"
                        mb={{ sm: '26px', lg: '0px' }}
                        bg={useColorModeValue('white', '#242526')}
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
                    <Box
                        p="16px"
                        bg={useColorModeValue('white', '#242526')}
                        borderRadius={16}
                    >
                        <Box>
                            <Flex direction="column" w="100%">
                                <ProgressChart />
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        p="28px 10px 16px 0px"
                        mb={{ sm: '26px', lg: '0px' }}
                        bg={useColorModeValue('white', '#242526')}
                        borderRadius={16}
                    >
                        <Box w="100%" h={{ sm: '300px' }} ps="8px">
                            <DonutChart />
                        </Box>
                    </Box>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Home;
