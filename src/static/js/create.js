console.log('create');

import MyFetch from './class/myFetch.class.js';

MyFetch.getPosts()
  .then((posts) => console.log('posts', posts))
  .catch((err) => console.error(err.message));
