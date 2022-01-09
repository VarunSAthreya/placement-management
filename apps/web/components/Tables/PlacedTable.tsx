import {
    Avatar,
    AvatarGroup,
    Flex,
    Icon,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const PlacedTable = (props) => {
    const { logo, name, members, ctc } = props;
    const textColor = useColorModeValue('gray.700', 'white');
    return (
        <Tr>
            <Td minWidth={{ sm: '250px' }} pl="0px">
                <Flex
                    align="center"
                    py=".8rem"
                    minWidth="100%"
                    flexWrap="nowrap"
                >
                    <Icon as={logo} h={'24px'} w={'24px'} pe="5px" />
                    <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                    >
                        {name}
                    </Text>
                </Flex>
            </Td>

            <Td>
                <AvatarGroup size="sm">
                    {members.map((member) => {
                        return (
                            <Avatar
                                key={member}
                                color="white"
                                bg={
                                    'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                                }
                                name="Ryan Florence"
                                src={member}
                                _hover={{ zIndex: '3', cursor: 'pointer' }}
                            />
                        );
                    })}
                </AvatarGroup>
            </Td>
            <Td>
                <Text
                    textAlign={'center'}
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    pb=".5rem"
                >
                    {ctc}
                </Text>
            </Td>
        </Tr>
    );
};

export default PlacedTable;
