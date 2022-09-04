import { Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
    id: string;
};

const Importance: FC<Props> = ({ id }) => {
    return (
        <Stack
            id={id}
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
                <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
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
                    human intervention due to which there is a maximum chance of
                    errors. Placement officers have to manage the student’s
                    profile and their documents and also have to collect the
                    information of various companies who comes for recruitment.
                    They have to arrange profiles of students according to
                    various streams and notify them each time according to
                    company requirements. They are also required to submit the
                    information of students and if any changes or updates are
                    required in the profile of any student, it has to be done
                    manually. This process is so difficult and tedious when the
                    number of students increases. Therefore, a Placement
                    Management System is very useful.
                </Text>
                <Text
                    color={useColorModeValue('gray.500', 'gray.200')}
                    fontSize={{ base: 'lg' }}
                    textAlign={'center'}
                    p={4}
                >
                    Database Management System is a software for storing and
                    retrieving users &apos; data while considering appropriate
                    security measures. It consists of a group of programs which
                    manipulate the database. The DBMS accepts the request for
                    data from an application and instructs the operating system
                    to provide the specific data. In large systems, a DBMS helps
                    users and other third-party software to store and retrieve
                    data. DBMS allows users to create their own databases as per
                    their requirement. It provides an interface between the data
                    and the software application.
                </Text>
                <Text
                    color={useColorModeValue('gray.500', 'gray.200')}
                    fontSize={{ base: 'lg' }}
                    textAlign={'center'}
                    p={4}
                >
                    Placement Management System is a web App which provides
                    information on placement providers and the placements and
                    also keeps up to date information of all students. It is a
                    platform where students can view and assess their
                    opportunities. The system will be having different types of
                    interfaces for different type of users – Admin or Student
                </Text>
            </Stack>
        </Stack>
    );
};

export default Importance;
