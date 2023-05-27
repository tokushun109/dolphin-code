import Head from 'next/head'
import styles from '@/pages/styles/Home.module.scss'
import Main from '@/components/containers/Main'
import Section from '@/components/containers/Section'
import Footer from '@/components/containers/Footer'
import Header from '@/components/containers/Header'
import { NavigationEnum } from '@/components/containers/Header/types'
import Image from 'next/image'

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
                <Header />
                <Main />
                <Section id={NavigationEnum.About} title='About'>
                    <div className={styles.aboutContainer}>
                        <p>繊細で傷つきやすい性格に悩み</p>
                        <p>自分らしく生きることができない方々に向けて</p>
                        <p>
                            <span>繊細さを強みに変えて生きることを</span>
                        </p>
                        <p>サポートする情報を発信しています</p>
                    </div>
                </Section>
                <Section
                    id={NavigationEnum.Service}
                    isDark={false}
                    title='Service'
                >
                    <div className={styles.serviceContainer}>
                        <div
                            className={`${styles.serviceContainerWrapper} ${styles.blog}`}
                        >
                            <div>
                                <h3 className={styles.title}>Blog</h3>
                                <div className={styles.content}>
                                    <div>
                                        <a href='https://tokupapa.com/'>
                                            <div
                                                className={
                                                    styles.imageContainer
                                                }
                                            >
                                                <Image
                                                    fill
                                                    alt='tokupapa-blog'
                                                    src='/img/tokupapa-blog.png'
                                                    style={{
                                                        objectFit: 'contain',
                                                    }}
                                                />
                                            </div>
                                            <div>とくぱぱのHSP応援ブログ</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.serviceContainerWrapper}>
                            <div>
                                <h3 className={styles.title}>Book</h3>
                                <div className={styles.content}>準備中</div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section id={NavigationEnum.Company} title='Company'>
                    <div className={styles.companyContainer}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>会社名</th>
                                    <td>合同会社ドルフィンコード</td>
                                </tr>
                                <tr>
                                    <th>代表者名</th>
                                    <td>徳永 駿太</td>
                                </tr>
                                <tr>
                                    <th>資本金</th>
                                    <td>1,000,000円</td>
                                </tr>
                                <tr>
                                    <th>所在地</th>
                                    <td>
                                        東京都新宿区西新宿3丁目3番13号西新宿水間ビル2F
                                    </td>
                                </tr>
                                <tr>
                                    <th>設立年月日</th>
                                    <td>令和5年4月7日</td>
                                </tr>
                                <tr>
                                    <th>電話番号</th>
                                    <td>050-5471-0517</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>
                <Section
                    id={NavigationEnum.Contact}
                    isDark={false}
                    title='Contact'
                >
                    <iframe
                        src='https://docs.google.com/forms/d/e/1FAIpQLSc3W1n1WlM6kAtmIANV1Y-mKJDy3N9QGZopEPWX9syUzSyEgA/viewform?embedded=true'
                        width='900'
                        height='1100'
                    >
                        読み込んでいます…
                    </iframe>
                </Section>
                <Footer />
            </main>
        </>
    )
}
