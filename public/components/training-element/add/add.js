import { LitElement, html, css } from 'lit';
import { db } from '../../../../firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import '../../spinner/spinner.js';
import '../../modal/modal.js';
import '../../form-elements/input/input.js'
import '../../form-elements/select/select.js'
import { getExercises } from '../../../services/firebase.js'

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
  async connectedCallback() {
    super.connectedCallback();
    const querySnapshot = await getExercises();
    this.exercises = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    this.updateOptions();
  }
  updateOptions() {
    const select = this.querySelector('#muscleGroup');
    if (select && this.exercises) {
      this.exercises.map(exercise => {
        const option = document.createElement('option');
        option.value = exercise.id;
        option.textContent = exercise.name;
        select.appendChild(option);
      });
    }
  }

  handleExerciseSelection(event) {
    const selectedExerciseId = event.target.value;
    const selectedExercise = this.exercises.find(exercise => exercise.id === selectedExerciseId);

    if (selectedExercise) {
      this.querySelector('#exerciseName').value = selectedExercise.name;
      this.querySelector('#description').value = selectedExercise.description;
      this.querySelector('#type').value = selectedExercise.type;
      this.querySelector('#muscleGroup').value = selectedExercise.muscleGroup;
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
          <input-gym id="description" name="description" placeholder="Description" labelText="Description" class="message-box"></input-gym>
        </div>
        <div>
            <select-days></select-days>
        </div>
        <div>
          <select @change="${this.handleExerciseSelection}" id="muscleGroup" name="muscleGroup" class="select-type">
            <option value="" selected>Sport exercise</option>
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
