import React from 'react';
import bibleBooks from './allBooks.json';
import uuid from 'react-uuid';

const listOfVersion = bibleBooks.versions.map((data) => (
  <option value={data.identifier} key={uuid()}>
    {data.name}
  </option>
));

export const Version = ({ data, versionSelected }) => {
  return (
    <>
      <select
        onChange={(e) => data({ version: e.target.value })}
        className="form-select firsts-selects mx-2"
        value={versionSelected}
      >
        {listOfVersion}
      </select>
    </>
  );
};
