export const bankFetch = () => fetch("http://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())