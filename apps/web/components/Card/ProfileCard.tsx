import { Flex, Text } from '@chakra-ui/react';

const ProfileCard = ({ data }) => {
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
        eligible,
        placed,
        package: pkg,
    } = data;

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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    NAME:{' '}
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    USN
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                    {USN}
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    EMAIL:{' '}
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    BRANCH & SECTION
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    YEAR
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    CGPA
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                    {CGPA}
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    10TH MARK&apos;S PERCENTAGE
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    12TH MARK&apos;S PERCENTAGE
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    BACKLOGS
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                    {backlogs}
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    ELIGIBLE
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                    {eligible ? 'YES' : 'NO'}
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    PLACED
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                    {placed ? 'YES' : 'NO'}
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
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    PACKAGE
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                    {pkg}
                </Text>
            </Flex>
        </Flex>
    );
};

export default ProfileCard;
