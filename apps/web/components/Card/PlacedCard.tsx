import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
    data: ICompany;
};

const PlacedCard: FC<Props> = ({ data }) => {
    console.log(data);
    const { name, type, package: CTC } = data;

    return (
        <Box p="15px" bg={'#f8f9fa'} my="8px" borderRadius="12px">
            <Flex justify="space-between" w="100%" alignItems={'center'}>
                <Flex direction="column" maxWidth="70%">
                    <Text color={'black'} fontSize="xl" fontWeight="bold">
                        {name}
                    </Text>
                    <Text color="gray.500" fontSize="sm" fontWeight="semibold">
                        Type:{' '}
                        <Text as="span" color="black">
                            {type}
                        </Text>
                    </Text>
                    <Text color="gray.500" fontSize="sm" fontWeight="semibold">
                        CTC:{' '}
                        <Text as="span" color="black">
                            {CTC}
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
                        Placed
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default PlacedCard;
