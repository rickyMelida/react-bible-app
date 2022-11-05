import React from 'react';

const getOptions = n => {
	const arr = [];
	for (let i = 1; i <= n; i++) arr.push(<option key={i}>{i}</option>);
	return arr;
};

export const Chapter = ({ data, countOfChapter, chapterSelected }) => {
	return (
		<>
			<select
				onChange={e => data(e.target.value)}
				className='form-select firsts-selects d-inline me-2 ms-2 mt-3'
				value={chapterSelected}
			>
				{getOptions(countOfChapter)}
			</select>
		</>
	);
};
