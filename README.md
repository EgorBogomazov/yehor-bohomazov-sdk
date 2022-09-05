# custom-sdk-js

## Install

```sh
$ npm install custom-sdk-js
```

or

```sh
$ yarn add custom-sdk-js
```

## Usage:

### Get all books

```sh
import { getBookChapters, getBookItem, getBooks } from "custom-sdk-js";

const request = async () => {
  const books = await getBooks();
  const booksList = books.docs;
  return booksList;
}
```

### Get one book 
```sh
const request = async (id) => {
  const book = await getBookItem(id);
  const booksList = books.docs;
  return booksList[0];
}
```

### Get book chapters
```sh
const request = async (id) => {
  const bookChapters = await getBookChapters(id);
  const bookChaptersList = books.docs;
  return bookChaptersList;
}
```


# Tested with create-react-app
