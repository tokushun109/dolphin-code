import Document, { Head, Html, Main, NextScript } from 'next/document'

// class Document extends NextDocument {
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Caveat&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/earlyaccess/hannari.css'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument
