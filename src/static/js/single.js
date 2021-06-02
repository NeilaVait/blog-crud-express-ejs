console.log('single');

import MyFetch from './class/myFetch.class.js';

// pasiimti mygtuka delete

const deleteBtn = document.getElementById('delete');

// pasiimti id
const deleteId = deleteBtn.dataset.postId;
console.log(deleteId);

// fetch to delete

deleteBtn.addEventListener('click', (event) => {
  console.log('click');
  event.preventDefault();

  MyFetch.deletePost(deleteId, (ats) => {
    if (ats.redirect) {
      // console.log('redirecting to', ats.redirect);
      window.location = ats.redirect;
    }
  });
});
