import { LitElement, html, css } from 'lit';
import '../../components/header/header';
import '../../components/exercise-element/exercise-element';

class ExercisePage extends LitElement {
    static styles = css`
  `;
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <header-gym></header-gym>
      <div class="col-lg-5 col-md-6">
        <div class="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
          <div class="heading_container">
            <h2>
              Add Exercise
            </h2>
          </div>
          <exercise-element></exercise-element>
        </div>
    </div>
    `;
  }
  
}

customElements.define('exercises-page', ExercisePage);
