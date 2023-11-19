import { LitElement, html, css } from 'lit';
import '../menu/menu'
class Header extends LitElement {
    createRenderRoot() {
        return this;
      }
    static styles = css`

  `;
 
  render(){
    return html `
    <header class="header_section">
        <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
            <span>
                Neogym
            </span>
            </a>
            <menu-gym></menu-gym>
        </nav>
        </div>
  </header>
    `
  }
}

customElements.define('header-gym', Header);
