import {
    Box,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
} from '@chakra-ui/react';
import type { FC } from 'react';
import { MdSettings } from 'react-icons/md';

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

type Props = {
    id: string;
};

const TechnologyUsed: FC<Props> = ({ id }) => {
    return (
        <Box id={id} p={16} pb={32} pt={10}>
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
                        {frontendTech.map((desc) => (
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
                        {backendTech.map((desc) => (
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
    );
};

export default TechnologyUsed;
