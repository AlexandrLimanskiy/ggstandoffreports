import styles from '/src/assets/scssComponents/pages/Home/Channel.module.scss';

export default function Channel({ title, description, link, onDelete }) {
  return (
    <>
      <div className="channel">
        <div className="channel__content">
          <div className="channel__content__items">
            <div className={styles.channel__content__items__item}>
              <div className={styles.channel__content__items__item__title}>
                <h3>
                  {title}
                </h3>
              </div>
              <div className={styles.channel__content__items__item__description}>
                <p>
                  {description}
                </p>
              </div>
              <div className={styles.channel__content__items__item__buttons}>
                <div className={styles.channel__content__items__item__link}>
                  <a href={link} target='_blank'>
                    Перейти
                  </a>
                </div>
                <div className={styles.channel__content__items__item__delete}>
                  <button onClick={onDelete}>Удалить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
