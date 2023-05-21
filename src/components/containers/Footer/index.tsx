import { scrollToNavigationId } from '@/utils/link'
import { NavigationEnum, NavigationType } from '../Header/types'
import styles from './styles/style.module.scss'

const navClickHandler = (id: NavigationType) => {
    scrollToNavigationId(id)
}

const Footer = () => {
    return (
        <footer className={styles.container}>
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
            <small className={styles.copyRight}>
                © 2023 合同会社ドルフィンコード All rights reserved.
            </small>
        </footer>
    )
}

export default Footer
