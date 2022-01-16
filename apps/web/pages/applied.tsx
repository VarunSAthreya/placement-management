import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { SideBar } from '../components/Sidebar';
import { AppliedTable } from '../components/Tables';
import { useGetAllAppliedQuery } from '../generated/graphql';

const Applied = () => {
    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const tableBoxShadow = useColorModeValue('0px 2px 3px #eee', '0px');

    const { data, loading, error } = useGetAllAppliedQuery();

    if (loading) return <p>Loading...</p>;

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
                                    Applied Student&apos;s List
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
                                            variant="no-hover"
                                        >
                                            Home
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem isCurrentPage>
                                        <BreadcrumbLink
                                            href="/applied"
                                            color="gray.500"
                                            _hover={{
                                                textDecoration: 'none',
                                                color: '#FF0080',
                                            }}
                                            _focus={{ outline: 'none' }}
                                            variant="no-hover"
                                        >
                                            Applied Students
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Flex>
                        </Box>
                        <Box borderRadius={8}>
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
                                            Name
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            USN
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Branch & Section
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Company
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Company Type
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Ctc Package
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Application
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody bg={secondaryBG}>
                                    {data.applied.map((row, index) => {
                                        return (
                                            <AppliedTable
                                                key={index}
                                                data={row}
                                            />
                                        );
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

export default Applied;
