console.log('edit.js');

import MyFetch from './class/myFetch.class.js';

const editForm = document.getElementById('edit-form');

editForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const fd = new FormData(editForm);
  const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));
});
