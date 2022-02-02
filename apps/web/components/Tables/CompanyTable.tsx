import {
    Flex,
    IconButton,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';

type Props = {
    company: ICompany;
};

const CompanyTable: FC<Props> = ({ company }) => {
    const router = useRouter();

    const { name, type, arrival_date, package: pkg, year } = company;

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
                        textAlign={'center'}
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
                    {format(new Date(Number(arrival_date)), 'dd MMM yyyy')}
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
                    {pkg}
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
