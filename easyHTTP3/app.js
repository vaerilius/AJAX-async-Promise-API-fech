
document.querySelector('#button3').addEventListener('click', getApi);

function getApi() {
  //GET
//  http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

const data = {
  name: 'john Doe',
  username: 'johndoe',
  email: 'jdoe@live.com'
}
//POST
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//PUT
// http.put('https://jsonplaceholder.typicode.com/users/1', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//DELETE
http.delete('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err));
}
const http = new EasyHTTP;

