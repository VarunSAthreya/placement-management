import { Box, Flex, Text, Icon, HStack } from '@chakra-ui/react';
import IconBox from '../Icons/IconBox';
import { BsCalendarEvent, BsFillPersonLinesFill } from 'react-icons/bs';
import { FiPackage, FiType } from 'react-icons/fi';
import { Separator } from '../Separator';

const UpcomingCard = () => {
    return (
        <Box p="15px" bg={'#f8f9fa'} my="8px" borderRadius="12px">
            <Flex w="100%" flexDir={'column'}>
                <Flex justifyContent={'center'} flexDirection={'column'} p={2}>
                    <Text
                        as={'span'}
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                        fontSize="3xl"
                        textAlign={'center'}
                        fontWeight="bold"
                        textTransform={'uppercase'}
                    >
                        amazon
                    </Text>
                    <Separator />
                </Flex>
                <HStack p={2} my={1}>
                    <Flex direction="row" align="center" w="100%">
                        <IconBox
                            as="Box"
                            h={'35px'}
                            w={'35px'}
                            bg={
                                'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                            }
                        >
                            <Icon
                                h={'15px'}
                                w={'15px'}
                                color="white"
                                as={FiType}
                            />
                        </IconBox>
                        <Text
                            fontSize="1rem"
                            marginLeft={3}
                            fontWeight={'semibold'}
                            color={'black'}
                        >
                            Product based
                        </Text>
                    </Flex>
                    <Flex
                        direction="row"
                        align="center"
                        w="100%"
                        justifyContent={'center'}
                    >
                        <IconBox
                            as="Box"
                            h={'35px'}
                            w={'35px'}
                            bg={
                                'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                            }
                        >
                            <Icon
                                h={'15px'}
                                w={'15px'}
                                color="white"
                                as={FiPackage}
                            />
                        </IconBox>
                        <Text
                            fontSize="1rem"
                            marginLeft={3}
                            fontWeight={'semibold'}
                            color={'black'}
                        >
                            8 LPA
                        </Text>
                    </Flex>
                    <Flex direction="row" align="center" w="100%">
                        <IconBox
                            as="Box"
                            h={'35px'}
                            w={'35px'}
                            bg={
                                'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                            }
                        >
                            <Icon
                                h={'15px'}
                                w={'15px'}
                                color="white"
                                as={BsCalendarEvent}
                            />
                        </IconBox>
                        <Text
                            fontSize="1rem"
                            marginLeft={3}
                            fontWeight={'semibold'}
                            color={'black'}
                        >
                            10th Aug 2021
                        </Text>
                    </Flex>
                </HStack>
                <Flex direction="row" align="center" w="100%" p={2}>
                    <IconBox
                        as="Box"
                        h={'35px'}
                        w={'35px'}
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                    >
                        <Icon
                            h={'15px'}
                            w={'15px'}
                            color="white"
                            as={BsFillPersonLinesFill}
                        />
                    </IconBox>
                    <Text
                        fontSize="1rem"
                        marginLeft={3}
                        fontWeight={'semibold'}
                        color={'black'}
                    >
                        8 students have Applied
                    </Text>
                </Flex>
                <Text
                    color={'white'}
                    fontSize="md"
                    textAlign={'center'}
                    fontWeight="bold"
                    m={3}
                    p={2}
                    borderRadius={8}
                    textTransform={'uppercase'}
                    bg={'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'}
                >
                    Upcoming
                </Text>
            </Flex>
        </Box>
    );
};

export default UpcomingCard;
