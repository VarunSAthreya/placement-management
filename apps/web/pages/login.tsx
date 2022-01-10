import {
    Flex,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Icon,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';

const Login = () => {
    return (
        <Flex position="relative" mb="40px">
            <Flex
                h={{ sm: 'initial', md: '75vh', lg: '90vh' }}
                w={{ base: '100%', md: '50%', lg: '45%' }}
                justifyContent={'center'}
                maxW="1044px"
                mx="auto"
                mb="30px"
                pt={{ sm: '100px', md: '0px' }}
            >
                <Flex
                    direction="column"
                    w="100%"
                    background="transparent"
                    p="32px"
                    mt={{ md: '150px', lg: '100px' }}
                    justifyContent={'center'}
                    color="white"
                    borderRadius={8}
                    bg={'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'}
                >
                    <Heading
                        fontSize="48px"
                        mb="20px"
                        p={1}
                        textAlign={'center'}
                    >
                        Placement Portal
                    </Heading>
                    <FormControl p={4}>
                        <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                            Email
                        </FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <Icon
                                    as={AiOutlineMail}
                                    color="black"
                                    w={6}
                                    h={6}
                                    mt={'3px'}
                                />
                            </InputLeftElement>

                            <Input
                                borderRadius="15px"
                                variant={'filled'}
                                mb="24px"
                                focusBorderColor="black"
                                _placeholder={{ color: 'black' }}
                                fontSize="md"
                                color="white"
                                type="text"
                                placeholder="Your email adress"
                                size="lg"
                            />
                        </InputGroup>

                        <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                            Password
                        </FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <Icon
                                    as={AiFillLock}
                                    color="black"
                                    w={6}
                                    h={6}
                                    mt={'3px'}
                                />
                            </InputLeftElement>
                            <Input
                                borderRadius="15px"
                                variant={'filled'}
                                mb="24px"
                                fontSize="md"
                                focusBorderColor="black"
                                color="white"
                                type="password"
                                placeholder="Password"
                                _placeholder={{ color: 'black' }}
                                size="lg"
                            />
                        </InputGroup>
                        <Button
                            fontSize="10px"
                            type="submit"
                            bg="white"
                            w="100%"
                            h="45"
                            mb="20px"
                            color="black"
                            mt="20px"
                            _hover={{
                                bg: '#e2e2e2',
                            }}
                        >
                            SIGN IN
                        </Button>
                    </FormControl>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Login;
