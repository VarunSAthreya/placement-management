import {
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import type { FC } from 'react';

type Props = {
    id: string;
};

const Main: FC<Props> = ({ id }) => {
    return (
        <Box pos={'relative'} py={16} id={id}>
            <Stack
                align={'center'}
                position={'relative'}
                bottom={'70px'}
                spacing={{ base: 8, md: 10 }}
                px={{ base: 10, md: 20 }}
                py={{ base: 10, md: 28 }}
                direction={{ base: 'column', md: 'row' }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 8 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        textAlign={{ base: 'center', md: 'left' }}
                        fontSize={{
                            base: '4xl',
                            md: '5xl',
                            lg: '6xl',
                        }}
                    >
                        <Text
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                            fontWeight="extrabold"
                        >
                            WELCOME,
                        </Text>
                        <Text
                            fontSize={{ base: '3xl', lg: '4xl' }}
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                        >
                            TO PLACEMENT PORTAL
                        </Text>
                    </Heading>
                    <Text
                        color={useColorModeValue('gray.500', 'gray.200')}
                        fontSize={{ base: 'sm', md: 'md' }}
                    >
                        Placement Management System manages student information
                        in the college with regard to placement. It has the
                        facility of maintaining the details of the student,
                        thereby reducing the manual work. It will save time and
                        energy which are spending in making reports and
                        collecting data. <br />
                        Placement Management System can be accessed throughout
                        the college with proper login provided.
                    </Text>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}
                >
                    <Box position={'relative'} height={'300px'} width={'full'}>
                        <Image
                            pos={'absolute'}
                            top={'-15px'}
                            alt={'Hero Image1'}
                            rounded={'15px'}
                            w={'60%'}
                            h={'70%'}
                            src={'/assests/images/Website-Images/Image1.png'}
                        />
                        <Image
                            pos={'absolute'}
                            top={'50px'}
                            left={'45%'}
                            alt={'Hero Image2'}
                            rounded={'15px'}
                            w={'60%'}
                            h={'80%'}
                            src={'/assests/images/Website-Images/Image4.png'}
                        />
                        <Image
                            pos={'absolute'}
                            top={'230px'}
                            right={'25%'}
                            alt={'Hero Image3'}
                            rounded={'15px'}
                            w={'60%'}
                            h={'80%'}
                            src={'/assests/images/Website-Images/Image3.png'}
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
    );
};

export default Main;
