//==================== Libs ===================//
// import axios from 'axios';
// import debounce from 'lodash.debounce';
// import InfiniteScroll from 'infinite-scroll';
//==================== Libs ===================//

// input.addEventListener('input', debounce(onSearch, 1000));

//====== InfiniteScroll ======//
// let elem = document.querySelector('.container');
// let infScroll = new InfiniteScroll(elem, {
//   // options
//   path: '',
//   append: '.post',
//   history: false,
// });

// fetchResponce()=infScroll.loadNextPage().then(function (loaded) {
//   // next page has been loaded
//   let { response, body, items } = loaded;
//   console.log(response.path);
//   console.log(body);
//   console.log(items);
// });
//let gallery = new SimpleLightbox('.gallery a');
//====== InfiniteScroll ======//

// import fetchResponce from './js/components/apiService.js';

import Notiflix from 'notiflix';
// import simpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import tpl from './templates/card.hbs';
import ImgApi from './js/components/apiClass.js';
import BtnApi from './js/components/btnSpinnerApi';

const ImgApp = new ImgApi();

// const gallery = new SimpleLightbox();

const BtnApp = new BtnApi({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const refs = {
  input: document.querySelector('.search-form'),
  loadMore: document.querySelector('[data-action="load-more"]'),
  list: document.querySelector('.js-articles-container'),
};

refs.input.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();
  ImgApp.query = e.currentTarget.elements.query.value;
  if (ImgApp.query === '') {
    Notiflix.Notify.success(`Введите что то нормальное`);
  }
  BtnApp.show();
  ImgApp.resetPage();
  clear();
  fetchArticles();
}

function fetchArticles() {
  BtnApp.disable();

  ImgApp.fetchImg().then(data => {
    appendHitsMarkup(data.hits);
    BtnApp.enable();
    // gallery.refresh();

    if (ImgApp.page == 2) {
      Notiflix.Notify.success(`Всего найдено "${ImgApp.query}" - ${data.total}`);
    }

    if (data.hits.length === 0) {
      BtnApp.hide();
      Notiflix.Notify.success(
        'К сожалению, нет изображений, соответствующих вашему поисковому запросу. Пожалуйста, введите что то другое',
      );
    }

    if (ImgApp.page >= data.totalHits / 4) {
      Notiflix.Notify.success(`Больше нет картинок`);
      return
    }
  });
}

function appendHitsMarkup(hits) {
  refs.list.insertAdjacentHTML('beforeend', tpl(hits));
}

function clear() {
  refs.list.innerHTML = '';
}

// gallery.on('show.simplelightbox', function () {
//   console.log('open');
// });

// gallery.on('error.simplelightbox', function (e) {
//   console.log(e); // some usefull information
// });
// fetchQuery.then(data => {
//   if (data.hits.length === 0) {
//     Notiflix.Notify.success(
//       'К сожалению, нет изображений, соответствующих вашему поисковому запросу. Пожалуйста, введите что то другое',
//     );
//   }
// });

// fetchQuery.then(data =>
//   data.hits.map(
//     e =>
//       list.insertAdjacentHTML(
//         'beforeend',
//         ` <div class="photo-card">
//             <div class="photo-wrapper">

//               <a href="${e.webformatURL}">
//               <img src="${e.largeImageURL}" alt="${e.id}" title="id ${e.id}"/>
//               </a>

//           </div>
//         </div>
//           `,
//       ),
//     Notiflix.Notify.success(
//       `всего найдено с запросом ${searchQuery} ${data.totalHits} картинок`,
//     ),
//   ),
// );

// `<div class="photo-card">
//       <div class="photo-wrapper">
//         <div class="gallery">
//       <a href="${e.webformatURL}">
//       <img src="${e.largeImageURL}" alt="${e.tags}" title="Beautiful Image" loading="lazy"/></a>
//       </div>
//       </div>
//           <div class="info">
//             <p class="info-item">${refsSvg.likes}${e.likes}</p>
//             <p class="info-item">${refsSvg.views}${e.views}</p>
//             <p class="info-item">${refsSvg.coments}${e.comments}</p>
//             <p class="info-item">${refsSvg.down} ${e.downloads}</p>
//           </div>
//       </div>`,


