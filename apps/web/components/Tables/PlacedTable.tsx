import {
    Avatar,
    AvatarGroup,
    Flex,
    Td,
    Text,
    Tr,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const PlacedTable = ({ placed }) => {
    const router = useRouter();
    const { name, members, ctc } = placed;
    const textColor = useColorModeValue('gray.700', 'white');
    return (
        <Tr>
            <Td minWidth={{ sm: '250px' }} pl="0px">
                <Flex
                    align="center"
                    py=".8rem"
                    minWidth="100%"
                    flexWrap="nowrap"
                >
                    <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                    >
                        {name}
                    </Text>
                </Flex>
            </Td>

            <Td>
                <AvatarGroup size="sm">
                    {members.map((member) => {
                        return (
                            <Avatar
                                key={member}
                                color="white"
                                bg={
                                    'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                                }
                                name="Ryan Florence"
                                src={member}
                                _hover={{ zIndex: '3', cursor: 'pointer' }}
                            />
                        );
                    })}
                </AvatarGroup>
            </Td>
            <Td>
                <Text
                    textAlign={'center'}
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    pb=".5rem"
                >
                    {ctc}
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
