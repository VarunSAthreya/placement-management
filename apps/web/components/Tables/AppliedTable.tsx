import React from 'react';
import { Tr, Td, Flex, Text, useColorModeValue } from '@chakra-ui/react';

const AppliedTable = (props) => {
    const { name, email, branch, section, usn, company, type, ctc } = props;
    const textColor = useColorModeValue('gray.700', 'white');
    return (
        <Tr>
            <Td minWidth={{ sm: '150px' }} pl="0px">
                <Flex flexDir={'column'}>
                    <Text
                        fontSize="lg"
                        textAlign={'center'}
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                    >
                        {name}
                    </Text>
                    <Text
                        fontSize="xs"
                        color={'gray.500'}
                        textAlign={'center'}
                        minWidth="100%"
                    >
                        {email}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Text
                    textAlign={'center'}
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    pb=".5rem"
                >
                    {usn}
                </Text>
            </Td>
            <Td>
                <Text
                    textAlign={'center'}
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    pb=".5rem"
                >
                    {branch} & {section}
                </Text>
            </Td>
            <Td>
                <Text
                    textAlign={'center'}
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    pb=".5rem"
                >
                    {company}
                </Text>
            </Td>
            <Td>
                <Text
                    textAlign={'center'}
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    pb=".5rem"
                >
                    {type}
                </Text>
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
            <Td>
                <Flex justifyContent={'center'}>
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
            </Td>
        </Tr>
    );
};

export default AppliedTable;
