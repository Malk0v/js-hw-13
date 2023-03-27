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


export default function fetchCountries(searchQuery) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '34664945-19b6b98906af15267810ff287';
  let PAGE = '1';

  return fetch(
    `${BASE_URL}?key=${KEY}&q=${searchQuery}}&image_type=photo&per_page=12&page=${PAGE}`,
  ).then(response => response.json());
};