import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import ErrorModal from '../components/Modal/Error';
import { SideBar } from '../components/Sidebar';
import { AppliedTable } from '../components/Tables';
import { useGetAllAppliedQuery } from '../generated/graphql';

const Applied: NextPage = () => {
    const [inputData, setInputData] = useState('');
    const [filteredTable, setFilteredTable] = useState([]);
    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const tableBoxShadow = useColorModeValue('0px 2px 3px #eee', '0px');

    const { data, loading, error } = useGetAllAppliedQuery();

    useEffect(() => {
        setFilteredTable(data?.applied ?? []);
    }, [data]);

    if (error) {
        console.log({ error });
        return <ErrorModal message={error.message} />;
    }
    if (loading) return <Loader />;

    const onChangeHandler = (e) => {
        setInputData(e.target.value);
        const regex = new RegExp('.*' + e.target.value + '.*', 'i');

        const filteredData = data.applied.filter((d) =>
            d.company.name.match(regex)
        );
        setFilteredTable(filteredData);
    };

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
                        <Box bg={secondaryBG} p={4} borderRadius={8}>
                            <Flex
                                flexDirection={'row'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                mb={4}
                                pb={4}
                                pt={2}
                            >
                                <Text
                                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                                    bgClip="text"
                                    fontSize="2xl"
                                    fontWeight="extrabold"
                                    textTransform={'uppercase'}
                                >
                                    No.of Applied Students&apos;s (4)
                                </Text>
                                <InputGroup
                                    justifyContent={'flex-end'}
                                    w={'50%'}
                                >
                                    <Input
                                        type="text"
                                        placeholder="Search Company"
                                        variant={'filled'}
                                        onChange={onChangeHandler}
                                    />
                                    <InputRightElement>
                                        <Icon as={SearchIcon} />
                                    </InputRightElement>
                                </InputGroup>
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
                                    {!loading &&
                                        filteredTable.map((row, index) => (
                                            <AppliedTable
                                                key={index}
                                                data={row}
                                            />
                                        ))}
                                </Tbody>
                            </Table>
                            {!loading &&
                                filteredTable.length === 0 &&
                                inputData.trim() !== '' && <Loader />}
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Applied;
