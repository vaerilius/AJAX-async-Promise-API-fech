document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getApi);


function getText() {

//   fetch('test.txt').then(function(response) {
//     return response.text();
//   })
//   .then(function (data) {
//     console.log(data);
//     document.querySelector('#output').innerHTML = data;
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
// }

//same as above but =>

fetch('test.txt')
.then(response => response.text())
.then(data => {
  console.log(data);
  document.querySelector('#output').innerHTML = data; 
})
.catch(err => console.log(err));
}
function getJson() {
  // fetch('post.json')
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   console.log(data);
  //   let ouput = '';
  //   data.forEach(function(post) {
  //     ouput += `<li>${post.title}</li>`;
  //   });
  //   document.querySelector('#output').innerHTML = ouput;
  // })
  // .catch(function (err) {
  //   console.log(err);
  // });
fetch('post.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  let ouput = '';
  data.forEach(post => {
    ouput += `<li>${post.title}</li>`;
  });
  document.querySelector('#output').innerHTML = ouput;
})
.catch(err => console.log(err));

}
function getApi() {
  // fetch('https://api.github.com/users').then(function(response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   console.log(data);
  //   let ouput = '';
  //   data.forEach(function(user) {
  //     //user.login or user.id or...
  //     ouput += `<li>${user.login}</li>`;
  //   });
  //   document.querySelector('#output').innerHTML = ouput;
  // })
  // .catch(function (err) {
  //   console.log(err);
  // });

  fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let ouput = '';
    data.forEach(user => {
      //user.login or user.id or...
      ouput += `<li>${user.login}</li>`;
    });
    document.querySelector('#output').innerHTML = ouput;
  })
  .catch(function (err) {
    console.log(err);

  });
}