const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const value1 = +document.getElementById('width').value;
  const value2 = +document.getElementById('height').value;
  let text = document.querySelector('.answer')
  text.textContent = '';  
  if (!(value1 >= 1 && value1 <= 10)) {
    text.textContent = 'Номер страницы вне диапазона от 1 до 10';
    return;
  }
  else if(!(value2 >= 1 && value2 <= 10)) {
    text.textContent = 'Лимит вне диапазона от 1 до 10';
    return;
  }
  else if (!(value1 >= 1 && value1 <= 10 && value2 >= 1 && value2 <= 10)) { 
    text.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    return;
  } else {
          fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
            .then((response) => {
              document.getElementById('result').src = response.url;
                });
  }
 });
     
        
