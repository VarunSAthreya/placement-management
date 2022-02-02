import React, { FC } from 'react';
import { Center, Spinner, useColorModeValue } from '@chakra-ui/react';

const Loader: FC = () => {
    return (
        <Center h="100vh">
            <Spinner
                thickness="10px"
                emptyColor={useColorModeValue('#f8f9fa', '#18191A')}
                color="#FF0080"
                h={24}
                w={24}
            />
        </Center>
    );
};

export default Loader;
