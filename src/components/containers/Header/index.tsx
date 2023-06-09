import styles from './styles/style.module.scss'
import Router from 'next/router'
import { NavigationEnum, NavigationType } from './types'
import { scrollToNavigationId } from '@/utils/link'

const navClickHandler = (id: NavigationType) => {
    scrollToNavigationId(id)
}

const Header = () => {
    return (
        <header className={styles.container}>
            <h1
                className={styles.logo}
                onClick={() => {
                    Router.push('/')
                }}
            >
                Dolphin Code
            </h1>
            <nav>
                <ul className={styles.navigation}>
                    <li
                        onClick={() => {
                            navClickHandler(NavigationEnum.About)
                        }}
                    >
                        About
                    </li>
                    <li
                        onClick={() => {
                            navClickHandler(NavigationEnum.Service)
                        }}
                    >
                        Service
                    </li>
                    <li
                        onClick={() => {
                            navClickHandler(NavigationEnum.Company)
                        }}
                    >
                        Company
                    </li>
                    <li
                        onClick={() => {
                            navClickHandler(NavigationEnum.Contact)
                        }}
                    >
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
