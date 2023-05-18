import { ReactNode } from 'react'
import styles from './styles/style.module.scss'
import { NavigationType } from '@/components/templates/Header/types'

type Props = {
    id: NavigationType
    title?: string
    children: ReactNode
}

const Section = ({ id, title, children }: Props) => {
    return (
        <section id={id} className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <div>{children}</div>
            </div>
        </section>
    )
}

export default Section
