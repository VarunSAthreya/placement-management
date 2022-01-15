import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_API_URL });
const authLink = setContext(async (req, { headers }) => {
    let token;
    if (typeof window !== 'undefined') {
        token = localStorage.getItem('token');
    }

    return {
        ...headers,
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
        },
    };
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    ssrMode: true,
});

export default client;
