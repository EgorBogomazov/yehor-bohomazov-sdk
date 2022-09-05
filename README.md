# yehor-bohomazov-sdk

## Install

```sh
$ npm install yehor-bohomazov-sdk
```

or

```sh
$ yarn add yehor-bohomazov-sdk
```

## Usage:

### Get all books

```js
import { getBookChapters, getBookItem, getBooks } from "yehor-bohomazov-sdk";

const request = async () => {
  const books = await getBooks();
  const booksList = books.docs;
  return booksList;
}
```

### Get one book

```js
const request = async (id) => {
  const book = await getBookItem(id);
  const booksList = books.docs;
  return booksList[0];
}
```

### Get book chapters

```js
const request = async (id) => {
  const bookChapters = await getBookChapters(id);
  const bookChaptersList = books.docs;
  return bookChaptersList;
}
```

### Pagination params

```js 
const chapters = await getBookChapters(id, { sort: 'chapterName:desc', page: 2, offset: 10, limit: 100 });
```

# Tested with create-react-app application
