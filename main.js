let getInput = document.getElementById('input-text');
let getButton = document.getElementById('add-text');
let getOutput = document.getElementById('output-text');

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
          let li = document.createElement('li');
          li.textContent = text;

          let btnDelete = document.createElement('button');
          btnDelete.innerHTML = 'Delete';
          btnDelete.style.marginLeft = '10px';
          btnDelete.style.cursor = 'pointer';

          li.appendChild(btnDelete);
          getOutput.appendChild(li);

          btnDelete.addEventListener('click', function () {
               getOutput.removeChild(li);
          });

          li.addEventListener('click', function () {
               li.style.textDecoration = 'line-through';
               li.style.cursor = 'pointer';
               li.style.backgroundColor = "#333333e1";
          });

          li.addEventListener('dblclick', function () {
               li.style.textDecoration = 'none';
               li.style.cursor = 'pointer';
               li.style.backgroundColor = "#333";
          });

          getInput.value = '';
     }
});
