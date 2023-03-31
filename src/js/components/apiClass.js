const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34664945-19b6b98906af15267810ff287';

export default class ImgApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImg() {
    const url = `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&per_page=4&page=${this.page}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// const TYPE = 'photo';
// const orientation = 'horizontal';
// const perPage = '12';
//        fetch(`${BASE_URL}?key=${KEY}&q=${this.searchQuery}&image_type=${TYPE}&orientation=${orientation}&per_page=${perPage}&page=${PAGE}`
