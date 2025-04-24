import { useState } from 'react';
import styles from '/src/assets/scssComponents/pages/Home/Channel.module.scss';

export default function Channel({ title, description, link, onDelete }) {
  const [visited, setVisited] = useState(false);
  const [status, setStatus] = useState('pending'); // 'approved' | 'pending' | 'rejected'

  const handleVisit = () => setVisited(true);
  const handleStatusChange = (e) => setStatus(e.target.value);

  // Для отображения текста на русском
  const labels = {
    approved: 'Одобрено',
    pending: 'В ожидании',
    rejected: 'Отклонено'
  };

  return (
    <div className="channel">
      <div className="channel__content">
        <div className="channel__content__items">
          <div className={styles.channel__content__items__item}>
            
            {/* заголовок и описание */}
            <div className={styles.channel__content__items__item__title}>
              <h3>{title}</h3>
            </div>
            <div className={styles.channel__content__items__item__description}>
              <p>{description}</p>
            </div>

            {/* кнопки Перейти и Удалить */}
            <div className={styles.channel__content__items__item__buttons}>
              <div className={styles.channel__content__items__item__link}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleVisit}
                >
                  Перейти
                </a>
              </div>
              <div className={styles.channel__content__items__item__delete}>
                <button onClick={onDelete}>Удалить</button>
              </div>
                          {/* чекбокс «Просмотрено» */}
            <div className={styles.channel__content__items__item__checkbox}>
              <label>
                <input
                  type="checkbox"
                  checked={visited}
                  onChange={handleVisit}
                />
                <span>Просмотрено</span>
              </label>
            </div>

            {/* селект для смены статуса */}
            <div className={styles.channel__content__items__item__status}>
              <select
                value={status}
                onChange={handleStatusChange}
                className={styles.statusSelect}
              >
                <option value="pending">В ожидании</option>
                <option value="approved">Одобрено</option>
                <option value="rejected">Отклонено</option>
              </select>
              <span
                className={`${styles.statusBadge} ${styles[`statusBadge--${status}`]}`}
              >
                {labels[status]}
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
