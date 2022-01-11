import React from 'react';
import {
    Tr,
    Td,
    Flex,
    Text,
    IconButton,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import { BsFillInfoCircleFill } from 'react-icons/bs';

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
                    <IconButton
                        h={'45px'}
                        w={'45px'}
                        color={'white'}
                        aria-label="Student Info"
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                        _hover={{
                            bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                        }}
                        onClick={() => {
                            console.log('HI');
                        }}
                        _focus={{ outline: 'none' }}
                        variant="no-hover"
                        icon={<BsFillInfoCircleFill />}
                    />
                </Flex>
            </Td>
        </Tr>
    );
};

export default CompanyTable;
