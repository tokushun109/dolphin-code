import { ReactNode } from 'react'
import styles from './styles/style.module.scss'
import { NavigationType } from '@/components/containers/Header/types'

type Props = {
    id: NavigationType
    title?: string
    isDark?: boolean
    children: ReactNode
}

const Section = ({ id, title, isDark = true, children }: Props) => {
    return (
        <section
            id={id}
            className={`${styles.container} ${
                styles[isDark ? 'dark' : 'light']
            }`}
        >
            <div className={styles.content}>
                <h2
                    className={`${styles.title} ${
                        styles[isDark ? 'dark' : 'light']
                    }`}
                >
                    {title}
                </h2>
                <div className={styles.main}>{children}</div>
            </div>
        </section>
    )
}

export default Section
