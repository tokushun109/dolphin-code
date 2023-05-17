import { ReactNode } from 'react'
import styles from './styles/style.module.scss'

type Props = {
    children: ReactNode
}

const Section = ({ children }: Props) => {
    return <section className={styles.container}>{children}</section>
}

export default Section
