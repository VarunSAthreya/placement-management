import {
    Avatar,
    AvatarGroup,
    Flex,
    IconButton,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const PlacedTable = ({ placed }) => {
    const router = useRouter();
    const { name, package: CTC, selected } = placed;

    const textColor = useColorModeValue('gray.700', 'white');

    return (
        <Tr>
            <Td minWidth={{ sm: '250px' }} pl="0px">
                <Text
                    fontSize="md"
                    textAlign={'center'}
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                >
                    {name}
                </Text>
            </Td>
            <Td>
                <Flex justify={'center'}>
                    <AvatarGroup size="sm">
                        {selected.map((student) => {
                            return (
                                <Avatar
                                    key={student.user.USN}
                                    color="white"
                                    bg={
                                        'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                                    }
                                    name={student.user.name}
                                    src={student.user.name}
                                    _hover={{ zIndex: '3', cursor: 'pointer' }}
                                />
                            );
                        })}
                    </AvatarGroup>
                </Flex>
            </Td>
            <Td>
                <Text
                    textAlign={'center'}
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    pb=".5rem"
                >
                    {selected.length}
                </Text>
            </Td>
            <Td>
                <Text
                    textAlign={'center'}
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    pb=".5rem"
                >
                    {CTC}
                </Text>
            </Td>
            <Td>
                <Flex justifyContent={'center'}>
                    <IconButton
                        h={'45px'}
                        w={'45px'}
                        color={'white'}
                        aria-label="Student Info"
                        bg={
                            'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                        }
                        _hover={{
                            bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                        }}
                        _focus={{ outline: 'none' }}
                        variant="no-hover"
                        icon={<BsFillInfoCircleFill />}
                        onClick={() => {
                            router.push(`/placed/${name}`);
                        }}
                    />
                </Flex>
            </Td>
        </Tr>
    );
};

export default PlacedTable;
