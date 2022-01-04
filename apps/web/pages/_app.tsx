import { NextPage } from 'next';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
