import { LitElement, html, css } from 'lit';
import '../../components/header/header';
import '../../components/exercise-element/add/add';
import '../../components/exercise-element/modify/modify';
import '../../components/exercise-element/delete/delete';

class ExercisePage extends LitElement {
  static get properties() {
    return {
      currentState: { type: String }
    };
  }

  constructor() {
    super();
    this.currentState = 'add'; // valor predeterminado
  }

    static styles = css`
  `;
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateStateBasedOnUrl();
  }
  
  updateStateBasedOnUrl() {
    const path = window.location.pathname.split('/');
    this.currentState = path[3]; 
  }
  getRender(){
    let content;
    console.log(this.currentState);
    switch (this.currentState) {
      case 'add':
        content = html`<exercise-add></exercise-add>`; // Asume que tienes un componente para agregar
        break;
      case 'modify':
        content = html`<exercise-modify></exercise-modify>`; // Componente para modificar
        break;
      case 'delete':
        content = html`<exercise-delete></exercise-delete>`; // Componente para eliminar
        break;
      default:
        content = html`<p>Invalid action</p>`;
    }
    return content;
  }
  render() {
    return html`
    <header-gym></header-gym>
    <section class="contact_section">
      <div class="container-fluid">   
        <div class="row">
          <div class="col-lg-5 col-md-6">
              <div class="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
              <div class="heading_container">
               <h2>${this.currentState.charAt(0).toUpperCase() + this.currentState.slice(1)} Exercise</h2>
              </div>
             ${this.getRender()}
              </div>
            </div> 
        </div>
      </div>
    </section>
    `;
  }
  
}

customElements.define('exercises-page', ExercisePage);
