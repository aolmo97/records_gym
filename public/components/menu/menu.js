import { LitElement, html, css } from "lit";

class MenuGym extends LitElement {
  static styles = css`
  .dropdown:hover .dropdown-menu {
    display: block;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-menu a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-menu a:hover {
    background-color: #f1f1f1;
  }
  
  `;
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
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Exercises
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="${baseUrl}/exercises-page/add">Add</a>
                    <a class="dropdown-item" href="${baseUrl}/exercises-page/modify">Modify</a>
                    <a class="dropdown-item" href="${baseUrl}/exercises-page/delete">Delete</a>
                  </div>
                </li>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Training
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="${baseUrl}/training-page/add">Add</a>
                  <a class="dropdown-item" href="${baseUrl}/training-page/modify">Modify</a>
                  <a class="dropdown-item" href="${baseUrl}/training-page/delete">Delete</a>
                </div>
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
