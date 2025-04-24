import { useState } from "react";

import styles from '/src/assets/scssComponents/pages/Home/ChannelAdd.module.scss'

export default function ChannelAdd({ onAdd }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleChannelAdd = (e) => {
    e.preventDefault();
    if(formData.title && formData.link) {
      onAdd(formData);
      setFormData({title: "", description: "", link: ""});
    }
  }

  return(
    <>
      <div className={styles.channel_add}>
        <div className="channel_add__content">
          <div className="channel_add__content__items">
            <div className={styles.channel_add__content__items__form}>
              <form action="#" onSubmit={handleChannelAdd}>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} className={styles.channel_add__content__items__form__input} placeholder="Название" />
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} className={styles.channel_add__content__items__form__input} placeholder="Описание"  />
                <input type="text" name="link" value={formData.link} onChange={handleInputChange} className={styles.channel_add__content__items__form__input} placeholder="Ссылка"  />
                <button type="submit" className={styles.channel_add__content__items__form__button}>Добавить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
