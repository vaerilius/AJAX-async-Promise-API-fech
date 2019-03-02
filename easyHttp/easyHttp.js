// es5 http request
function easyHttp() {
  this.http = new XMLHttpRequest();
}
//GET
easyHttp.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  
  //es5 have to capture this because you cannot use this inside function
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

//POST

easyHttp.prototype.post = function(url, data, callback){
this.http.open('POST', url, true);

this.http.setRequestHeader('Content-type', 'application/json');

let self = this;
  this.http.onload = function() {

      callback(null, self.http.responseText);
  }
// Converts a JavaScript value to a JavaScript Object Notation (JSON) 
this.http.send(JSON.stringify(data));
}

//PUT
easyHttp.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);
  
  this.http.setRequestHeader('Content-type', 'application/json');
  
  let self = this;
    this.http.onload = function() {
  
        callback(null, self.http.responseText);
    }
  // Converts a JavaScript value to a JavaScript Object Notation (JSON) 
  this.http.send(JSON.stringify(data));
  
  }

  //Delete
  easyHttp.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    
    //es5 have to capture this because you cannot use this inside function
    let self = this;
    this.http.onload = function() {
      if (self.http.status === 200) {
        callback(null, 'Post deleted');
      } else {
        callback('Error: ' + self.http.status);
      }
    }
  
    this.http.send();
  }