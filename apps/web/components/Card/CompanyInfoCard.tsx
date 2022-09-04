import {
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { BsBuilding, BsCalendarEvent } from 'react-icons/bs';
import { FiPackage, FiType } from 'react-icons/fi';
import {
    useCreateAppliedMutation,
    useHasStudentAppliedQuery,
} from '../../generated/graphql';
import IconBox from '../Icons/IconBox';
import { Loader } from '../Loader';
import Separator from '../Separator/Separator';

type Props = {
    company: {
        name: string;
        type: string;
        package?: number;
        arrival_date?: string;
        eligibility?: {
            CGPA: number;
            backlogs: number;
            tenth: number;
            twelth: number;
        };
    };
    user: string;
    isEligible: boolean;
    role: string;
};

const CompanyInfoCard: FC<Props> = ({ company, user, isEligible, role }) => {
    const router = useRouter();
    const { name, type, package: CTC, arrival_date } = company;
    const { CGPA, backlogs, tenth, twelth } = company.eligibility;

    const [create, { loading }] = useCreateAppliedMutation();
    const { data, loading: queryLoading } = useHasStudentAppliedQuery({
        variables: { company: name, usn: user },
    });

    const primaryBG = useColorModeValue('white', '#242526');

    console.log({ user, isEligible, role });

    const onApply = () => {
        create({
            variables: {
                input: {
                    userID: user,
                    companyID: name,
                },
            },
        })
            .then(() => router.push('/'))
            .catch((err) => console.log(err));
    };

    if (loading || queryLoading) return <Loader />;

    return (
        <Box>
            <Grid
                templateColumns={{
                    sm: '1fr',
                    md: '1fr 1fr',
                    xl: '1fr 1fr 1fr 1fr 1fr',
                }}
                templateRows={{
                    sm: 'auto auto auto',
                    md: '1fr auto',
                    xl: '1fr',
                }}
                gap="26px"
            >
                <Box
                    bg={primaryBG}
                    borderRadius={8}
                    p="16px"
                    h={{ sm: '220px', xl: '100%' }}
                    gridArea={{ md: '1 / 1 / 2 / 3', xl: '1 / 1 / 2 / 3' }}
                >
                    <Box h="100%" w="100%">
                        <Flex
                            direction="column"
                            align="center"
                            justify="space-evenly"
                            w="100%"
                            py="14px"
                        >
                            <IconBox
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
                                    as={BsBuilding}
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
                                <Text
                                    fontSize="lg"
                                    color="gray.500"
                                    mb={4}
                                    fontWeight={'semibold'}
                                >
                                    COMPANY NAME
                                </Text>
                                <Separator />
                            </Flex>
                            <Text fontSize="2rem" fontWeight={'semibold'}>
                                {name}
                            </Text>
                        </Flex>
                    </Box>
                </Box>
                <Box p="16px" display="flex" bg={primaryBG} borderRadius={8}>
                    <Flex
                        direction="column"
                        align="center"
                        justify="space-evenly"
                        w="100%"
                        py="14px"
                    >
                        <IconBox
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
                            <Text
                                fontSize="lg"
                                color="gray.500"
                                mb={4}
                                fontWeight={'semibold'}
                            >
                                COMPANY TYPE
                            </Text>
                            <Separator />
                        </Flex>
                        <Text fontSize="1.5rem" fontWeight={'semibold'}>
                            {type} Based
                        </Text>
                    </Flex>
                </Box>
                <Box p="16px" display="flex" bg={primaryBG} borderRadius={8}>
                    <Flex
                        direction="column"
                        align="center"
                        justify="space-evenly"
                        w="100%"
                        py="14px"
                    >
                        <IconBox
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
                            <Text
                                fontSize="lg"
                                color="gray.500"
                                mb={4}
                                fontWeight={'semibold'}
                            >
                                CTC PACKAGE
                            </Text>
                            <Separator />
                        </Flex>
                        <Text fontSize="1.5rem" fontWeight={'semibold'}>
                            {CTC}
                        </Text>
                    </Flex>
                </Box>
                <Box p="16px" display="flex" bg={primaryBG} borderRadius={8}>
                    <Flex
                        direction="column"
                        align="center"
                        justify="space-evenly"
                        w="100%"
                        py="14px"
                    >
                        <IconBox
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
                                as={BsCalendarEvent}
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
                            <Text
                                fontSize="lg"
                                mb={4}
                                color="gray.500"
                                fontWeight={'semibold'}
                            >
                                DATE OF ARRIVAL
                            </Text>
                            <Separator />
                        </Flex>
                        <Text fontSize="1.5rem" fontWeight={'semibold'}>
                            {format(
                                new Date(Number(arrival_date)),
                                'dd MMM yyyy'
                            )}
                        </Text>
                    </Flex>
                </Box>
            </Grid>
            <Box p="16px" mt="32px" bg={primaryBG} borderRadius={8}>
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
                            ELIGIBILITY CRITERIA
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
                                    router.push(`/company/update/${name}`)
                                }
                            >
                                EDIT
                            </Button>
                        )}
                        {isEligible && (
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
                                onClick={onApply}
                                disabled={data?.hasStudentApplied}
                            >
                                {data?.hasStudentApplied ? 'APPLIED' : 'APPLY'}
                            </Button>
                        )}
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
        </Box>
    );
};

export default CompanyInfoCard;
