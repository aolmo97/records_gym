import { LitElement, html, css } from 'lit';
import '../../../components/header/header';
import '../../../components/exercise-element/delete/delete';

class DeleteExercisePage extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
  `;
  createRenderRoot() {
    return this;
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
               <h2>Delete Exercise</h2>
              </div>
              <exercise-delete></exercise-delete>
              </div>
            </div> 
        </div>
      </div>
    </section>
    `;
  }

}
customElements.define('delete-exercises-page', DeleteExercisePage);
