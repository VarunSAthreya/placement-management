import { Link, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NavLink = ({ link, children }) => {
    const router = useRouter();
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
            color={
                router.asPath === link
                    ? '#FF0080'
                    : // eslint-disable-next-line react-hooks/rules-of-hooks
                      useColorModeValue('black', 'white')
            }
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            sx={{
                position: 'relative',
                letterSpacing: '2px',
                padding: '12px',
            }}
            href={children.toString().toLowerCase()}
        >
            {children}
        </Link>
    );
};

export default NavLink;
