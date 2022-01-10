import { Flex } from '@chakra-ui/react';

const Separator = (props) => {
    const { children, ...rest } = props;
    return (
        <Flex
            h="4px"
            w="100%"
            bg="linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)"
            {...rest}
        >
            {children}
        </Flex>
    );
};

export default Separator;
