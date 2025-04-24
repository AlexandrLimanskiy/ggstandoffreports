import { useState } from 'react';
import styles from '/src/assets/scssComponents/pages/Home/Channel.module.scss';

export default function Channel({ title, description, link, onDelete }) {
  const [visited, setVisited] = useState(false);  // Состояние для чекбокса

  const handleVisit = () => {
    setVisited(true);  // Активируем чекбокс при нажатии на кнопку "Перейти"
  };

  return (
    <div className="channel">
      <div className="channel__content">
        <div className="channel__content__items">
          <div className={styles.channel__content__items__item}>
            <div className={styles.channel__content__items__item__title}>
              <h3>{title}</h3>
            </div>
            <div className={styles.channel__content__items__item__description}>
              <p>{description}</p>
            </div>
            <div className={styles.channel__content__items__item__buttons}>
              <div className={styles.channel__content__items__item__link}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleVisit}  // Активируем чекбокс по клику
                >
                  Перейти
                </a>
              </div>
              <div className={styles.channel__content__items__item__delete}>
                <button onClick={onDelete}>Удалить</button>
              </div>
            </div>
            {/* Добавляем чекбокс */}
            <div className={styles.channel__content__items__item__checkbox}>
              <label>
                <input type="checkbox" checked={visited} readOnly /> <p>Просмотрено</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
