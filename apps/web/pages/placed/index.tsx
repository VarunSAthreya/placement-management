import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Loader } from '../../components/Loader';
import ErrorModal from '../../components/Modal/Error';
import { SideBar } from '../../components/Sidebar';
import { PlacedTable } from '../../components/Tables';
import { useGetSelectedForAllCompaniesQuery } from '../../generated/graphql';
import { getUSNAndRole } from '../../lib/functions';

const Placed: NextPage = () => {
    const role = useRef(getUSNAndRole().role);

    const router = useRouter();
    const { data, loading, error } = useGetSelectedForAllCompaniesQuery();

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const tableBoxShadow = useColorModeValue('0px 2px 3px #eee', '0px');

    if (error) {
        console.log({ error });
        return <ErrorModal message={error.message} />;
    }
    if (loading) return <Loader />;

    return (
        <Flex flexDirection={'row'} bg={primaryBG}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={'290px'}
                width={'100%'}
                p={4}
            >
                <Box mb={{ lg: '24px' }} me={{ lg: '24px' }}>
                    <Flex direction="column">
                        <Box pb={'25px'}>
                            <Flex
                                direction="column"
                                bg={secondaryBG}
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
                                    Placed Student&apos;s List
                                </Text>
                                <Breadcrumb
                                    separator={
                                        <ChevronRightIcon color="gray.500" />
                                    }
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
                                        >
                                            Home
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem isCurrentPage>
                                        <BreadcrumbLink
                                            href="/placed"
                                            color="gray.500"
                                            _hover={{
                                                textDecoration: 'none',
                                                color: '#FF0080',
                                            }}
                                            _focus={{ outline: 'none' }}
                                        >
                                            Placed Students
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Flex>
                        </Box>
                        <Box bg={secondaryBG} p={4} borderRadius={8}>
                            <Flex
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                mb={4}
                                pb={4}
                                pt={2}
                                pl={2}
                            >
                                <Text
                                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                                    bgClip="text"
                                    fontSize="2xl"
                                    fontWeight="extrabold"
                                    textTransform={'uppercase'}
                                >
                                    Student&apos;s Placed(4)
                                </Text>
                                {role.current === 'ADMIN' && (
                                    <Button
                                        fontSize={'1rem'}
                                        size={'lg'}
                                        color={'white'}
                                        rightIcon={<AiFillPlusCircle />}
                                        bg={
                                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                                        }
                                        _hover={{
                                            bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                        type="submit"
                                        textTransform={'uppercase'}
                                        onClick={() => {
                                            router.push(`/placed/add`);
                                        }}
                                    >
                                        Add New Placed Detail
                                    </Button>
                                )}
                            </Flex>
                            <Table
                                variant="simple"
                                color="white"
                                bgGradient={'linear(to-l, #7928CA, #FF0080)'}
                                rounded={'md'}
                                boxShadow={tableBoxShadow}
                            >
                                <Thead>
                                    <Tr my=".8rem">
                                        <Th color="white" textAlign={'center'}>
                                            Companies
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Students
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            No. Students Selected
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Packages
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Student Details
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody bg={secondaryBG}>
                                    {data.companies.map((placed, index) => {
                                        return placed.selected.length > 0 ? (
                                            <PlacedTable
                                                key={index}
                                                placed={placed}
                                            />
                                        ) : null;
                                    })}
                                </Tbody>
                            </Table>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Placed;
