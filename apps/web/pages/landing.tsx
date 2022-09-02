import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import {
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    useColorModeValue,
    Icon,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';
import { MdDescription, MdSettings } from 'react-icons/md';
import Footer from '../components/Footer/Footer';
import IconBox from '../components/Icons/IconBox';
import Navigation from '../components/Navigation/Navigation';

const features = [
    {
        id: 1,
        image: '/assests/images/Website-Images/Image1.png',
        portal: 'Admin Portal',
        heading: 'Dashboard',
        description:
            'Home Page on Logging in as an Admin having a graphical description of all the placement details',
    },
    {
        id: 2,
        image: '/assests/images/Website-Images/Image2.png',
        portal: 'Student Portal',
        heading: 'Student Lists',
        description:
            'Displays the list of all the students in the database viewed through student portal.',
    },
    {
        id: 3,
        image: '/assests/images/Website-Images/Image3.png',
        portal: 'Student Portal',
        heading: 'Dashboard',
        description:
            'Home Page on Logging in as a student displaying all the upcoming company details and applied company details.',
    },
    {
        id: 4,
        image: '/assests/images/Website-Images/Image4.png',
        portal: 'Admin & Student Portal',
        heading: 'Light Mode',
        description: 'Enables us to switch to a Light Themed User Interface',
    },
];

const frontendTech = [
    { id: 1, desc: 'Framework: NextJS' },
    { id: 2, desc: 'Frontend: ReactJS' },
    { id: 3, desc: 'Components: Chakra UI' },
    { id: 4, desc: 'Language: TypeScript' },
];

const backendTech = [
    { id: 1, desc: 'Backend: NodeJS' },
    { id: 2, desc: 'Server: Apollo Server' },
    { id: 3, desc: 'Database: PostgreSQL' },
    { id: 4, desc: 'Language: TypeScript' },
    { id: 5, desc: 'ORM: Prisma' },
];

const Landing: NextPage = () => {
    const [featureIndex, setFeatureIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFeatureIndex((index) => (index + 1) % 4);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <React.Fragment>
            <Navigation />
            <Box pos={'relative'} py={16}>
                <Stack
                    align={'center'}
                    position={'relative'}
                    bottom={'70px'}
                    spacing={{ base: 8, md: 10 }}
                    px={20}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 8 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        >
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontWeight="extrabold"
                            >
                                WELCOME,
                            </Text>
                            <Text
                                fontSize="4xl"
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                            >
                                TO PLACEMENT PORTAL
                            </Text>
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.500', 'gray.200')}
                            fontSize={'md'}
                        >
                            Placement Management System manages student
                            information in the college with regard to placement.
                            It has the facility of maintaining the details of
                            the student, thereby reducing the manual work. It
                            will save time and energy which are spending in
                            making reports and collecting data. <br />
                            Placement Management System can be accessed
                            throughout the college with proper login provided.
                        </Text>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={'300px'}
                            width={'full'}
                        >
                            <Image
                                pos={'absolute'}
                                top={'-15px'}
                                alt={'Hero Image1'}
                                rounded={'15px'}
                                w={'60%'}
                                h={'70%'}
                                src={
                                    '/assests/images/Website-Images/Image1.png'
                                }
                            />
                            <Image
                                pos={'absolute'}
                                top={'50px'}
                                left={'45%'}
                                alt={'Hero Image2'}
                                rounded={'15px'}
                                w={'60%'}
                                h={'80%'}
                                src={
                                    '/assests/images/Website-Images/Image4.png'
                                }
                            />
                            <Image
                                pos={'absolute'}
                                top={'230px'}
                                right={'25%'}
                                alt={'Hero Image3'}
                                rounded={'15px'}
                                w={'60%'}
                                h={'80%'}
                                src={
                                    '/assests/images/Website-Images/Image3.png'
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
                <Image
                    pos={'absolute'}
                    bottom={0}
                    alt={'Hero Image1'}
                    zIndex={-10}
                    src={'/assests/images/Background-Images/waves.svg'}
                />
            </Box>
            <Stack
                py={16}
                px={8}
                spacing={{ base: 8, md: 10 }}
                align={'center'}
                direction={'column'}
            >
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                >
                    <Text
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                    >
                        WHY IS IT REQUIRED ?
                    </Text>
                </Heading>
                <Stack>
                    <Text
                        color={useColorModeValue('gray.500', 'gray.200')}
                        fontSize={{ base: 'lg' }}
                        textAlign={'center'}
                        p={4}
                    >
                        Manual Placement which is done at various colleges is by
                        human intervention due to which there is a maximum
                        chance of errors. Placement officers have to manage the
                        student’s profile and their documents and also have to
                        collect the information of various companies who comes
                        for recruitment. They have to arrange profiles of
                        students according to various streams and notify them
                        each time according to company requirements. They are
                        also required to submit the information of students and
                        if any changes or updates are required in the profile of
                        any student, it has to be done manually. This process is
                        so difficult and tedious when the number of students
                        increases. Therefore, a Placement Management System is
                        very useful.
                    </Text>
                    <Text
                        color={useColorModeValue('gray.500', 'gray.200')}
                        fontSize={{ base: 'lg' }}
                        textAlign={'center'}
                        p={4}
                    >
                        Database Management System is a software for storing and
                        retrieving users &apos; data while considering
                        appropriate security measures. It consists of a group of
                        programs which manipulate the database. The DBMS accepts
                        the request for data from an application and instructs
                        the operating system to provide the specific data. In
                        large systems, a DBMS helps users and other third-party
                        software to store and retrieve data. DBMS allows users
                        to create their own databases as per their requirement.
                        It provides an interface between the data and the
                        software application.
                    </Text>
                    <Text
                        color={useColorModeValue('gray.500', 'gray.200')}
                        fontSize={{ base: 'lg' }}
                        textAlign={'center'}
                        p={4}
                    >
                        Placement Management System is a web App which provides
                        information on placement providers and the placements
                        and also keeps up to date information of all students.
                        It is a platform where students can view and assess
                        their opportunities. The system will be having different
                        types of interfaces for different type of users – Admin
                        or Student
                    </Text>
                </Stack>
            </Stack>
            <Box
                p={16}
                bgImage="url('/assests/images/Background-Images/blurry.png')"
                bgSize={'cover'}
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Heading
                    lineHeight={1.1}
                    textAlign={'center'}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                    my={4}
                >
                    <Text color={'white'}>INTRIGUING FEATURES</Text>
                </Heading>
                <Box
                    width={'90%'}
                    h={'500px'}
                    borderRadius={'15px'}
                    m={4}
                    display={'flex'}
                >
                    <Image
                        alt={'Hero Image1'}
                        borderLeftRadius={'35px'}
                        w={'63%'}
                        h={'500px'}
                        src={features[featureIndex].image}
                    />
                    <Box
                        ml={8}
                        bg={'white'}
                        w={'27%'}
                        h={'500px'}
                        borderTopRightRadius={'35px'}
                        borderBottomRightRadius={'35px'}
                    >
                        <Heading
                            lineHeight={1.1}
                            textAlign={'center'}
                            fontWeight={800}
                            fontSize={{ base: '2xl' }}
                            my={4}
                            textTransform={'uppercase'}
                        >
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                            >
                                {features[featureIndex].portal}
                            </Text>
                        </Heading>

                        <Heading
                            fontSize={{ base: '3xl' }}
                            textAlign={'center'}
                            textTransform={'uppercase'}
                            bg={
                                'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                            }
                            p={3}
                        >
                            <Text color={'white'}>
                                {features[featureIndex].heading}
                            </Text>
                        </Heading>
                        <Box
                            display={'flex'}
                            p={2}
                            my={4}
                            alignItems={'center'}
                            flexDir={'column'}
                        >
                            <IconBox
                                h={'60px'}
                                w={'60px'}
                                bg={
                                    'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                                }
                            >
                                <Icon
                                    h={'20px'}
                                    w={'20px'}
                                    color="white"
                                    as={MdDescription}
                                />
                            </IconBox>
                            <Text
                                color={'gray.500'}
                                fontSize={{ base: 'xl' }}
                                textAlign={'center'}
                                p={2}
                                my={4}
                            >
                                {features[featureIndex].description}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box p={16} pb={32} pt={10}>
                <Stack spacing={8} width={'100%'} direction={'column'}>
                    <Stack
                        p={5}
                        alignItems={'center'}
                        justifyContent={{
                            base: 'flex-start',
                            md: 'space-around',
                        }}
                        direction={{
                            base: 'column',
                            md: 'row',
                        }}
                    >
                        <Stack
                            width={{
                                base: '100%',
                            }}
                            textAlign={'center'}
                        >
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '5xl' }}
                            >
                                <Text
                                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                                    bgClip="text"
                                    fontWeight="extrabold"
                                    mb={'0.8rem'}
                                >
                                    TECHNOLOGIES USED
                                </Text>
                                <Text
                                    fontSize={'xl'}
                                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                                    bgClip="text"
                                    fontWeight="extrabold"
                                >
                                    IN DEVELOPING THIS PROJECT
                                </Text>
                            </Heading>
                        </Stack>
                    </Stack>
                    <Stack
                        p={3}
                        py={3}
                        justifyContent={{
                            base: 'flex-start',
                            md: 'space-evenly',
                        }}
                        direction={{
                            base: 'column',
                            md: 'row',
                        }}
                        alignItems={{ md: 'center' }}
                        bg="white"
                        rounded={8}
                        boxShadow="#FF0080 0px 3px 8px"
                    >
                        <Heading
                            size={'xl'}
                            textTransform={'uppercase'}
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                        >
                            FRONTEND TECHNOLOGIES →
                        </Heading>
                        <List spacing={3} textAlign="start" p={4}>
                            {frontendTech.map((desc, id) => (
                                <ListItem
                                    key={desc.id}
                                    color={'gray.600'}
                                    fontSize={'1.3rem'}
                                >
                                    <ListIcon as={MdSettings} color="#FF0080" />
                                    {desc.desc}
                                </ListItem>
                            ))}
                        </List>
                    </Stack>
                    <Stack
                        p={3}
                        py={3}
                        justifyContent={{
                            base: 'flex-start',
                            md: 'space-evenly',
                        }}
                        direction={{
                            base: 'column',
                            md: 'row',
                        }}
                        alignItems={{ md: 'center' }}
                        bg="white"
                        rounded={8}
                        boxShadow="#FF0080 0px 3px 8px"
                    >
                        <Heading
                            size={'xl'}
                            textTransform={'uppercase'}
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                        >
                            BACKEND TECHNOLOGIES →
                        </Heading>
                        <List spacing={3} textAlign="start" p={4}>
                            {backendTech.map((desc, id) => (
                                <ListItem
                                    key={desc.id}
                                    color={'gray.600'}
                                    fontSize={'1.3rem'}
                                >
                                    <ListIcon as={MdSettings} color="#FF0080" />
                                    {desc.desc}
                                </ListItem>
                            ))}
                        </List>
                    </Stack>
                </Stack>
            </Box>
            <Footer />
        </React.Fragment>
    );
};

export default Landing;
