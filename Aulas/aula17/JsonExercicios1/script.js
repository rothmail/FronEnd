
fetch('objects.json')  
  .then(response => response.json())  
  .then(data => { 
    const objectList = document.getElementById('object-list');  

    data.objects.forEach(obj => { 
      const listItem = document.createElement('li'); 
      listItem.textContent = obj;  
      objectList.appendChild(listItem);  
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));