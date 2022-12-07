import React, { FC } from 'react';
import { Box, Image, Link } from '@chakra-ui/react';

type Props = {
    width: string;
};

const Logo: FC<Props> = (props) => {
    const { width } = props;
    return (
        <Box>
            <Link href="/landing" _focus={{ outline: 'none' }}>
                <Image
                    src={'/assests/images/Logo/Logo.png'}
                    alt="Logo"
                    maxW={width}
                    h={'auto'}
                    _focus={{ outline: 'none' }}
                />
            </Link>
        </Box>
    );
};

export default Logo;
