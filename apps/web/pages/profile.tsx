import {
    Box,
    Flex,
    Grid,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import AppliedCard from '../components/Card/AppliedCard';
import ProfileCard from '../components/Card/profileCard';
import SideBar from '../components/Sidebar/Sidebar';

const companyAppliedCardData = [
    {
        company: 'Microsoft',
        type: 'Product',
        ctc: '7.5LPA',
    },
    {
        company: 'Microsoft',
        type: 'Product',
        ctc: '7.5LPA',
    },
];

const profileData = [
    {
        name: 'Ester',
        usn: '1JS19CS196',
        email: 'esterWhite@gmail.com',
        branch: 'CSE',
        section: 'C',
        year: '3rd year',
        cgpa: '8.5',
        tenth: '80%',
        twelth: '95%',
        backlogs: 'None',
    },
];

const Profile = () => {
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
                        bg={useColorModeValue('white', '#242526')}
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
                            {profileData.map((i) => {
                                return (
                                    <ProfileCard
                                        key={i.usn}
                                        name={i.name}
                                        usn={i.usn}
                                        email={i.email}
                                        branch={i.branch}
                                        section={i.section}
                                        year={i.year}
                                        tenth={i.tenth}
                                        twelth={i.twelth}
                                        cgpa={i.cgpa}
                                        backlogs={i.backlogs}
                                    />
                                );
                            })}
                        </Box>
                    </Box>
                    <Box
                        p="16px"
                        my={{ sm: '24px', xl: '0px' }}
                        bg={useColorModeValue('white', '#242526')}
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
                                {companyAppliedCardData.map((row) => {
                                    return (
                                        <AppliedCard
                                            key={row.company}
                                            company={row.company}
                                            ctc={row.ctc}
                                            type={row.type}
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
