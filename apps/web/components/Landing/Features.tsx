import { Box, Heading, Icon, Image, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { MdDescription } from 'react-icons/md';
import IconBox from '../Icons/IconBox';

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

type Props = {
    id: string;
};

const Features: FC<Props> = ({ id }) => {
    const [featureIndex, setFeatureIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFeatureIndex((index) => (index + 1) % 4);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box
            id={id}
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
    );
};

export default Features;
