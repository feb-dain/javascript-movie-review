export default class TopButton extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.insertAdjacentHTML(
      "beforeend",
      `
        <button id="top-button">
          <i id="top-button-icon" class="bi bi-arrow-up-circle-fill"></i>
        </button>
      `
    );
  }
}
