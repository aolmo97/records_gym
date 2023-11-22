import { LitElement, html, css } from 'lit';
import { db } from '../../../../firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import '../../spinner/spinner.js';
import '../../modal/modal.js';
import '../../form-elements/input/input.js'
import '../../form-elements/select/select.js'

class AddTraining extends LitElement {
  static get properties() {
    return {
      loading: { type: Boolean },
      showModal: { type: Boolean },
      modalMessage: { type: String },
    };
  }

  constructor() {
    super();
    this.loading = false;
    this.showModal = false;
    this.modalMessage = '';
  }
  createRenderRoot() {
    return this;
  }
  static styles = css`
  `;
  handleSubmit(event) {
    event.preventDefault();
    this.loading = true;
    const trainingData = {
      name: this.querySelector('#trainingName').value,
      description: this.querySelector('#description').value,
      type: this.querySelector('#type').value,
      muscleGroup: this.querySelector('#muscleGroup').value
    };
    console.log(trainingData);
    this.addTrainingToFirebase(trainingData);

  }
  // Método para añadir datos a Firebase Firestore
  async addTrainingToFirebase(trainingData) {
    try {
      const docRef = await addDoc(collection(db, "training"), trainingData);
      this.modalMessage = 'Training added successfully!';
      this.showModal = true;
    } catch (e) {
      this.modalMessage = `Error adding training: ${e.message}`;
      this.showModal = true;
    } finally {
      this.loading = false;
    }
  }
  render() {
    return html`
    ${this.loading ? html`<gym-spinner></gym-spinner>` : ''}
    ${this.showModal ? html`<gym-modal title="Sport Training" .message=${this.modalMessage} .onClose=${() => this.showModal = false}></gym-modal>` : ''}
    <form @submit="${this.handleSubmit}">
        <div>
          <input-gym id="trainingName" name="trainingName" placeholder="Training name" labelText="Training name"></input-gym>
        </div>
        <div>
          <input type="text" id="description" name="description" placeHolder="Description" class="message-box">
        </div>
        <div>
            <select-days></select-days>
        </div>
        <div>
          <select id="muscleGroup" name="muscleGroup" class="select-type">
            <option value="core">Núcleo/Core</option>
            <option value="arms">Brazos</option>
            <option value="back">Espalda</option>
            <option value="chest">Pecho</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">triceps</option>
            <option value="shoulders">Hombros</option>
            <option value="legs">Piernas</option>
            <option value="glutes">Glúteos</option>
            <option value="calves">Pantorrillas</option>
            <option value="abs">Abdominales</option>
          </select>
        </div>
        <div class="d-flex">
          <button type="submit">Add training</button>
        </div>
  </form>
    `
  }
}

customElements.define('training-add', AddTraining);
