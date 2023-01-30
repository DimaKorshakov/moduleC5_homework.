function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};


const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
    
  result.innerHTML = cards;
}




 btn.addEventListener('click', () => {
   const value = document.querySelector('input').value;
  if(value === ''){
    document.querySelector('.result').textContent = 'Введите число'
  } else if (value > 0 && value < 11){
    useRequest('https://picsum.photos/v2/list/?limit='+value, displayResult);
    document.querySelector('.result').textContent = ''
  } else {
    document.querySelector('.result').textContent = 'Число вне диапазона от 1 до 10'
  }
}) 
