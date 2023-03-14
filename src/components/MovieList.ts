import { movieApi } from "../domain/movieApi";

export default class MovieList extends HTMLElement {
  movies: any[];

  constructor() {
    super();
    this.movies = [];
  }

  async connectedCallback() {
    this.movies = await movieApi.fetchMovieInfo();
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="item-view">
      <h2>지금 인기 있는 영화</h2>
      <ul class="item-list">
        <movie-item></movie-item>
        <movie-item></movie-item>
        <movie-item></movie-item>
        <movie-item></movie-item>
        <movie-item></movie-item>
      </ul>
      <button class="btn primary full-width">더 보기</button>
    </section>
    `;
  }
}
