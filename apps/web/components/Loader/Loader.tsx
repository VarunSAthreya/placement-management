import { Flex, Spinner } from '@chakra-ui/react';

const Loader = () => {
    return (
        <Flex justify={'center'}>
            <Spinner
                thickness="10px"
                emptyColor="#18191A"
                color="#FF0080"
                h={24}
                w={24}
            />
        </Flex>
    );
};

export default Loader;
