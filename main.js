let getInput = document.getElementById('input-text');
let getButton = document.getElementById('add-text');
let getOutput = document.getElementById('output-text');

window.addEventListener('load', function () {
     let storedItems = JSON.parse(localStorage.getItem('items')) || [];
     storedItems.forEach(function (item) {
          addItemToList(item.text, item.completed);
     });
});

getInput.addEventListener('input', function () {
     getButton.disabled = false;
     getButton.style.cursor = "pointer";
     getButton.innerHTML = '<i class="fa fa-plus"></i> Add';
     getInput.placeholder = 'Please enter a text first';

     if (getInput.value.length > 70) {
          getInput.style.width = '90%';
     } else {
          getInput.style.width = '60%';
     }
});

getButton.addEventListener('click', function () {
     if (getInput.value === '' || getInput.value === null) {
          getInput.placeholder = 'Please enter a text first';
          getButton.innerHTML = 'Enter Text';
          getButton.disabled = true;
          getButton.style.cursor = "not-allowed";
     } else {
          let text = getInput.value;

          addItemToList(text, false);

          let storedItems = JSON.parse(localStorage.getItem('items')) || [];
          storedItems.push({ text: text, completed: false });
          localStorage.setItem('items', JSON.stringify(storedItems));

          getInput.value = '';
     }
});

function addItemToList(text, completed) {
     let li = document.createElement('li');
     li.textContent = text;

     if (completed) {
          li.style.textDecoration = 'line-through';
          li.style.backgroundColor = "#333333e1";
     }

     let btnDelete = document.createElement('button');
     btnDelete.innerHTML = 'Delete';
     btnDelete.style.marginLeft = '10px';
     btnDelete.style.cursor = 'pointer';

     li.appendChild(btnDelete);
     getOutput.appendChild(li);

     btnDelete.addEventListener('click', function () {
          getOutput.removeChild(li);

          let storedItems = JSON.parse(localStorage.getItem('items')) || [];
          let updatedItems = storedItems.filter(item => item.text !== text);
          localStorage.setItem('items', JSON.stringify(updatedItems));
     });

     li.addEventListener('click', function () {
          let storedItems = JSON.parse(localStorage.getItem('items')) || [];
          let itemIndex = storedItems.findIndex(item => item.text === text);

          if (li.style.textDecoration === 'line-through') {
               li.style.textDecoration = 'none';
               li.style.backgroundColor = "#333";
               storedItems[itemIndex].completed = false;
          } else {
               li.style.textDecoration = 'line-through';
               li.style.backgroundColor = "#333333e1";
               storedItems[itemIndex].completed = true;
          }

          localStorage.setItem('items', JSON.stringify(storedItems));
     });
}
