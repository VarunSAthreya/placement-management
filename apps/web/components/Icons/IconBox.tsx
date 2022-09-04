/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, HTMLChakraProps } from '@chakra-ui/react';
import type { FC, HTMLAttributes, ReactNode } from 'react';

interface IconBoxProps {
    children?: ReactNode | ReactNode[];
}

type props = IconBoxProps & HTMLAttributes<any> & HTMLChakraProps<any>;

const IconBox: FC<props> = ({ children, ...rest }) => {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'12px'}
            {...rest}
        >
            {children}
        </Flex>
    );
};

export default IconBox;
