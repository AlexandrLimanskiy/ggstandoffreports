import { useEffect, useState } from "react";
import Channel from "./Channel";
import ChannelAdd from "./ChannelAdd";
import ChannelImport from "./ChannelImport";
import styles from '/src/assets/scssComponents/pages/Home/Channel.module.scss';

export default function Channels() {
  const [channels, setChannels] = useState(() => {
    const stored = localStorage.getItem("channels");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("channels", JSON.stringify(channels));
  }, [channels]);

  const addChannel = (newChannel) => {
    setChannels(prev => [...prev, newChannel]);
  };

  const deleteChannel = (index) => {
    setChannels(prev => prev.filter((_, i) => i !== index));
  };

  const updateChannel = (index, updatedChannel) => {
    setChannels(prev => prev.map((ch, i) => i === index ? updatedChannel : ch));
  };

  const handleImport = (importedChannels) => {
    setChannels(prev => [...prev, ...importedChannels]);
  };

  return (
    <div className="channels">
      <div className="channels__content">
        <div className={styles.channels__content__buttons}>
          <ChannelAdd onAdd={addChannel} />
          <ChannelImport onImport={handleImport} />
        </div>
        <div className={styles.channels__content__items}>
          {channels.map((channel, index) => (
            <Channel
              key={index}
              channel={channel}
              onDelete={() => deleteChannel(index)}
              onUpdate={(updatedChannel) => updateChannel(index, updatedChannel)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
