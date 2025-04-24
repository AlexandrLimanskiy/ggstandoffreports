import Nav from "../Start/Nav";
import Channels from "./Channels";

import styles from '/src/assets/scssComponents/pages/Home/Home.module.scss'

export default function Home() {
    return(
        <>
            <div className="home">
                    <div className="home__content">
                        <div className="content">
                            <Nav />
                        </div>
                        <div className={styles.home__content__items}>
                            <div className={styles.home__content__items__dates}>
                                <div className="home__content__items__dates__items">
                                    <div className={styles.home__content__items__dates__items__title}>
                                        <h2>Даты</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.home__content__items__channels}>
                                <div className="home__content__items__channels__items">
                                    <div className={styles.home__content__items__channels__items__title }>
                                        <h2>Список чатов, необходимых к отправке</h2>
                                    </div>
                                    <div className={styles.home__content__items__channels__channel_item}>
                                        <Channels/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.home__content__items__checked_channels}>
                                <div className="home__content__items__checked_channels__items">
                                    <div className={styles.home__content__items__checked_channels__items__title}>
                                        <h2>Отмеченные чаты</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}