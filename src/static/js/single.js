console.log('single');

import MyFetch from './class/myFetch.class.js';

// pasiimti mygtuka delete

const deleteBtn = document.getElementById('delete');

// pasiimti id
const currentPostId = deleteBtn.dataset.postId;

// fetch to delete

deleteBtn.addEventListener('click', () => {
  MyFetch.deletePost(currentPostId, (res) => {
    console.log(res);
    if (res.redirect) {
      // console.log('redirecting to', res.redirect);
      window.location = res.redirect;
    }
  });
});
