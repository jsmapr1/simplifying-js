/* eslint-disable no-console, no-unused-vars, no-param-reassign */
const fetch = require('node-fetch');


const example =
// START:result
{
  userId: 1,
  id: 1,
  title: 'First Post',
  body: 'This is my first post...',
};
// END:result

// START:simple
fetch('https://jsonplaceholder.typicode.com/posts/1');
// END:simple

// START:resolve
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => {
    return data.json();
  })
  .then(post => {
    console.log(post.title);
  });
// END:resolve

// START:catch
fetch('https://jsonplaceholder.typicode.com/pots/1')
  .then(data => {
    if (!data.ok) {
      throw Error(data.status);
    }
    return data.json();
  })
  .then(post => {
    console.log(post.title);
  })
  .catch(e => {
    console.log(e);
  });
// END:catch

// START: post
const update = {
  title: 'Clarence White Techniques',
  body: 'Amazing',
  userId: 1,
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(update),
};

fetch('https://jsonplaceholder.typicode.com/posts', options).then(data => {
  if (!data.ok) {
    throw Error(data.status);
  }
  return data.json();
}).then(update => {
  console.log(update);
  // {
  //   title: 'Clarence White Techniques',
  //   body: 'Amazing',
  //   userId: 1,
  //   id: 101
  // };
}).catch(e => {
  console.log(e);
});
// END: post

function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(d => {
      return d.json();
    });
}

function setLatestPost(element, retrievePosts) {
  return retrievePosts()
    .then(posts => {
      console.log(posts);
      element.innerHTML = posts[0].title;
    });
}

export { setLatestPost };
