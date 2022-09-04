import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Icon,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillLock, AiOutlineLogin, AiOutlineMail } from 'react-icons/ai';
import { Loader } from '../components/Loader';
import Logo from '../components/Logo/Logo';
import ErrorModal from '../components/Modal/Error';
import { useAuthMutation } from '../generated/graphql';

type FormValues = {
    USN: string;
    password: string;
};

const Login: NextPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const [login, { loading, error }] = useAuthMutation();
    const router = useRouter();

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const blackToWhite = useColorModeValue('black', 'white');
    /*const whiteToBlack = useColorModeValue('white', 'black');
     const buttonHover = useColorModeValue('#000000e0', '#e2e2e2'); */

    const onSubmit = async (values: FormValues) => {
        const { USN, password } = values;
        login({
            variables: { usn: USN.toUpperCase(), password },
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
                localStorage.setItem('token', '');
            });
    };

    if (error) {
        localStorage.setItem('token', '');
        console.log({ error });
        return <ErrorModal message={error.message} />;
    }
    if (loading) return <Loader />;

    return (
        <React.Fragment>
            <Flex position="relative" mb="40px" justifyContent={'flex-end'}>
                <Flex
                    h={{ sm: 'initial', md: '75vh', lg: '90vh' }}
                    w={{ base: '100%', md: '50%', lg: '40%' }}
                    mb="30px"
                    mr={'5%'}
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
                        bg={primaryBG}
                    >
                        <Logo width={'100%'} />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid templateColumns="1fr">
                                <GridItem>
                                    <FormControl
                                        isInvalid={errors.USN !== undefined}
                                    >
                                        <FormLabel
                                            ms="4px"
                                            fontSize="md"
                                            fontWeight="normal"
                                            color={blackToWhite}
                                        >
                                            User ID
                                        </FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents="none">
                                                <Icon
                                                    as={AiOutlineMail}
                                                    color={blackToWhite}
                                                    w={6}
                                                    h={6}
                                                    mt={'3px'}
                                                />
                                            </InputLeftElement>

                                            <Input
                                                borderRadius="10px"
                                                variant={'filled'}
                                                mb="4px"
                                                focusBorderColor={blackToWhite}
                                                _placeholder={{
                                                    color: blackToWhite,
                                                }}
                                                fontSize="md"
                                                color={blackToWhite}
                                                type="text"
                                                placeholder="Enter User ID"
                                                size="lg"
                                                {...register('USN', {
                                                    required:
                                                        'Please Enter Your USN',
                                                })}
                                            />
                                        </InputGroup>
                                        <FormErrorMessage color="red">
                                            {errors.USN && errors.USN.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem mt={4}>
                                    <FormControl
                                        isInvalid={
                                            errors.password !== undefined
                                        }
                                    >
                                        <FormLabel
                                            ms="4px"
                                            fontSize="md"
                                            fontWeight="normal"
                                            color={blackToWhite}
                                        >
                                            Password
                                        </FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents="none">
                                                <Icon
                                                    as={AiFillLock}
                                                    color={blackToWhite}
                                                    w={6}
                                                    h={6}
                                                    mt={'3px'}
                                                />
                                            </InputLeftElement>
                                            <Input
                                                borderRadius="10px"
                                                variant={'filled'}
                                                mb="4px"
                                                fontSize="md"
                                                focusBorderColor={blackToWhite}
                                                color={blackToWhite}
                                                type="password"
                                                placeholder="Password"
                                                _placeholder={{
                                                    color: blackToWhite,
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
                                        fontSize="1rem"
                                        type="submit"
                                        color={'white'}
                                        rightIcon={<AiOutlineLogin />}
                                        bgGradient="linear(to-r, #7928CA, #FF0080)"
                                        w="100%"
                                        h="45"
                                        mb="20px"
                                        mt="20px"
                                        _hover={{
                                            bgGradient:
                                                'linear-gradient(to right, #531a8e, #d6016c)',
                                        }}
                                    >
                                        LOGIN
                                    </Button>
                                </GridItem>
                            </Grid>
                        </form>
                    </Flex>
                </Flex>
                <Image
                    src={'/assests/images/Background-Images/login-wave.svg'}
                    alt={'bg-image'}
                    pos={'absolute'}
                    left={0}
                    zIndex={-50}
                />
            </Flex>
        </React.Fragment>
    );
};

export default Login;
