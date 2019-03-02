document.querySelector('#button1').addEventListener('click', loadFile);
document.querySelector('#button2').addEventListener('click', loadFile2);



function loadFile() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'button1.json', true);

  xhr.onload = function () {
    if (this.status === 200) {

      // console.log(this.responseText);
      const output1 = JSON.parse(this.responseText);
      const output = `
      <ul>
      <li>${output1.name}</li>
      <li>${output1.age}</li>
      <li>${output1.title}</li>
    </ul>
      
      `;
      document.querySelector('#output1').innerHTML = output;
    }
  }
  xhr.send();
}



function loadFile2() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'button2.json', true);

  xhr.onload = function () {
    if (this.status === 200) {

      const output2 = JSON.parse(this.responseText);

      let output = '';

      output2.forEach(function (person) {
        output += `
        <ul>
        <li>${person.name}</li>
        <li>${person.age}</li>
        <li>${person.title}</li>
      </ul>
        
        `;
      })

      document.querySelector('#output2').innerHTML = output;
    }
  }
  xhr.send();
}
