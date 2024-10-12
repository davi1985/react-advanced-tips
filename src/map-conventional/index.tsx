type Book = {
  id: number;
  title: string;
  author: string;
  releaseDate: string;
};

export const Books = () => {
  const books: Book[] = [
    {
      id: 1,
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      releaseDate: "2018-12-04",
    },
    {
      id: 2,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      releaseDate: "2008-08-11",
    },
    {
      id: 3,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      releaseDate: "2008-05-08",
    },
    {
      id: 4,
      title: "Learning Python",
      author: "Mark Lutz",
      releaseDate: "2013-08-12",
    },
  ];

  return (
    <>
      <h1>Books with Traditional Map</h1>
      <ul>
        {books.map(({ id, author, releaseDate, title }) => (
          <li key={id}>
            {title} - <span>{author}</span> (<small>{releaseDate}</small>)
          </li>
        ))}
      </ul>
    </>
  );
};
