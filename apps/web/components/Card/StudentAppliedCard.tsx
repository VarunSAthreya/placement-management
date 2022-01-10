import { Box, Flex, Text } from '@chakra-ui/react';

const StudentAppliedCard = (props) => {
    const { name, email, branch, section, usn, company, type, ctc } = props;

    return (
        <Box p="15px" bg={'white'} my="8px" borderRadius="12px">
            <Flex justify="space-between" w="100%" alignItems={'center'}>
                <Flex direction="column" maxWidth="70%">
                    <Text color={'black'} fontSize="lg" fontWeight="bold">
                        {name}
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        USN:{' '}
                        <Text as="span" color="gray.500">
                            {usn}
                        </Text>
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Email Address:{' '}
                        <Text as="span" color="gray.500">
                            {email}
                        </Text>
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Branch:{' '}
                        <Text as="span" color="gray.500">
                            {branch}
                        </Text>
                        {'  '}
                        Sec:{' '}
                        <Text as="span" color="gray.500">
                            {section}
                        </Text>
                    </Text>
                </Flex>
                <Flex direction="column" maxWidth="70%">
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Company:{' '}
                        <Text as="span" color="gray.500">
                            {company}
                        </Text>
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Type:{' '}
                        <Text as="span" color="gray.500">
                            {type}
                        </Text>
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        CTC:{' '}
                        <Text as="span" color="gray.500">
                            {ctc}
                        </Text>
                    </Text>
                </Flex>
                <Flex>
                    <Text
                        color={'white'}
                        fontSize="lg"
                        fontWeight="bold"
                        m={4}
                        p={3}
                        borderRadius={8}
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                    >
                        Applied
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default StudentAppliedCard;
