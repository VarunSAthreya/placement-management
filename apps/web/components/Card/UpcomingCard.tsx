import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { BsCalendarEvent, BsFillPersonLinesFill } from 'react-icons/bs';
import { FiPackage, FiType } from 'react-icons/fi';
import IconBox from '../Icons/IconBox';
import { Separator } from '../Separator';

type Props = {
    data: ICompany;
};

const UpcomingCard: FC<Props> = ({ data }) => {
    const { name, type, arrival_date, package: CTC, applied } = data;
    const router = useRouter();

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
                        onClick={() => router.push(`/company/${name}`)}
                        cursor={'pointer'}
                    >
                        {name}
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
                            {type} based
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
                            {CTC}
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
                            {format(
                                new Date(Number(arrival_date)),
                                'dd MMM yyyy'
                            )}
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
                        {applied.length} students have Applied
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
                    onClick={() => router.push(`/company/${name}`)}
                    cursor={'pointer'}
                >
                    Upcoming
                </Text>
            </Flex>
        </Box>
    );
};

export default UpcomingCard;
