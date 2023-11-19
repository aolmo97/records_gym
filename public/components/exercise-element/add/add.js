import { LitElement, html, css } from 'lit';
import {db} from '../../../../firebase.js'; 
import { collection, addDoc } from 'firebase/firestore';
import '../../spinner/spinner.js'; 
import '../../modal/modal.js'; 

class AddExercise extends LitElement {
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
      .select-type{
        width: 100%;
        border: none;
        background-color: $white;
        outline: none;
        color: $black;
        margin-top: 25px;
        padding: 12px;
      }
  `;
  handleSubmit(event) {
    event.preventDefault(); 
    this.loading=true;
    const exerciseData = {
      name: this.querySelector('#exerciseName').value,
      description: this.querySelector('#description').value,
      type: this.querySelector('#type').value,
      muscleGroup: this.querySelector('#muscleGroup').value
    };
    console.log(exerciseData);
    this.addExerciseToFirebase(exerciseData);

  }
  // Método para añadir datos a Firebase Firestore
  async addExerciseToFirebase(exerciseData) {
    try {
      const docRef = await addDoc(collection(db, "exercises"), exerciseData);
      this.modalMessage = 'Exercise added successfully!';
      this.showModal = true;
    } catch (e) {
      this.modalMessage = `Error adding exercise: ${e.message}`;
      this.showModal = true;
    } finally {
      this.loading = false; 
    }
  }
  render(){
    return html `
    ${this.loading ? html`<gym-spinner></gym-spinner>` : ''}
    ${this.showModal ? html`<gym-modal title="Sport Exercise" .message=${this.modalMessage} .onClose=${() => this.showModal = false}></gym-modal>` : ''}
    <form @submit="${this.handleSubmit}">
        <div>
          <input type="text" id="exerciseName" name="exerciseName" placeHolder="Exercise name">
        </div>
        <div>
          <input type="text" id="description" name="description" placeHolder="Description" class="message-box">
        </div>
        <div>
          <select id="type" name="type" class="select-type">
            <option value="cardiovascular">Cardiovascular</option>
            <option value="strength">Fuerza</option>
          </select>
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
          <button type="submit">Add exercise</button>
        </div>
  </form>
    `
  }
}

customElements.define('exercise-add', AddExercise);
