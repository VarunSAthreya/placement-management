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
});

export default theme;
