console.log('edit.js');

import MyFetch from './class/myFetch.class.js';

const editForm = document.getElementById('edit-form');
const currentId = editForm.dataset.postId;

editForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const fd = new FormData(editForm);
  const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));

  MyFetch.updatePost(fdJsonFormat, currentId, (res) => {
    console.log(res);
    if (res.redirect) window.location = res.redirect;
  });
});
