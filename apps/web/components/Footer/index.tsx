import {
    Box,
    Button,
    Container,
    HStack,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Logo from '../Logo';
import { Separator } from '../Separator';

type Props = {
    id: string;
};

const Footer: FC<Props> = ({ id }) => {
    const router = useRouter();
    return (
        <Box id={id} pt={16} position={'relative'}>
            <Separator style={{ pos: 'absolute', top: '10px' }} />
            <Box
                position={'absolute'}
                display={'flex'}
                justifyContent={'space-around'}
                alignItems={'center'}
                top="-40px"
                h={'110px'}
                w={'65%'}
                mb={2}
                bg="linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)"
                right="17%"
                rounded={'10px'}
            >
                <Text
                    fontSize={'3xl'}
                    color={'white'}
                    fontWeight={600}
                    textTransform={'uppercase'}
                >
                    Try Placement Portal Now.
                </Text>
                <Button
                    fontSize={'0.8rem'}
                    size={'lg'}
                    color={'#7928CA'}
                    rightIcon={<BsFillArrowRightCircleFill />}
                    bg={'white'}
                    _hover={{
                        color: '#922af9',
                        bg: useColorModeValue('#000000e0', '#e2e2e2'),
                    }}
                    _focus={{ outline: 'none' }}
                    variant="no-hover"
                    textTransform={'uppercase'}
                    onClick={() => {
                        router.push(`/login`);
                    }}
                >
                    Check out Features using Demo account
                </Button>
            </Box>
            <Container
                as={Stack}
                maxW={'8xl'}
                py={10}
                direction={{ base: 'column', md: 'row' }}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Logo width={'50%'} />
                <Stack align={{ base: 'center', lg: 'flex-end' }} spacing={3}>
                    <Text
                        fontSize={'xl'}
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                        fontWeight="extrabold"
                        mb={'0.8rem'}
                        textTransform={'uppercase'}
                    >
                        Designed And Developed By:
                    </Text>
                    <HStack spacing={2} alignItems={'center'}>
                        <Text
                            fontSize={'lg'}
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                            fontWeight={500}
                            textTransform={'uppercase'}
                        >
                            Varun S Atreya
                        </Text>
                        <Link
                            href={'https://github.com/VarunSAthreya'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#FF0080' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Image
                                alt="github"
                                src={'/assests/images/Logo/github.svg'}
                                w={8}
                                h={8}
                                alignItems={'center'}
                            />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/varunsathreya/'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#FF0080' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Image
                                alt="linkedIn"
                                src={'/assests/images/Logo/linkedin.svg'}
                                w={8}
                                h={8}
                                alignItems={'center'}
                            />
                        </Link>
                    </HStack>
                    <HStack spacing={2} alignItems={'center'}>
                        <Text
                            fontSize={'lg'}
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                            fontWeight={500}
                            textTransform={'uppercase'}
                        >
                            Sandeep M
                        </Text>
                        <Link
                            href={'https://github.com/Sandeep-M23'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#FF0080' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Image
                                alt="github"
                                src={'/assests/images/Logo/github.svg'}
                                w={8}
                                h={8}
                                alignItems={'center'}
                            />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/sandeep-m23/'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#FF0080' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Image
                                alt="linkedIn"
                                src={'/assests/images/Logo/linkedin.svg'}
                                w={8}
                                h={8}
                                alignItems={'center'}
                            />
                        </Link>
                    </HStack>
                </Stack>
            </Container>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                bg="linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)"
                py={2}
                p={4}
            >
                <Text color={'white'} textTransform={'uppercase'}>
                    © 2022 Placement Portal.
                </Text>
                <Text color={'white'} textTransform={'uppercase'}>
                    All rights reserved.
                </Text>
            </Box>
        </Box>
    );
};

export default Footer;
