import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="theme-compiled">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <Script
                        src="https://kit.fontawesome.com/6b7f31a5c0.js"
                        crossOrigin="anonymous"
                    ></Script>
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
