import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
