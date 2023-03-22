//=======================================
import style from './sass/main.scss';
//импорт данных с бекэнда
import fetchCountries from './js/fetchCountries';
// урезает количество запросов 
import debounce from 'lodash.debounce';
// библиотека уведомлений
import {
  alert,
  defaultModules,
} from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});
// стили для библитеки уведомлений
import '@pnotify/core/dist/Material.css';

const input = document.querySelector('.input-js');
let list = document.querySelector('.list-js');

input.addEventListener('input', debounce(onSearch, 1000));

function onSearch() {
    list.innerHTML = '';
    const searchQuery = input.value;
    const fetchQuery = fetchCountries(searchQuery);

  fetchQuery
    .then(data => {
      if (data.length >= 10) {
        alert({
          text: 'Необходимо сделать запрос более специфичным',
          styling: 'material',
          type: 'notice',
          mode: 'dark',
          delay: 3000,
        });
        return;
      }

      fetchQuery.then(data => {
        if (data.length === 1) {
          data.map(e =>
            list.insertAdjacentHTML(
              'beforeend',
              `<img src="${e.flags.png}" alt="${e.flags.alt}" width="350px">
            <div>
                <li class="js-li"> Официальное название - ${e.name.common} </li>
                <li class="js-li"> Столица - ${e.capital} </li>
                <li class="js-li"> Флаг - ${e.flag} </li>
                <li class="js-li"> Население - ${e.population} </li> 
            </div>`,
            ),
          );
          alert({
            text: `Вот что мы нашли по вашему запросу`,
            styling: 'material',
            type: 'notice',
            mode: 'dark',
            delay: 1000,
          });
        } else {
          fetchQuery.then(data =>
            data.map(e =>
              list.insertAdjacentHTML(
                'beforeend',
                `<div>
              <li class="js-li">
              ${e.name.common} ${e.flag} 
              </li>
              </div>`,
              ),
            ),
          );

          alert({
            text: 'Выберете страну из списка',
            styling: 'material',
            type: 'info',
            delay: 1000,
          });
        }
      });
    })
    .catch(error =>
      alert({
        text: `Упс ,что то пошло не так 🥴 ${error}`,
        styling: 'material',
        type: 'error',
        mode: 'dark',
        delay: 500,
      
      }),
    );
};