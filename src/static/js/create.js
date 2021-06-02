console.log('create');

import MyFetch from './class/myFetch.class.js';

MyFetch.getPosts()
  .then((posts) => console.log('posts', posts))
  .catch((err) => console.error(err));

// get all form data into json object and send it to backend

const mainForm = document.getElementById('create-post-form');

mainForm.addEventListener('submit', function (event) {
  // sustabdom forma nuo issiuntimo
  event.preventDefault();
  console.log('stop right there');

  // supakuojam formos duomenis
  const fd = new FormData(mainForm);
  // form data to json conversion
  const formDataJson = JSON.stringify(Object.fromEntries(fd));
  console.log('whatIsInFormData', formDataJson);
  console.log('fd', fd);

  MyFetch.createPost(formDataJson, (ats) => {
    console.log(ats);
    if (ats.redirect) {
      // console.log('redirecting to', ats.redirect);
      window.location = ats.redirect;
    }
  });
});
