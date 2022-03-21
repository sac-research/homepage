import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="theme-compiled">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <script
                        src="https://kit.fontawesome.com/6b7f31a5c0.js"
                        crossorigin="anonymous"
                    ></script>
                </Head>
                <body className={`antialiased text-teal-600 text-lg bg-white leading-base`}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
