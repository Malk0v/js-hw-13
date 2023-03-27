//=======================================
import style from './sass/index.scss';
import Notiflix from 'notiflix';
import fetchResponce from './js/components/apiService.js';
import debounce from 'lodash.debounce';
import refsSvg from './js/components/svg';

//const likes = '<svg height="20" viewBox="100 96 960 760" width="20"><path d="M698.462 896H296.923V456l250.769-247.693L565.385 226q5.461 5.461 9.192 14 3.731 8.538 3.731 15.692V262l-40.923 194h278q25.077 0 44.846 19.769Q880 495.538 880 520.615v49.231q0 5.462-1.231 11.923-1.23 6.462-3.23 11.923L766.308 852.616q-8.231 18.461-27.692 30.923Q719.154 896 698.462 896Zm-361.539-40h361.539q8.461 0 17.307-4.615 8.846-4.616 13.462-15.385L840 576v-55.385q0-10.769-6.923-17.692T815.385 496H487.692L534 277.538 336.923 473.077V856Zm0-382.923V856 473.077Zm-40-17.077v40H160v360h136.923v40H120V456h176.923Z" /></svg>'
//const views = '<svg height="20" viewBox="100 96 960 760" width="20"><path d="M480.181 702.154q60.973 0 103.473-42.681t42.5-103.654q0-60.973-42.681-103.473t-103.654-42.5q-60.973 0-103.473 42.681t-42.5 103.654q0 60.973 42.681 103.473t103.654 42.5ZM480 664q-45 0-76.5-31.5T372 556q0-45 31.5-76.5T480 448q45 0 76.5 31.5T588 556q0 45-31.5 76.5T480 664Zm.11 152q-129.956 0-236.879-70.731Q136.307 674.539 83.077 556q53.23-118.539 160.044-189.269Q349.934 296 479.89 296q129.956 0 236.879 70.731Q823.693 437.461 876.923 556q-53.23 118.539-160.044 189.269Q610.066 816 480.11 816ZM480 556Zm0 220q113 0 207.5-59.5T832 556q-50-101-144.5-160.5T480 336q-113 0-207.5 59.5T128 556q50 101 144.5 160.5T480 776Z"/></svg>';
//const coments = '<svg height="20" viewBox="100 96 960 760" width="20"><path d="M260 636h440v-40H260v40Zm0-120h440v-40H260v40Zm0-120h440v-40H260v40Zm580 503.077L716.923 776H184.615Q157 776 138.5 757.5 120 739 120 711.385v-430.77Q120 253 138.5 234.5 157 216 184.615 216h590.77Q803 216 821.5 234.5 840 253 840 280.615v618.462ZM160 280.615V736h573.769L800 802.231V280.615q0-10.769-6.923-17.692T775.385 256h-590.77q-10.769 0-17.692 6.923T160 280.615Zm0 0v521.616V256 280.615Z"/></svg>'
//const down = '<svg height="20"viewBox="100 96 960 760"width="20"> <path d="M264.615 856Q237 856 218.5 837.5 200 819 200 791.385V696h40v95.385q0 9.23 7.692 16.923Q255.385 816 264.615 816h430.77q9.23 0 16.923-7.692Q720 800.615 720 791.385V696h40v95.385Q760 819 741.5 837.5 723 856 695.385 856h-430.77ZM480 705.231 338.461 563.692l28.308-28.769L460 628.154v-346h40v346l93.231-93.231 28.308 28.769L480 705.231Z" /></svg>';

const input = document.querySelector('.search-form');
let list = document.querySelector('.gallery');
console.log(list);

input.addEventListener('input', debounce(onSearch, 1000));

console.log(input);

function onSearch() {
  list.innerHTML = '';
  const searchQuery = input.query.value;
  console.log(searchQuery);
  const fetchQuery = fetchResponce(searchQuery);

  fetchQuery.then(data => {
    if (data.hits.length === 0) {
      console.log('ну наконец-то заработало)))');
      Notiflix.Notify.success(
        'К сожалению, нет изображений, соответствующих вашему поисковому запросу. Пожалуйста, введите что то другое',
      );
    }
  });

  fetchQuery.then(data =>
    data.hits.map(e =>
      list.insertAdjacentHTML(
        'beforeend',
        `<div class="photo-card">
          <div class="photo-wrapper"> <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" width="300px"/></div>
            <div class="info">
              <p class="info-item">${refsSvg.likes}${e.likes}</p>
              <p class="info-item">${refsSvg.views}${e.views}</p>
              <p class="info-item">${refsSvg.coments}${e.comments}</p>
              <p class="info-item">${refsSvg.down} ${e.downloads}</p>
            </div>
        </div>`,
      ),
    ),
  );
  // .catch(
  //   Notiflix.Notify.success(
  //     'Sorry, there are no images matching your search query. Please try again.',
  //   ),
  // );
}

// // Запрос к API Pixabay
// const apiKey = "YOUR_API_KEY";
// const query = "mountains";
// const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Вывод результатов в консоль
//     console.log(data.hits);
//   })
//   .catch(error => {
//     console.error(error);
//   });
