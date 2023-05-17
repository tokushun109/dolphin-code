import { ReactNode } from 'react'
import styles from './styles/style.module.scss'

type Props = {
    children: ReactNode
}

const Header = ({ children }: Props) => {
    return <header className={styles.container}>{children}</header>
}

export default Header
