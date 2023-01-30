const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const value1 = +document.getElementById('width').value;
  const value2 = +document.getElementById('height').value;
  let text = document.querySelector('.answer')
  text.textContent = ''
  if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
    text.textContent =  'одно из чисел вне диапазона от 100 до 300';
    return;
  }
  
  // Делаем запрос за данными
  fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {
      document.getElementById('result').src = response.url;
    });

});