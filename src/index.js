//==================== Libs ===================//
// import axios from 'axios';
// import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';  

// import SimpleLightbox from 'simplelightbox';
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
// import refsSvg from './js/components/svg';















































//   

import tpl from './templates/card.hbs'

import ImgApi from './js/components/apiClass.js';
const ImgApp = new ImgApi();

const refs = {
  input: document.querySelector('.search-form'),
  loadMore: document.querySelector('[data-action="load-more"]'),
  list: document.querySelector('.js-articles-container'),
};

refs.input.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);


function onSearch(e) {
  e.preventDefault();

  ImgApp.query = e.currentTarget.elements.query.value;
  ImgApp.resetPage();

  
  ImgApp.fetchImg().then(hits => {
    clear();
    appendHitsMarkup(hits);
  });
}


function onLoadMore() {
  ImgApp.fetchImg().then(appendHitsMarkup);

  console.log('loadMore')
}

function appendHitsMarkup(hits) {
refs.list.insertAdjacentHTML('beforeend', tpl(hits))
}

function clear() {
 refs.list.innerHTML = '';
}



























































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



  // gallery.on('show.simplelightbox', function () {
  //   console.log('open');
  // });

  // gallery.on('error.simplelightbox', function (e) {
  //   console.log(e); // some usefull information
  // });
