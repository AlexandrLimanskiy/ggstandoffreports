import React from "react";
import Papa from "papaparse";
import styles from "/src/assets/scssComponents/pages/Home/ChannelImport.module.scss";

export default function ChannelImport({ onImport }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        onImport(results.data);
      },
    });
  };

  return (
    <div className={styles.channel_import}>
      <div className={styles.channel_import__content}>
        <div className={styles.channel_import__content__items}>
          {/* Скрытый нативный инпут */}
          <input
            id="csvUpload"
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className={styles.hiddenInput}
          />
          {/* Эта метка будет нашей кнопкой */}
          <label htmlFor="csvUpload" className={styles.importButton}>
            📂 Загрузить CSV
          </label>
        </div>
      </div>
    </div>
  );
}
