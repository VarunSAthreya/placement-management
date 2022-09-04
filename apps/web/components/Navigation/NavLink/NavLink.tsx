import { Link, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

type Props = {
    link: string;
    children: ReactNode;
};

const NavLink: FC<Props> = ({ link, children }) => {
    const router = useRouter();
    const color = useColorModeValue('black', 'white');

    return (
        <Link
            px={3}
            py={1}
            fontWeight={400}
            textTransform={'uppercase'}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                fontWeight: 600,
            }}
            _focus={{ outline: 'none' }}
            color={router.asPath === link ? '#FF0080' : color}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            sx={{
                position: 'relative',
                letterSpacing: '2px',
                padding: '12px',
            }}
            href={link.toString().toLowerCase()}
        >
            {children}
        </Link>
    );
};

export default NavLink;
