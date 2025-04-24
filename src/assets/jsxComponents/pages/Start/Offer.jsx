import { Link } from 'react-router-dom';

import styles from '/src/assets/scssComponents/pages/Start/Offer.module.scss'

export default function Offer() {
    return(
        <>
            <div className={styles.offer}>
                <div className="offer__content">
                    <div className={styles.offer__content__items}>
                        <div className={styles.offer__content__items__info}>
                            <h1>
                            Инструмент для работы  с пиаром проекта GGStandoff
                            </h1>
                            <p>
                            Данное приложение создано для людей, которые занимаются пиаром проекта в  различных ТГК. Здесь присутствуют такие настройки, как выбор аккаунтов, добавление в них необходимых скриншотов
                            дропа с GGStandoff, айди аккаунта, список чатов, в которые необходимо совершить отправку скриншотов, а также примеры таких сообщений.
                            </p>
                            <Link to="/home">
                                <button>
                                    Приступить к работе
                                </button>
                            </Link>
                        </div>
                        <div className={styles.offer__content__items__img}>
                            <img src="/public/img/pages/Start/G.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}