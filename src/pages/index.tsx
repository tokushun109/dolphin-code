import Head from 'next/head'
import styles from '@/pages/styles/Home.module.scss'
import Section from '@/components/containers/Section'
import Footer from '@/components/containers/Footer'
import Header from '@/components/templates/Header'

export default function Home() {
    return (
        <>
            <Head>
                <title>Dolphin Code</title>
                <meta
                    name='description'
                    content='合同会社会社ドルフィンコードの会社ホームページです。'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta name='robots' content='noindex' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.container}>
                <Section>
                    <Header />
                </Section>
                <Section title='Service'>
                    <div></div>
                </Section>
                <Section title='Company'>
                    <div></div>
                </Section>
                <Section title='Contact'>
                    <div></div>
                </Section>
                <Footer>Footer</Footer>
            </main>
        </>
    )
}
