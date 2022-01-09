import { Box, Flex, Text } from '@chakra-ui/react';
import AppliedCard from '../components/Card/AppliedCard';
import SideBar from '../components/Sidebar/Sidebar';

const appliedCardData = [
    {
        name: 'Oliver Liam',
        usn: '1JS19CS157',
        email: 'oliver@burrito.com',
        branch: 'CSE',
        section: 'C',
        company: 'Microsoft',
        type: 'Product',
        ctc: '7.5LPA',
    },
    {
        name: 'Oliver Liam',
        usn: '1JS19CS157',
        email: 'oliver@burrito.com',
        branch: 'CSE',
        section: 'C',
        company: 'Microsoft',
        type: 'Product',
        ctc: '7.5LPA',
    },
    {
        name: 'Oliver Liam',
        usn: '1JS19CS157',
        email: 'oliver@burrito.com',
        branch: 'CSE',
        section: 'C',
        company: 'Microsoft',
        type: 'Product',
        ctc: '7.5LPA',
    },
];

const Applied = () => {
    return (
        <Flex flexDirection={'row'} bg={'#f8f9fa'}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={'290px'}
                width={'100%'}
                p={4}
            >
                <Box my={{ lg: '24px' }} me={{ lg: '24px' }}>
                    <Flex direction="column">
                        <Box py="12px">
                            <Text
                                fontSize="1.5rem"
                                color={'black'}
                                fontWeight="bold"
                                bg={'white'}
                                p={4}
                                borderRadius={8}
                                pb="1.5rem"
                            >
                                Applied Student&apos;s Detail&apos;s
                            </Text>
                        </Box>
                        <Box>
                            <Flex direction="column" w="100%">
                                {appliedCardData.map((row) => {
                                    return (
                                        <AppliedCard
                                            key={row.usn}
                                            name={row.name}
                                            branch={row.branch}
                                            section={row.section}
                                            usn={row.usn}
                                            email={row.email}
                                            company={row.company}
                                            ctc={row.ctc}
                                            type={row.type}
                                        />
                                    );
                                })}
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Applied;
