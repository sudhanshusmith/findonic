import React, { useEffect, useState } from 'react';
import './MusicBarLoader.css';

const MusicBarLoader = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const generateBars = () => {
      const newBars = [];
      for (let i = 0; i < 8; i++) {
        newBars.push(
          <div key={i} className={`music-bar music-bar-${i}`} />
        );
      }
      setBars(newBars);
    };

    generateBars();
  }, []);

  return (
    <div className="music-bar-loader">
      {bars}
    </div>
  );
};

export default MusicBarLoader;
