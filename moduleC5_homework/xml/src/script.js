/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </li>
`;
/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

let list = {};// ' оберуть в скобки в дальнейшем'
let result = [];

studentNode.forEach(function(item, index){ // перебор элементов с помощью forEach
  let nameNode = item.querySelector("name");
  let firstNode = item.querySelector("first");
  let secondNode = item.querySelector("second")
  result[index] = {
    name: firstNode.textContent +" "+ secondNode.textContent,
    age: item.querySelector('age').textContent,
    prof: item.querySelector('prof').textContent,
    lang: nameNode.getAttribute('lang'),
  };
})

// Получение данных из атрибутов

list.list = result
console.log('result', list)




                                       