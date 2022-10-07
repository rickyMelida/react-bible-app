import React, { useState, useEffect } from 'react';

export const Buttons = ({ data, verseData }) => {
  const [verse, setVerse] = useState(verseData.verseSelected);

  useEffect(() => {
    setVerse(verseData.verseSelected);
  }, [verseData.verseSelected]);

  const getButtonStyle = (typeButton) => {
    let result = 'btn btn-primary round ';
    if (typeButton === 'previus') {
      if (verse == 1) result += 'disabled';
    } else {
      if (verse == verseData.countVerse) result += 'disabled';
    }

    return result;
  };

  const next = () => {
    if (verse < verseData.countVerse) {
      setVerse(Number(verse) + 1);
      data(Number(verse) + 1);
    }
  };

  const previus = () => {
    if (verse <= verseData.countVerse) {
      setVerse(verse - 1);
      data(Number(verse) - 1);
    }
  };
  return (
    <>
      <div className="mt-5">
        <button
          type="button"
          className={getButtonStyle('previus') + ' previus-btn'}
          onClick={() => previus()}
        >
          &#8249;
        </button>

        <button
          type="button"
          className={getButtonStyle('next') + ' next-btn'}
          onClick={() => next()}
        >
          &#8250;
        </button>
      </div>
    </>
  );
};
