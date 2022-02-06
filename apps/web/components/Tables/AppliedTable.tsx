import { Flex, Td, Text, Tr, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
    data: {
        user: IUserDetails;
        company: ICompany;
    };
};

const AppliedTable: FC<Props> = ({ data }) => {
    const { USN, branch, section, name: userName, email } = data.user;
    const { name: companyName, package: CTC, type } = data.company;
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
                        {userName}
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
                    {USN}
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
                    {companyName}
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
                    {CTC}
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
