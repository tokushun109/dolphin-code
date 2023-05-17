import styles from './styles/style.module.scss'

const Header = () => {
    return (
        <header className={styles.container}>
            <h1 className={styles.logo}>Dolphin Code</h1>
            <nav>
                <ul className={styles.navigation}>
                    <li>Company</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
