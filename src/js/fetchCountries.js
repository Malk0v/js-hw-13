// // - Есть файл `fetchCountries.js` с дефолтным экспортом функции
// //   `fetchCountries(searchQuery)`, возвращающей промис с массивом стран, результат
// //   запроса к API.\

// //+++

// // Создай небольшое приложение поиска данных о стране по ее частичному или полному
// // имени. Используй [Rest Countries API](https://restcountries.com/), а именно
// // вторую версию (v2) и ендпоинт
// // [/name](https://restcountries.com/#api-endpoints-v3-name), возвращающий массив
// // объектов стран попавших под критерий поиска.


export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
    .then(response => response.json())
}

