// Pixabay API поддерживает пагинацию, пусть в ответе приходит по 12 объектов,
// установлено в параметре `per_page`. По умолчанию параметр `page` равен `1`. При
// каждом последующем запросе `page` увеличивается на 1, а при поиске по новому
// ключевому слову необходимо сбрасывать его значение в `1`.

// Тебе интересны следующие свойства:

// - `webformatURL` - ссылка на маленькое изображение для списка карточек
// - `largeImageURL` - ссылка на большое изображение (смотри пункт 'дополнительно')
// - `likes` - количество лайков
// - `views` - количество просмотров
// - `comments` - количество комментариев
// - `downloads` - количество загрузок

// import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

// //+++++++++++++++++++++++++++++++++++// 

//   const BASE_URL = 'https://pixabay.com/api/';
//   const KEY = '34664945-19b6b98906af15267810ff287';
//   const TYPE = 'photo';
//   const orientation = 'horizontal';
//   const perPage = '12';
//  let PAGE = '1';

//+++++++++++++++++++++++++++++++++++// 

////////////////==== GET ====////////////////////

//============= axios ==========//
// export default fetchCountries = async (searchQuery) => {
//   const {data} = await axios.get(
//     `?key=${KEY}&q=${searchQuery}&image_type=${TYPE}&orientation=${orientation}&per_page=${perPage}&page=${PAGE}`)
//   return data;
// };
//+++++++++++++++++++++++++++++++++++// 

//============= async await ==========//
// export default fetchCountries = async (searchQuery) => {
//   const response = await fetch(
//     `${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=${TYPE}&orientation=${orientation}&per_page=${perPage}&page=${PAGE}`)
//   const countries = response.json();
//   return countries
// };
//+++++++++++++++++++++++++++++++++++//

//====== fetch / then / catch / finally =====//
// export default function fetchCountries(searchQuery) {
//   return fetch(
//     `${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=${TYPE}&orientation=${orientation}&per_page=${perPage}&page=${PAGE}`
//   ).then(response => response.json());
// };
//+++++++++++++++++++++++++++++++++++//


//======== И тогда можно удалить options в axios ========/

// const token = "eyJhbGciOtJIUZI1NtIsYXQi0jE10DcOODUZNT"

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`


////////////////==== POST ====////////////////////

//========== vanila JS=========//

// const createContactJS = async (name, number) => {
//   const options = {
//     method: "POST",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify({ name, number }),
//   };
//     const response = await fetch(`${baseUrl}/contacts`, options);
//     const data = response.json()
// return data;
// };
//=========== axios ==========//

// const createContactAxios = async (name, number) => {
//   const options = {
//     headers,
//     }

//   const { data } = await axios.post(
//     `/contacts`,
//     { name, number }, options
//   );
//   return data
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++

 //////////////==== DELETE ====////////////////////

//========== vanila JS =========//

// const deleteContactJS = async (name, number) => {
//   const options = {
//     method: "DELETE",
//     headers: {
//       headers,
//     },
//   };
//   return fetch(`${baseUrl}/contacts`, options).then((res) => res.json());
// };
//========== axios ==========//

// const deleteContactAxios = async (id) => {
//   const options = {
//     headers,
//   }

//  await axios.delete(
//    `/contacts/${id}`,
//    options
//   )
// }


////////////////==== PATCH ====////////////////////

//========== vanila JS=========//
// const updateContactJS = async (id, fields) => {
//   const options = {
//     method: "PATCH ",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify({ fields }),
//   };
//   return fetch(`${baseUrl}/contacts/${id}`, options).then((res) => res.json());
// };

//=========== axios ==========//
// const updateContactAxios = async (id, fields) => {
//   const options = {
//     headers,
//   }

//   const { data } = await axios.patch(
//     `/contacts/${id}`, fields, options);
//   return data
// };
//+++++++++++++++++++++++++++++++++++++++++++++++++