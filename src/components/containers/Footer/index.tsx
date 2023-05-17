import { ReactNode } from 'react'
import styles from './styles/style.module.scss'

type Props = {
    children: ReactNode
}

const Footer = ({ children }: Props) => {
    return <footer className={styles.container}>{children}</footer>
}

export default Footer
