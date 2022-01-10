import { Avatar, Box, Flex, Grid, Text } from '@chakra-ui/react';
import CompanyAppliedCard from '../components/Card/CompanyAppliedCard';
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
        <Flex flexDirection={'row'} bg={'#f8f9fa'}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={'295px'}
                width={'100%'}
                p={4}
            >
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    bg={'white'}
                    p={4}
                    mb={6}
                    borderRadius={8}
                >
                    <Flex
                        align="center"
                        mb={{ sm: '10px', md: '0px' }}
                        direction={{ sm: 'column', md: 'row' }}
                        w={{ sm: '100%' }}
                        textAlign={{ sm: 'center', md: 'start' }}
                    >
                        <Avatar
                            me={{ md: '22px' }}
                            name={'es'}
                            bg={
                                'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                            }
                            w="50px"
                            h="50px"
                            borderRadius="15px"
                        />
                        <Flex
                            direction="column"
                            maxWidth="100%"
                            my={{ sm: '14px' }}
                        >
                            <Text
                                fontSize={{ sm: 'lg', lg: 'xl' }}
                                color={'black'}
                                fontWeight="bold"
                                ms={{ sm: '8px', md: '0px' }}
                            >
                                Esthera Jackson
                            </Text>
                            <Text
                                fontSize={{ sm: 'sm', md: 'md' }}
                                color={'black'}
                                fontWeight="semibold"
                            >
                                esthera@simmmple.com
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
                <Grid
                    templateColumns={{ sm: '1fr', xl: 'repeat(2, 1fr)' }}
                    gap="22px"
                >
                    <Box
                        p="16px"
                        my={{ sm: '24px', xl: '0px' }}
                        bg={'white'}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" mb="12px">
                            <Text
                                fontSize="lg"
                                color={'black'}
                                fontWeight="bold"
                            >
                                Profile Information
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
                        bg={'white'}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" mb="12px">
                            <Text
                                fontSize="lg"
                                color={'black'}
                                fontWeight="bold"
                            >
                                Company&apos;s Applied
                            </Text>
                        </Box>
                        <Box px="5px">
                            <Flex direction="column">
                                {companyAppliedCardData.map((row) => {
                                    return (
                                        <CompanyAppliedCard
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
