//es5 http request

const http = new easyHttp;
// GET

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }

// });

const data = {
  title: 'Custom post',
  body: 'this is a custom post'
};
//POST
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
//   });

//PUT

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if (err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }

});