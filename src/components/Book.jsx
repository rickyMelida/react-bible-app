import React from 'react';
import uuid from 'react-uuid';
import bibleBooks from './allBooks.json';

export const Book = ({ data, bookSelected }) => {
	const listOf_Book = bibleBooks.books.map(book => (
		<option key={uuid()} chapter={book.chapters}>
			{book.name}
		</option>
	));

	const setBook = e => {
		data({
			book: e.target.value,
			chapter: document
				.querySelector('#book')
				.selectedOptions[0].getAttribute('chapter'),
		});
	};

	return (
		<>
			<select
				onChange={e => setBook(e)}
				className='form-select firsts-selects d-inline me-2 mt-3 '
				id='book'
				value={bookSelected}
			>
				{listOf_Book}
			</select>
		</>
	);
};
