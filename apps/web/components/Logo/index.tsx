import { Box, Image, Link } from '@chakra-ui/react';
import type { FC } from 'react';

type Props = {
    width: any;
};

const Logo: FC<Props> = (props) => {
    const { width } = props;
    return (
        <Box>
            <Link href="/" _focus={{ outline: 'none' }}>
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
