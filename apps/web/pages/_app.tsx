import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import client from '../lib/client';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    );
};

export default App;
