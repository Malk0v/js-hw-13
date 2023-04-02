import Notiflix from 'notiflix';
import tpl from './templates/card.hbs';
import ImgApi from './js/components/apiClass.js';
import BtnApi from './js/components/btnSpinnerApi';

const ImgApp = new ImgApi();

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