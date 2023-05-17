import Head from 'next/head'
import styles from '@/pages/styles/Home.module.scss'

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
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.container}>メインコンテンツです。</main>
        </>
    )
}
