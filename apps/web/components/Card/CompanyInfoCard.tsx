import { Box, Button, Flex, Grid, Icon, Text } from '@chakra-ui/react';
import Separator from '../Separator/Separator';
import IconBox from '../Icons/IconBox';
import React from 'react';
import { FiType, FiPackage } from 'react-icons/fi';
import { BsCalendarEvent } from 'react-icons/bs';

const CompanyInfoCard = ({ company }) => {
    const { name, date, type, ctc, cgpa, tenth, twelth, backlogs } = company;
    return (
        <Box>
            <Grid
                templateColumns={{
                    sm: '1fr',
                    md: '1fr 1fr',
                    xl: '1fr 1fr 1fr 1fr ',
                }}
                templateRows={{
                    sm: 'auto auto auto',
                    md: '1fr auto',
                    xl: '1fr',
                }}
                gap="26px"
            >
                <Box
                    bg={'white'}
                    borderRadius={8}
                    p="16px"
                    h={{ sm: '220px', xl: '100%' }}
                    gridArea={{ md: '1 / 1 / 2 / 3', xl: '1 / 1 / 2 / 3' }}
                >
                    <Box h="100%" w="100%">
                        <Flex
                            direction="column"
                            h="100%"
                            p="0px 10px 20px 10px"
                            w="100%"
                        >
                            <Box
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-between'}
                            >
                                <Text
                                    fontSize="2rem"
                                    letterSpacing="2px"
                                    fontWeight="bold"
                                    mb={4}
                                >
                                    {name}
                                </Text>
                                <Flex
                                    justify={'space-between'}
                                    align={'center'}
                                    p={4}
                                    color={'white'}
                                    borderRadius={8}
                                    bg={
                                        'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                                    }
                                >
                                    <Flex align={'center'}>
                                        <IconBox
                                            as="box"
                                            h={'40px'}
                                            w={'40px'}
                                            marginRight="10px"
                                            bg={'white'}
                                        >
                                            <Icon
                                                h={'15px'}
                                                w={'15px'}
                                                color="black"
                                                as={BsCalendarEvent}
                                            />
                                        </IconBox>
                                        <Text
                                            fontSize="lg"
                                            letterSpacing="2px"
                                            fontWeight="bold"
                                        >
                                            DATE OF ARRIVAL
                                        </Text>
                                    </Flex>
                                    <Text>{date}</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <Box
                    p="16px"
                    display="flex"
                    align="center"
                    justify="center"
                    bg={'white'}
                    borderRadius={8}
                >
                    <Flex
                        direction="column"
                        align="center"
                        justify="space-evenly"
                        w="100%"
                        py="14px"
                    >
                        <IconBox
                            as="box"
                            h={'60px'}
                            w={'60px'}
                            bg={
                                'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                            }
                        >
                            <Icon
                                h={'24px'}
                                w={'24px'}
                                color="white"
                                as={FiType}
                            />
                        </IconBox>
                        <Flex
                            direction="column"
                            m="14px"
                            justify="center"
                            textAlign="center"
                            align="center"
                            w="100%"
                        >
                            <Text fontSize="lg" fontWeight="bold" mb={4}>
                                Company Type
                            </Text>
                            <Separator />
                        </Flex>
                        <Text fontSize="1.5rem" fontWeight="bold">
                            {type} Based
                        </Text>
                    </Flex>
                </Box>
                <Box
                    p="16px"
                    display="flex"
                    align="center"
                    justify="center"
                    bg={'white'}
                    borderRadius={8}
                >
                    <Flex
                        direction="column"
                        align="center"
                        justify="space-evenly"
                        w="100%"
                        py="14px"
                    >
                        <IconBox
                            as="box"
                            h={'60px'}
                            w={'60px'}
                            bg={
                                'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                            }
                        >
                            <Icon
                                h={'24px'}
                                w={'24px'}
                                color="white"
                                as={FiPackage}
                            />
                        </IconBox>
                        <Flex
                            direction="column"
                            m="14px"
                            justify="center"
                            textAlign="center"
                            align="center"
                            w="100%"
                        >
                            <Text fontSize="lg" fontWeight="bold" mb={4}>
                                CTC Package
                            </Text>
                            <Separator />
                        </Flex>
                        <Text fontSize="1.5rem" fontWeight="bold">
                            {ctc}
                        </Text>
                    </Flex>
                </Box>
            </Grid>
            <Box p="16px" mt="32px" bg={'white'} borderRadius={8}>
                <Box>
                    <Flex
                        justify="space-between"
                        align="center"
                        minHeight="60px"
                        w="100%"
                    >
                        <Text fontSize="lg" color={'black'} fontWeight="bold">
                            Eligibililty Criteria
                        </Text>
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
                        >
                            APPLY
                        </Button>
                    </Flex>
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
                                color={'black'}
                                fontWeight="bold"
                                me="10px"
                            >
                                CGPA
                            </Text>
                            <Text
                                fontSize="md"
                                color="gray.500"
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
                                color={'black'}
                                fontWeight="bold"
                                me="10px"
                            >
                                10th Mark&apos;s Percentage
                            </Text>
                            <Text
                                fontSize="md"
                                color="gray.500"
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
                                color={'black'}
                                fontWeight="bold"
                                me="10px"
                            >
                                12th Mark&apos;s Percentage
                            </Text>
                            <Text
                                fontSize="md"
                                color="gray.500"
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
                                color={'black'}
                                fontWeight="bold"
                                me="10px"
                            >
                                BackLogs
                            </Text>
                            <Text
                                fontSize="md"
                                color="gray.500"
                                fontWeight="400"
                            >
                                {backlogs}
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default CompanyInfoCard;
