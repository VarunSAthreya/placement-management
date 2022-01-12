import React from 'react';
import {
    Tr,
    Td,
    Flex,
    Text,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const CompanyTable = ({ company }) => {
    const router = useRouter();
    const { name, type, date, ctc, year } = company;
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
                        _focus={{ outline: 'none' }}
                        variant="no-hover"
                        onClick={() => {
                            router.push(`/company/${name}`);
                        }}
                        icon={<BsFillInfoCircleFill />}
                    />
                </Flex>
            </Td>
        </Tr>
    );
};

export default CompanyTable;
