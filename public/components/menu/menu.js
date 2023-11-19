import { LitElement, html, css } from "lit";

class MenuGym extends LitElement {
  static styles = css``;
  createRenderRoot() {
    return this;
  }
  render() {
    const baseUrl = '/records_gym';

    return html`
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav  ">
                <li class="nav-item active">
                <a class="nav-link" href="${baseUrl}/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item ">
                <a class="nav-link" href="${baseUrl}/exercises-page">Exercises</a>
                </li>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="${baseUrl}/trainers"> trainers</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="contact.html"> Contact Us</a>
                </li>
            </ul>
            <div class="user_option">
                <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
            </div>
            </div>
        </div>
    
    `;
  }
}

customElements.define("menu-gym", MenuGym);
