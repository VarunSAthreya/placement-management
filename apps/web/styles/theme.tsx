import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#f8f9fa', '#18191A')(props),
            },
        }),
    },
    breakpoints: {
        sm: '26em',
        md: '48em',
        lg: '77.5em',
        xl: '90em',
        '2xl': '96em',
    },
});

export default theme;
