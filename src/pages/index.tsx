import Head from 'next/head'
import styles from '@/pages/styles/Home.module.scss'
import Main from '@/components/containers/Main'
import Section from '@/components/containers/Section'
import Footer from '@/components/containers/Footer'
import Header from '@/components/templates/Header'
import { NavigationEnum } from '@/components/templates/Header/types'

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
                <Main>
                    <Header />
                </Main>
                <Section
                    id={NavigationEnum.Service}
                    isDark={false}
                    title='Service'
                >
                    <div></div>
                </Section>
                <Section id={NavigationEnum.Company} title='Company'>
                    <div></div>
                </Section>
                <Section
                    id={NavigationEnum.Contact}
                    isDark={false}
                    title='Contact'
                >
                    <div className={styles.contactContainer}>
                        <iframe
                            src='https://docs.google.com/forms/d/e/1FAIpQLSc3W1n1WlM6kAtmIANV1Y-mKJDy3N9QGZopEPWX9syUzSyEgA/viewform?embedded=true'
                            width='100%'
                            height='1100'
                        >
                            読み込んでいます…
                        </iframe>{' '}
                    </div>
                </Section>
                <Footer>Footer</Footer>
            </main>
        </>
    )
}
