import React from 'react';
import {
    Box,
    Flex,
    Button,
    useDisclosure,
    Stack,
    useColorMode,
    IconButton,
    HStack,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BsFillFileTextFill } from 'react-icons/bs';
import NavLink from './NavLink/NavLink';
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';
import { Separator } from '../Separator';

const routes = [
    { name: 'Importance', link: '/about' },
    { name: 'Features', link: '/projects' },
    { name: 'Technologies', link: '/contact' },
    { name: 'Login', link: '/login' },
];

const Navigation = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const MotionBox = motion(Box);

    return (
        <>
            <MotionBox px={{ base: 5, lg: 8 }}>
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
                    <HStack spacing={8} alignItems={'center'}>
                        <Logo width={'170px'} />
                    </HStack>
                    <Flex alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={10}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {routes.map((link) => (
                                <NavLink key={link.name} link={link.link}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </HStack>
                    </Flex>
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
            </MotionBox>
            <Separator style={{}} />
        </>
    );
};

export default Navigation;
