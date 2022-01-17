import { Center, Spinner } from '@chakra-ui/react';

const Loader = () => {
    return (
        <Center h="100vh">
            <Spinner
                thickness="10px"
                emptyColor="#18191A"
                color="#FF0080"
                h={24}
                w={24}
            />
        </Center>
    );
};

export default Loader;
