import styles from './styles/style.module.scss'
import Image from 'next/image'

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.sentence}>
                    <div className={styles.sentenceWrapper}>
                        <p>繊細さんが</p>
                        <p>
                            自分らしく生きる
                            <br className={styles.sm} />
                            お手伝いをしたい
                        </p>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image
                        src='/img/main.png'
                        width={250}
                        height={350}
                        alt='main'
                    />
                </div>
            </div>
        </div>
    )
}

export default Main
