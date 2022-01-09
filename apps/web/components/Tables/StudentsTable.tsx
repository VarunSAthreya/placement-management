import {
    Avatar,
    Badge,
    Icon,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import IconBox from '../Icons/IconBox';

const StudentsTable = (props) => {
    const { logo, name, email, usn, branch, section, cgpa } = props;
    const textColor = useColorModeValue('gray.700', 'white');
    const bgStatus = useColorModeValue('gray.400', '#1a202c');
    const colorStatus = useColorModeValue('white', 'gray.400');

    return (
        <Tr>
            <Td minWidth={{ sm: '150px' }} pl="0px">
                <Flex
                    align="center"
                    py=".8rem"
                    minWidth="100%"
                    flexWrap="nowrap"
                >
                    <Avatar
                        name={name}
                        w="50px"
                        color={'white'}
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                        borderRadius="12px"
                        me="18px"
                    />
                    <Flex direction="column">
                        <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                        >
                            {name}
                        </Text>
                        <Text
                            fontSize="sm"
                            color="gray.400"
                            fontWeight="normal"
                        >
                            {email}
                        </Text>
                    </Flex>
                </Flex>
            </Td>
            <Td>
                <Flex direction="row" justifyContent={'space-evenly'}>
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                        {branch}
                    </Text>
                    <Text fontSize="sm" color="gray.800" fontWeight="normal">
                        {section}
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
                <Flex justifyContent={'center'}>
                    <Badge
                        bg={cgpa === '7.5' ? '#22c55e' : bgStatus}
                        color={cgpa === '7' ? '#e11d48' : colorStatus}
                        fontSize="16px"
                        p="3px 10px"
                        borderRadius="8px"
                    >
                        {cgpa}
                    </Badge>
                </Flex>
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

export default StudentsTable;
