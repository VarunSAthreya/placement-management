import {
    Box,
    Drawer,
    DrawerContent,
    Flex,
    Link,
    Icon,
    IconButton,
    CloseButton,
    Text,
    useColorModeValue,
    useDisclosure,
    useColorMode,
    Button,
} from '@chakra-ui/react';
import IconBox from '../Icons/IconBox';
import Separator from '../Separator/Separator';
import React from 'react';
import { FiHome, FiMenu } from 'react-icons/fi';
import {
    BsBuilding,
    BsFillPersonLinesFill,
    BsPeople,
    BsPersonPlus,
    BsPersonCircle,
} from 'react-icons/bs';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const routes = [
    { name: 'Home', link: '/', icon: FiHome },
    { name: 'Company', link: '/company', icon: BsBuilding },
    { name: 'Students', link: '/students', icon: BsPeople },
    { name: 'Applied', link: '/applied', icon: BsFillPersonLinesFill },
    { name: 'Placed', link: '/placed', icon: BsPersonPlus },
    { name: 'Profile', link: '/profile', icon: BsPersonCircle },
];

const SideBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh">
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'flex' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        </Box>
    );
};

const SidebarContent = ({ onClose, ...rest }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            bg={useColorModeValue('white', '#242526')}
            w={{ base: 'full', md: 72 }}
            pos={'fixed'}
            borderRadius={8}
            left={2}
            flexDirection={'column'}
            top={6}
            h="95%"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="6"
                justifyContent="space-between"
            >
                <Box pt={'25px'} mb="12px">
                    <Text
                        fontSize="1.3rem"
                        mt="3px"
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                        fontWeight="extrabold"
                        textTransform={'uppercase'}
                    >
                        PLACEMENT PORTAL
                    </Text>
                    <Separator></Separator>
                </Box>
                <CloseButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onClose}
                />
            </Flex>
            <Flex flexDirection={'column'}>
                {routes.map((link) => (
                    <NavItem key={link.name} icon={link.icon} link={link.link}>
                        {link.name}
                    </NavItem>
                ))}
            </Flex>
            <Flex justify={'center'} pos={'relative'} top={160}>
                <Button
                    onClick={toggleColorMode}
                    _focus={{ outline: 'none' }}
                    variant="no-hover"
                    rightIcon={
                        colorMode === 'light' ? <MoonIcon /> : <SunIcon />
                    }
                >
                    {colorMode === 'light' ? (
                        <Text mr={4}>DARK MODE</Text>
                    ) : (
                        <Text mr={4}>LIGHT MODE</Text>
                    )}
                </Button>
            </Flex>
        </Box>
    );
};

const NavItem = ({ icon, link, children, ...rest }) => {
    return (
        <Link
            style={{ textDecoration: 'none' }}
            _focus={{ outline: 'none' }}
            href={link}
        >
            <Flex
                align="center"
                p="2"
                mx="2"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                bg={useColorModeValue('white', '#242526')}
                my={2}
                _hover={{
                    bg: 'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <IconBox
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                        h="40px"
                        w="40px"
                        color="white"
                        me="12px"
                        _groupHover={{
                            bg: 'white',
                        }}
                        transition="0.2s linear"
                    >
                        <Icon
                            fontSize="16"
                            _groupHover={{
                                color: 'black',
                            }}
                            as={icon}
                        />
                    </IconBox>
                )}
                <Text
                    color={useColorModeValue('gray.700', 'white')}
                    my="auto"
                    fontSize="sm"
                    _groupHover={{
                        color: 'white',
                    }}
                >
                    {children}
                </Text>
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', '#242526')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="space-between"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            {/* <CreativeTimLogo w="32px" h="32px" me="10px" /> */}
        </Flex>
    );
};

export default SideBar;
