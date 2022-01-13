import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import Separator from '../Separator/Separator';
import React from 'react';

const StudentInfoCard = ({ student }) => {
    const {
        name,
        USN,
        email,
        branch,
        section,
        year,
        cgpa,
        tenth,
        twelth,
        backlogs,
    } = student;
    return (
        <Box
            bg={'white'}
            p={2}
            mb={4}
            borderRadius={8}
            display={'flex'}
            flexDirection={'column'}
        >
            <Box display={'flex'} flexDirection={'column'}>
                <Flex
                    align="center"
                    mb={{ sm: '10px', md: '0px' }}
                    direction={{ sm: 'column', md: 'row' }}
                    justify={'center'}
                    p="5px"
                    w={{ sm: '100%' }}
                    textAlign={{ sm: 'center', md: 'start' }}
                >
                    <Avatar
                        me={{ md: '22px' }}
                        name={name}
                        color={'white'}
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                        w="70px"
                        h="70px"
                        borderRadius="15px"
                    />
                    <Flex
                        direction="column"
                        maxWidth="100%"
                        my={{ sm: '14px' }}
                    >
                        <Text
                            fontSize={{ sm: 'lg', lg: '2.3rem' }}
                            color={'black'}
                            fontWeight="bold"
                            ms={{ sm: '8px', md: '0px' }}
                        >
                            {name}
                        </Text>
                        <Text
                            fontSize={{ sm: 'sm', md: 'md' }}
                            color={'black'}
                            fontWeight="semibold"
                        >
                            {USN}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
            <Flex flexDirection={'column'}>
                <Box p="16px" marginRight={'15px'}>
                    <Box>
                        <Flex
                            justify="center"
                            align="center"
                            minHeight="60px"
                            w="100%"
                        >
                            <Text
                                fontSize="1.3rem"
                                color={'gray.500'}
                                textTransform={'uppercase'}
                            >
                                General Information
                            </Text>
                        </Flex>
                        <Separator />
                    </Box>
                    <Box>
                        <Flex
                            direction={{ sm: 'column', md: 'column' }}
                            w="100%"
                            py="1rem"
                        >
                            <Flex
                                align="center"
                                justifyContent="space-between"
                                mb="12px"
                                borderRadius={8}
                                bg={'#f8f9fa'}
                                p={3}
                            >
                                <Text
                                    fontSize="md"
                                    color={'gray.500'}
                                    me="10px"
                                >
                                    USN
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight="400"
                                >
                                    {USN}
                                </Text>
                            </Flex>
                            <Flex
                                align="center"
                                justifyContent="space-between"
                                mb="12px"
                                borderRadius={8}
                                bg={'#f8f9fa'}
                                p={3}
                            >
                                <Text
                                    fontSize="md"
                                    color={'gray.500'}
                                    me="10px"
                                >
                                    EMAIL
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight="400"
                                >
                                    {email}
                                </Text>
                            </Flex>
                            <Flex
                                align="center"
                                justifyContent="space-between"
                                mb="12px"
                                borderRadius={8}
                                bg={'#f8f9fa'}
                                p={3}
                            >
                                <Text
                                    fontSize="md"
                                    color={'gray.500'}
                                    me="10px"
                                >
                                    BRANCH & SECTION
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight="400"
                                >
                                    {branch} {section}
                                </Text>
                            </Flex>
                            <Flex
                                align="center"
                                justifyContent="space-between"
                                mb="12px"
                                borderRadius={8}
                                bg={'#f8f9fa'}
                                p={3}
                            >
                                <Text
                                    fontSize="md"
                                    color={'gray.500'}
                                    me="10px"
                                >
                                    YEAR
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight="400"
                                >
                                    {year}
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                <Box p="16px">
                    <Box>
                        <Flex
                            justify="center"
                            align="center"
                            minHeight="60px"
                            w="100%"
                        >
                            <Text
                                fontSize="lg"
                                color={'gray.500'}
                                textTransform={'uppercase'}
                            >
                                Academic Information
                            </Text>
                        </Flex>
                        <Separator />
                    </Box>
                    <Box>
                        <Flex
                            direction={{ sm: 'column', md: 'column' }}
                            w="100%"
                            py="1rem"
                        >
                            <Flex
                                align="center"
                                justifyContent="space-between"
                                mb="12px"
                                borderRadius={8}
                                bg={'#f8f9fa'}
                                p={3}
                            >
                                <Text
                                    fontSize="md"
                                    color={'gray.500'}
                                    me="10px"
                                >
                                    CGPA
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight="400"
                                >
                                    {cgpa}
                                </Text>
                            </Flex>
                            <Flex
                                align="center"
                                justifyContent="space-between"
                                mb="12px"
                                borderRadius={8}
                                bg={'#f8f9fa'}
                                p={3}
                            >
                                <Text
                                    fontSize="md"
                                    color={'gray.500'}
                                    me="10px"
                                >
                                    10TH MARK&apos;S PERCENTAGE
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight="400"
                                >
                                    {tenth}
                                </Text>
                            </Flex>
                            <Flex
                                align="center"
                                justifyContent="space-between"
                                mb="12px"
                                borderRadius={8}
                                bg={'#f8f9fa'}
                                p={3}
                            >
                                <Text
                                    fontSize="md"
                                    color={'gray.500'}
                                    me="10px"
                                >
                                    12TH MARK&apos;S PERCENTAGE
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight="400"
                                >
                                    {twelth}
                                </Text>
                            </Flex>
                            <Flex
                                align="center"
                                justifyContent="space-between"
                                mb="12px"
                                borderRadius={8}
                                bg={'#f8f9fa'}
                                p={3}
                            >
                                <Text
                                    fontSize="md"
                                    color={'gray.500'}
                                    me="10px"
                                >
                                    BACKLOGS
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight="400"
                                >
                                    {backlogs}
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default StudentInfoCard;
