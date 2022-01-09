import React from 'react';
import { Tr, Td, Flex, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import IconBox from '../Icons/IconBox';

const CompanyTable = (props) => {
    const { logo, name, type, date, ctc, year } = props;
    const textColor = useColorModeValue('gray.700', 'white');
    return (
        <Tr>
            <Td minWidth={{ sm: '150px' }} pl="0px">
                <Flex
                    alignItems="center"
                    py=".8rem"
                    minWidth="100%"
                    flexWrap="nowrap"
                    justifyContent={'flex-start'}
                >
                    <Icon as={logo} h={'24px'} w={'24px'} me="5px" />
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
                    {date}
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
                <Text
                    textAlign={'center'}
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    pb=".5rem"
                >
                    {year}
                </Text>
            </Td>
            <Td>
                <Flex justifyContent={'center'}>
                    <IconBox
                        as="box"
                        h={'45px'}
                        w={'45px'}
                        color={'white'}
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                    >
                        <Icon
                            fontSize="16"
                            _groupHover={{
                                color: 'black',
                            }}
                            as={BsFillInfoCircleFill}
                        />
                    </IconBox>
                </Flex>
            </Td>
        </Tr>
    );
};

export default CompanyTable;
