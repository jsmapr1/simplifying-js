/* eslint-disable no-param-reassign */
function setLatestPost(element, id, retrievePost) {
  return retrievePost(id)
    .then(post => {
      element.innerHTML = post.title;
    });
}

export { setLatestPost };
