import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Stack,
    useColorMode,
    Hide,
    useDisclosure,
} from '@chakra-ui/react';
import NavLink from './NavLink/NavLink';
import Logo from '../Logo';
import { Separator } from '../Separator';
import { useRouter } from 'next/router';

const routes = [
    { name: 'Importance', link: '#importance' },
    { name: 'Features', link: '#features' },
    { name: 'Technologies', link: '#tech' },
    { name: 'Login', link: '#login' },
];

const Navigation = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    console.log(router.asPath);

    return (
        <>
            <Box px={{ base: 5, lg: 8 }}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        _focus={{ outline: 'none' }}
                    />
                    <HStack alignItems={'center'}>
                        <Logo width={'170px'} />
                    </HStack>
                    <Hide below="md">
                        {router.asPath.toString() !== '/login' && (
                            <Flex alignItems={'center'}>
                                <HStack
                                    as={'nav'}
                                    spacing={10}
                                    display={{ md: 'flex' }}
                                >
                                    {routes.map((link) => (
                                        <NavLink
                                            key={link.name}
                                            link={link.link}
                                        >
                                            {link.name}
                                        </NavLink>
                                    ))}
                                </HStack>
                            </Flex>
                        )}
                    </Hide>
                    <Button
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                        color={'white'}
                        onClick={toggleColorMode}
                        _focus={{ outline: 'none' }}
                        _active={{
                            bg: 'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)',
                        }}
                        _hover={{
                            bg: 'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)',
                        }}
                    >
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {routes.map((link) => (
                                <NavLink key={link.name} link={link.link}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Separator style={{}} />
        </>
    );
};

export default Navigation;
