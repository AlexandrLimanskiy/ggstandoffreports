import { useEffect, useState } from "react";
import Channel from "./Channel";
import ChannelAdd from "./ChannelAdd";
import defaultChannels from '/src/assets/data/dataChannels.js';

import styles from '/src/assets/scssComponents/pages/Home/Channel.module.scss';
import ChannelImport from "./ChannelImport";

export default function Channels() {

  const [channels, setChannels] = useState(() => {
    const stored = localStorage.getItem("channels");
    return stored ? JSON.parse(stored) : [];
  });

  const handleImport = (importedChannels) => {
    setChannels([...channels, ...importedChannels]);
  };

  useEffect(() => {
    localStorage.setItem("channels", JSON.stringify(channels));
  }, [channels])

  function addChannel(newChannel) {
    setChannels([...channels, newChannel]);
  }

  const deleteChannel = (index) => {
    const updated = channels.filter((_, i) => i !== index);
    setChannels(updated);
  }

  return(
    <>
      <div className="channels">
        <div className="channels__content">
          <div className={styles.channels__content__buttons}>
            <ChannelAdd onAdd={addChannel} />
            <ChannelImport onImport={handleImport} />
          </div>
          <div className={styles.channels__content__items}>
            {channels.map((channel, index) => (
              <Channel key={index} title={channel.title} description={channel.description} link={channel.link} onDelete={() => deleteChannel(index)} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
