function getPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(d => {
    if(!data.ok) {
      throw Error(data.status)
    }
    return data.json();
  })
  .catch(e => {
    console.log(e)
  })
}

export { getPost };
