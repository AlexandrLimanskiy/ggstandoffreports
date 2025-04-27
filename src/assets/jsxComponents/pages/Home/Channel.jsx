import { useState } from 'react';
import styles from '/src/assets/scssComponents/pages/Home/Channel.module.scss';

export default function Channel({ channel, onDelete, onUpdate }) {
  const [visited, setVisited] = useState(channel.visited || false);
  const [status, setStatus] = useState(channel.status || 'pending'); // 'approved' | 'pending' | 'rejected'

  const handleVisit = () => {
    const newVisited = !visited;
    setVisited(newVisited);
    onUpdate({ ...channel, visited: newVisited, status });
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onUpdate({ ...channel, visited, status: newStatus });
  };

  const labels = {
    approved: 'Одобрено',
    pending: 'В ожидании',
    rejected: 'Отклонено',
  };

  return (
    <div className="channel">
      <div className="channel__content">
        <div className="channel__content__items">
          <div className={styles.channel__content__items__item}>

            <div className={styles.channel__content__items__item__title}>
              <h3>{channel.title}</h3>
            </div>

            <div className={styles.channel__content__items__item__description}>
              <p>{channel.description}</p>
            </div>

            <div className={styles.channel__content__items__item__buttons}>
              <div className={styles.channel__content__items__item__link}>
                <a
                  href={channel.link}
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

                <span className={`${styles.statusBadge} ${styles[`statusBadge--${status}`]}`}>
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
