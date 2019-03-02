/** 
 * EasyHTTP Library
 * Library for making HTTP request
 * 
 * @version 2.0.0
 * @author Timo Tamminen
 * @license 123

**/

class EasyHTTP {

  get(url) {
    return new Promise ((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data =>resolve(data))
      .catch(err => reject(err));
    });
  }

  post(url,data) {
    return new Promise ((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data =>resolve(data))
      .catch(err => reject(err));
    });
  }

  put(url,data) {
    return new Promise ((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data =>resolve(data))
      .catch(err => reject(err));
    });
  }
  delete(url) {
    return new Promise ((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(()=>resolve('DELETED'))
      .catch(err => reject(err));
    });
  }
}