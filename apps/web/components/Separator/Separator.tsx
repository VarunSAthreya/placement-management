import { Flex, FlexProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    style?: FlexProps;
};

const Separator: FC<Props> = (props) => {
    const { children, style } = props;
    return (
        <Flex
            h="4px"
            w="100%"
            bg="linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)"
            {...style}
        >
            {children}
        </Flex>
    );
};

export default Separator;
