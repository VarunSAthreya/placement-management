import {
    Table,
    Tbody,
    Text,
    Box,
    Th,
    Thead,
    Tr,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import PlacedTable from '../../components/Tables/PlacedTable';
import SideBar from '../../components/Sidebar/Sidebar';

const placedTableData = [
    {
        name: 'Purity UI Version',
        members: ['1', '2'],
        ctc: '8LPA',
    },
    {
        name: 'Add Progress Track',
        members: ['1', '2'],
        ctc: '8LPA',
    },
    {
        name: 'Fix Platform Errors',
        members: ['1', '2'],
        ctc: '8LPA',
    },
    {
        name: 'Launch our Mobile App',
        members: ['1', '2'],
        ctc: '8LPA',
    },
];

const Placed = () => {
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
                <Box mb={{ lg: '24px' }} me={{ lg: '24px' }}>
                    <Flex direction="column">
                        <Box pb={'25px'} p={3} pt={0}>
                            <Flex
                                direction="column"
                                bg={'white'}
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
                                            variant="no-hover"
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
                                            variant="no-hover"
                                        >
                                            Placed Students
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Flex>
                        </Box>
                        <Box p={3} borderRadius={8}>
                            <Table
                                variant="simple"
                                color="white"
                                bgGradient={'linear(to-l, #7928CA, #FF0080)'}
                                rounded={'md'}
                                boxShadow={'0px 2px 3px #eee'}
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
                                            Packages
                                        </Th>
                                        <Th color="white" textAlign={'center'}>
                                            Student Details
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody bg={'white'}>
                                    {placedTableData.map((placed, index) => {
                                        return (
                                            <PlacedTable
                                                key={index}
                                                placed={placed}
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

export default Placed;
