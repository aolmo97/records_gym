import { LitElement, html, css } from 'lit';
import '../../../components/header/header';
import '../../../components/training-element/add/add';

class AddTrainingPage extends LitElement {
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
               <h2>Add Training</h2>
              </div>
                <training-add></training-add>
              </div>
            </div> 
        </div>
      </div>
    </section>
    `;
  }

}

customElements.define('add-training-page', AddTrainingPage);
