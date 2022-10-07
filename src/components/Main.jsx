import React, { useState, useEffect } from 'react';
import { Version } from './Version';
import { Book } from './Book';
import { Chapter } from './Chapter';
import { Verse } from './Verse';
import { Buttons } from './Buttons';

const createUrl = async (data) => {
  const { version, book, chapter, verse } = data;
  const response = await fetch(
    `https://bible-api.com/${book}+${chapter}:${verse}?translation=${version}`
  );
  return await response.json();
};

const getCountOfVerse = async (bookData) => {
  const { version, book, chapter } = bookData;
  const response = await fetch(
    `https://bible-api.com/${book}+${chapter}?translation=${version}`
  );
  return await response.json();
};

export const Main = () => {
  const [bibleData, setBibleData] = useState({
    version: 'bbe',
    book: 'Genesis',
    chapter: '1',
    verse: '1',
  });
  const [countChapter, setCountChapter] = useState('1');
  const [countVerse, setCountVerse] = useState('1');
  const [view, setView] = useState();

  const versionSelected = (v) =>
    setBibleData((data) => ({ ...data, version: v.version }));

  const bookSelected = (b) => {
    setBibleData((info) => ({ ...info, book: b.book }));
    setCountChapter(b.chapter);
  };
  const chapterSelected = (c) => {
    setBibleData((data) => ({ ...data, chapter: c }));
  };

  const verseSelected = (ve) => {
    setBibleData((data) => ({ ...data, verse: ve }));
  };

  useEffect(() => {
    getCountOfVerse(bibleData).then((res) => {
      setCountVerse(res.verses.length);
    });
  }, [bibleData.chapter]);

  useEffect(() => {
    createUrl(bibleData).then((res) => {
      if (res.error) setView('Version no disponible!');
      else setView(res.text);
    });
  }, [bibleData.verse]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="ms-5 ps-4 mb-4 mt-4">
              <u>Simple Bible App</u>
            </h2>
          </div>
          <div className="row select-title">
            <div className="col-4 ms-4">
              <label className="form-label text-light">Version:</label>
            </div>

            <div className="col-4 ms-5">
              <label className="form-label text-light">Book:</label>
            </div>
          </div>
          <div className="col-md-12 ms-3">
            <Version
              data={(v) => versionSelected(v)}
              versionSelected={bibleData.version}
            />
            <Book data={(b) => bookSelected(b)} bookSelected={bibleData.book} />
          </div>

          <div className="row select-title mt-3">
            <div className="col-4 ms-4">
              <label className="form-label text-light">Chapter:</label>
            </div>

            <div className="col-4 ms-5">
              <label className="form-label text-light">Verse:</label>
            </div>
          </div>
          <div className="col-md-12 ms-3">
            <Chapter
              data={(e) => chapterSelected(e)}
              countOfChapter={countChapter}
              chapterSelected={bibleData.chapter}
            />

            <Verse
              data={(e) => verseSelected(e)}
              countVerse={countVerse}
              verseSelected={bibleData.verse}
            />
          </div>

          <div className="col align-self-center">
            <p className="mx-2 mt-5 verse text-light">{view}</p>

            <cite className="ms-2 text-light">
              {bibleData.book} {bibleData.chapter}: {bibleData.verse} (
              {bibleData.version})
            </cite>
          </div>

          <Buttons
            data={(e) => verseSelected(e)}
            verseData={{
              countVerse: countVerse,
              verseSelected: bibleData.verse,
            }}
          />
        </div>
      </div>
    </>
  );
};
