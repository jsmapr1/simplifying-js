/* eslint-disable no-console */
function getPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(data => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
    })
    .catch(e => {
      console.log(e);
    });
}

export { getPost };
