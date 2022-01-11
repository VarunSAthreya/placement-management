import { Flex, Text } from '@chakra-ui/react';

const StudentInfoCard = (props) => {
    const {
        name,
        usn,
        email,
        branch,
        section,
        year,
        cgpa,
        tenth,
        twelth,
        backlogs,
    } = props;

    return (
        <Flex direction="column">
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text fontSize="md" color={'black'} fontWeight="bold" me="10px">
                    Name:{' '}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                    {name}
                </Text>
            </Flex>
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text fontSize="md" color={'black'} fontWeight="bold" me="10px">
                    USN
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                    {usn}
                </Text>
            </Flex>
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text fontSize="md" color={'black'} fontWeight="bold" me="10px">
                    Email:{' '}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                    {email}
                </Text>
            </Flex>
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text fontSize="md" color={'black'} fontWeight="bold" me="10px">
                    Branch & Section
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                    {branch} {section}
                </Text>
            </Flex>
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text fontSize="md" color={'black'} fontWeight="bold" me="10px">
                    Year
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                    {year}
                </Text>
            </Flex>
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text fontSize="md" color={'black'} fontWeight="bold" me="10px">
                    CGPA
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                    {cgpa}
                </Text>
            </Flex>
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text fontSize="md" color={'black'} fontWeight="bold" me="10px">
                    10th Mark&apos;s Percentage
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                    {tenth}
                </Text>
            </Flex>
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text fontSize="md" color={'black'} fontWeight="bold" me="10px">
                    12th Mark&apos;s Percentage
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                    {twelth}
                </Text>
            </Flex>
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text fontSize="md" color={'black'} fontWeight="bold" me="10px">
                    BackLogs
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                    {backlogs}
                </Text>
            </Flex>
        </Flex>
    );
};

export default StudentInfoCard;
