import styles from '/src/assets/scssComponents/pages/Start/Nav.module.scss'

export default function Nav() {
    return(
        <>
            <div className={styles.nav}>
                <div className="nav__content">
                    <div className={styles.nav__content__items}>
                        <div className={styles.nav__content__logo}>
                            <img src="/public/img/pages/Start/logo.svg" alt="" />
                        </div>
                        <div className={styles.nav__content__items__list}>
                            <ul>
                                <li><a href="#">Главная</a></li>
                                <li><a href="#">Отчёты</a></li>
                                <li><a href="#">О проекте</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}