export default class MyFetch {
  static baseUrl = '/api/blog';

  constructor() {}

  //   static getPosts() {
  //     fetch(MyFetch.baseUrl)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.err(err.message));
  //   }

  static async getPosts() {
    const res = await fetch(MyFetch.baseUrl);
    const data = await res.json();
    // console.log(data);
    return data;
  }
}
