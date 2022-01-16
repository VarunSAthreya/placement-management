import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { useAuthMutation } from '../generated/graphql';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [login] = useAuthMutation();
    const router = useRouter();

    const onSubmit = async (values: { email: string; password: string }) => {
        const { email, password } = values;
        login({
            variables: { usn: email.toUpperCase(), password },
        })
            .then(({ data }) => {
                console.log({ data });
                localStorage.setItem(
                    'token',
                    data.authenticate.token.split(' ')[1]
                );
                router.replace('/');
            })
            .catch((err) => {
                console.error(err);
                localStorage.clear();
            });
    };

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
                    color="black"
                    borderRadius={8}
                    bg={useColorModeValue('#f8f9fa', '#18191A')}
                >
                    <Heading
                        fontSize="48px"
                        mb="20px"
                        p={1}
                        color={useColorModeValue('black', 'white')}
                        textAlign={'center'}
                    >
                        Placement Portal
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid templateColumns="1fr">
                            <GridItem>
                                <FormControl isInvalid={errors.email}>
                                    <FormLabel
                                        ms="4px"
                                        fontSize="md"
                                        fontWeight="normal"
                                        color={useColorModeValue(
                                            'black',
                                            'white'
                                        )}
                                    >
                                        Email
                                    </FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none">
                                            <Icon
                                                as={AiOutlineMail}
                                                color={useColorModeValue(
                                                    'black',
                                                    'white'
                                                )}
                                                w={6}
                                                h={6}
                                                mt={'3px'}
                                            />
                                        </InputLeftElement>

                                        <Input
                                            borderRadius="15px"
                                            variant={'filled'}
                                            mb="4px"
                                            focusBorderColor={useColorModeValue(
                                                'black',
                                                'white'
                                            )}
                                            _placeholder={{
                                                color: useColorModeValue(
                                                    'black',
                                                    'white'
                                                ),
                                            }}
                                            fontSize="md"
                                            color={useColorModeValue(
                                                'black',
                                                'white'
                                            )}
                                            type="text"
                                            placeholder="Your email address"
                                            size="lg"
                                            {...register('email', {
                                                required:
                                                    'Please Enter Your Email Address',
                                                // pattern: {
                                                //     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                //     message:
                                                //         'Please Enter a Valid Email Address',
                                                // },
                                            })}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage color="red">
                                        {errors.email && errors.email.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </GridItem>
                            <GridItem mt={4}>
                                <FormControl isInvalid={errors.password}>
                                    <FormLabel
                                        ms="4px"
                                        fontSize="md"
                                        fontWeight="normal"
                                        color={useColorModeValue(
                                            'black',
                                            'white'
                                        )}
                                    >
                                        Password
                                    </FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none">
                                            <Icon
                                                as={AiFillLock}
                                                color={useColorModeValue(
                                                    'black',
                                                    'white'
                                                )}
                                                w={6}
                                                h={6}
                                                mt={'3px'}
                                            />
                                        </InputLeftElement>
                                        <Input
                                            borderRadius="15px"
                                            variant={'filled'}
                                            mb="4px"
                                            fontSize="md"
                                            focusBorderColor={useColorModeValue(
                                                'black',
                                                'white'
                                            )}
                                            color={useColorModeValue(
                                                'black',
                                                'white'
                                            )}
                                            type="password"
                                            placeholder="Password"
                                            _placeholder={{
                                                color: useColorModeValue(
                                                    'black',
                                                    'white'
                                                ),
                                            }}
                                            size="lg"
                                            {...register('password', {
                                                required:
                                                    'Please Enter Valid Password',
                                                minLength: {
                                                    value: 3,
                                                    message:
                                                        'Minimum Password length should be 3',
                                                },
                                                maxLength: {
                                                    value: 20,
                                                    message:
                                                        'Maximum Password length should be 20',
                                                },
                                            })}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage color="red">
                                        {errors.password &&
                                            errors.password.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <Button
                                    fontSize="10px"
                                    type="submit"
                                    bg={useColorModeValue('black', 'white')}
                                    w="100%"
                                    h="45"
                                    mb="20px"
                                    color={useColorModeValue('white', 'black')}
                                    mt="20px"
                                    _hover={{
                                        bg: useColorModeValue(
                                            '#000000e0',
                                            '#e2e2e2'
                                        ),
                                    }}
                                >
                                    SIGN IN
                                </Button>
                            </GridItem>
                        </Grid>
                    </form>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Login;
