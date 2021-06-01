console.log('create');

import MyFetch from './class/myFetch.class.js';

MyFetch.getPosts()
  .then((posts) => console.log('posts', posts))
  .catch((err) => console.error(err));

// get all form data into json object and send it to backend

const newPostData = {
  title: 'New post about birds',
  auhtor: 'James Cameron',
  body: 'this is essential to know',
};

const jsonData = JSON.stringify(newPostData);
MyFetch.createPost(jsonData, (data) => {
  if (data.redirect) {
    console.log('redirecting to');
    // window.location = data.redirect;
  }
});
