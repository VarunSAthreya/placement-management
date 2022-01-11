import { Box, Flex, Text } from '@chakra-ui/react';

const AppliedCard = (props) => {
    const { company, type, ctc } = props;

    return (
        <Box p="15px" bg={'#f8f9fa'} my="8px" borderRadius="12px">
            <Flex justify="space-between" w="100%" alignItems={'center'}>
                <Flex direction="column" maxWidth="70%">
                    <Text color={'black'} fontSize="lg" fontWeight="bold">
                        {company}
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
                        fontSize="md"
                        fontWeight="bold"
                        m={4}
                        p={2}
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

export default AppliedCard;
