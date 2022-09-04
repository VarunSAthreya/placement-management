import {
    Avatar,
    Badge,
    Flex,
    IconButton,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';

type Props = {
    student: IUserDetails;
    role: string;
};

const StudentsTable: FC<Props> = ({ student, role }) => {
    const router = useRouter();
    const { USN, name, email, branch, section, CGPA } = student;
    const textColor = useColorModeValue('gray.700', 'white');
    const bgStatus = useColorModeValue('gray.400', '#1a202c');
    const colorStatus = useColorModeValue('white', 'white');

    return (
        <Tr>
            <Td minWidth={{ sm: '150px' }} pl="0px">
                <Flex
                    align="space"
                    justifyContent={'center'}
                    py=".8rem"
                    minWidth="100%"
                >
                    <Avatar
                        name={name}
                        w="55px"
                        h="55px"
                        color={'white'}
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                        borderRadius="12px"
                        me="18px"
                    />
                    <Flex direction="column" justifyContent={'center'}>
                        <Text
                            fontSize="1.2rem"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                        >
                            {name}
                        </Text>
                        <Text
                            fontSize="md"
                            color="gray.400"
                            fontWeight="normal"
                        >
                            {email}
                        </Text>
                    </Flex>
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
                    {branch}
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
                    {section}
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
                    {USN}
                </Text>
            </Td>
            <Td>
                <Flex justifyContent={'center'}>
                    <Badge
                        bg={CGPA >= 7.5 ? '#22c55e' : bgStatus}
                        color={CGPA < 7.5 ? '#e11d48' : colorStatus}
                        fontSize="16px"
                        p="10px"
                        borderRadius="8px"
                    >
                        {CGPA}
                    </Badge>
                </Flex>
            </Td>
            {role === 'ADMIN' && (
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
                            icon={<BsFillInfoCircleFill />}
                            onClick={() => {
                                router.push(`/students/${USN}`);
                            }}
                        />
                    </Flex>
                </Td>
            )}
        </Tr>
    );
};

export default StudentsTable;
