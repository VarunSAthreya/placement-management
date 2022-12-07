import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
