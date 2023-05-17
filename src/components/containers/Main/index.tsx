import { ReactNode } from 'react'
import styles from './styles/style.module.scss'

type Props = {
    children: ReactNode
}

const Main = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <div>{children}</div>
        </div>
    )
}

export default Main
