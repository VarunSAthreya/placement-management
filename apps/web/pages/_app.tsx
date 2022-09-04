import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import client from '../lib/client';
import '../styles/globals.css';
import theme from '../styles/theme';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Placement Portal</title>
                <meta
                    name="description"
                    content="Placement Portal Created for DBMS mini project by: Varun S Athreya & Sandeep M"
                />
            </Head>
            <ApolloProvider client={client}>
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </ApolloProvider>
        </>
    );
};

export default App;
