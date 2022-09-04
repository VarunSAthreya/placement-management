import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import ChangePassword from '../Modal/ChangePassword';

type Props = {
    data: string;
};

const AdminProfileCard: FC<Props> = ({ data }) => {
    const USN = data;

    const router = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const logout = () => {
        localStorage.removeItem('token');
        router.replace('/login');
    };

    return (
        <Flex direction="column">
            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Text
                    fontSize="md"
                    color={'gray.500'}
                    me="10px"
                    fontWeight={'semibold'}
                >
                    User ID
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                    {USN}
                </Text>
            </Flex>

            <Flex
                align="center"
                justifyContent="space-between"
                mb="8px"
                borderRadius={8}
                bg={'#f8f9fa'}
                p={3}
            >
                <Button
                    bg={'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'}
                    _hover={{
                        bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                    }}
                    _focus={{ outline: 'none' }}
                    color="white"
                    fontSize="md"
                    variant="no-hover"
                    onClick={onOpen}
                >
                    Change Password
                </Button>
                <Button
                    bg={'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'}
                    _hover={{
                        bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                    }}
                    _focus={{ outline: 'none' }}
                    color="white"
                    fontSize="md"
                    variant="no-hover"
                    onClick={logout}
                >
                    LOGOUT
                </Button>
            </Flex>
            <ChangePassword isOpen={isOpen} onClose={onClose} usn={USN} />
        </Flex>
    );
};

export default AdminProfileCard;
