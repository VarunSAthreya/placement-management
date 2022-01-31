import {
    Avatar,
    Box,
    Button,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { getUSNAndRole } from '../../lib/functions';
import Separator from '../Separator/Separator';

enum Branch {
    CSE = 'CSE',
    ECE = 'ECE',
    ISE = 'ISE',
    ME = 'ME',
    CV = 'CV',
    EIE = 'EIE',
    IEM = 'IEM',
}

enum Section {
    A = 'A',
    B = 'B',
    C = 'C',
}

type Props = {
    student: {
        name: string;
        USN: string;
        year: number;
        email: string;
        section: Section;
        branch: Branch;
        eligible: boolean;
        placed: boolean;
        CGPA: number;
        backlogs: number;
        tenth: number;
        twelth: number;
    };
};

const StudentInfoCard: FC<Props> = ({ student }) => {
    const role = getUSNAndRole().role;
    const router = useRouter();

    const {
        name,
        USN,
        email,
        branch,
        section,
        year,
        CGPA,
        tenth,
        twelth,
        backlogs,
    } = student;

    return (
        <Box
            bg={useColorModeValue('white', '#242526')}
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
                            color={useColorModeValue('black', 'white')}
                            fontWeight="bold"
                            ms={{ sm: '8px', md: '0px' }}
                        >
                            {name}
                        </Text>
                        <Text
                            fontSize={{ sm: 'sm', md: 'md' }}
                            color={'gray.500'}
                            fontWeight="semibold"
                        >
                            {USN}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
            <Flex flexDirection={'column'}>
                <Box p="16px" margin={2}>
                    <Box>
                        <Flex
                            justify="space-between"
                            align="center"
                            minHeight="60px"
                            w="100%"
                        >
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="3xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                General Details
                            </Text>
                            {role === 'ADMIN' && (
                                <Button
                                    bg={
                                        'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                                    }
                                    _hover={{
                                        bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                                    }}
                                    _focus={{ outline: 'none' }}
                                    color="white"
                                    fontSize="md"
                                    variant="no-hover"
                                    onClick={() =>
                                        router.push(`/students/update/${USN}`)
                                    }
                                >
                                    EDIT
                                </Button>
                            )}
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
                                    fontWeight={'semibold'}
                                >
                                    USN
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight={'semibold'}
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
                                    fontWeight={'semibold'}
                                >
                                    EMAIL
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight={'semibold'}
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
                                    fontWeight={'semibold'}
                                >
                                    BRANCH & SECTION
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight={'semibold'}
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
                                    fontWeight={'semibold'}
                                >
                                    YEAR
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight={'semibold'}
                                >
                                    {year}
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                <Box p="16px" margin={2}>
                    <Box>
                        <Flex
                            justify="flex-start"
                            align="center"
                            minHeight="60px"
                            w="100%"
                        >
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="3xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Academic Details
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
                                    fontWeight={'semibold'}
                                >
                                    CGPA
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight={'semibold'}
                                >
                                    {CGPA}
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
                                    fontWeight={'semibold'}
                                >
                                    10TH MARK&apos;S PERCENTAGE
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight={'semibold'}
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
                                    fontWeight={'semibold'}
                                >
                                    12TH MARK&apos;S PERCENTAGE
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight={'semibold'}
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
                                    fontWeight={'semibold'}
                                >
                                    BACKLOGS
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight={'semibold'}
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
