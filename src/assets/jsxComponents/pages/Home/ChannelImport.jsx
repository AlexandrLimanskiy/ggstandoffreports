import React from "react";
import Papa from "papaparse";

export default function ChannelImport({ onImport }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        onImport(results.data); // передаём массив объектов
      },
    });
  };

  return (
    <div className="channel_import">
      <div className="channel_import__content">
        <div className="channel_import__content__items">
          <label htmlFor="csvUpload">Импорт CVS-таблицы:</label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            id="csvUpload"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
