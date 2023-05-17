import { ReactNode } from 'react'
import styles from './styles/style.module.scss'

type Props = {
    title?: string
    children: ReactNode
}

const Section = ({ title, children }: Props) => {
    return (
        <section className={styles.container}>
            <h2>{title}</h2>
            <div>{children}</div>
        </section>
    )
}

export default Section
