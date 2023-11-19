import { LitElement, html, css } from 'lit';
import {db} from '../../../../firebase.js'; 
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import '../../spinner/spinner.js'; 
import '../../modal/modal.js'; 

class ModifyExercise extends LitElement {
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
        this.exercises = [];  // Inicializar exercises como un array vacío
        this.exerciseIdSelected = "";
    }
    connectedCallback() {
        super.connectedCallback();
        this.loadExercises();  // Llamar a loadExercises cuando el componente se conecta
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
  async loadExercises() {
    this.loading = true;
    try {
      const querySnapshot = await getDocs(collection(db, "exercises"));
      this.exercises = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error loading exercises: ", error);
      this.modalMessage = `Error loading exercises: ${error.message}`;
      this.showModal = true;
    } finally {
      this.loading = false;
    }
  }
  handleExerciseSelection(event) {
    console.log(event);
    const selectedExerciseId = event.target.value;
    const selectedExercise = this.exercises.find(exercise => exercise.id === selectedExerciseId);
  
    if (selectedExercise) {
      this.exerciseIdSelected = selectedExerciseId;
      this.querySelector('#exerciseName').value = selectedExercise.name;
      this.querySelector('#description').value = selectedExercise.description;
      this.querySelector('#type').value = selectedExercise.type;
      this.querySelector('#muscleGroup').value = selectedExercise.muscleGroup;
    }
  }
  
  handleSubmit(event) {
    event.preventDefault(); 
    this.loading=true;
    const exerciseData = {
      name: this.querySelector('#exerciseName').value,
      description: this.querySelector('#description').value,
      type: this.querySelector('#type').value,
      muscleGroup: this.querySelector('#muscleGroup').value
    };
    this.updateExerciseInFirebase(exerciseData);

  }
  async updateExerciseInFirebase(exerciseData) {
    try {

      const exerciseRef = doc(db, "exercises", this.exerciseIdSelected);
      await updateDoc(exerciseRef, exerciseData);
      this.modalMessage = 'Exercise updated successfully!';
      this.showModal = true;
    } catch (error) {
      this.modalMessage = `Error updating exercise: ${error.message}`;
      this.showModal = true;
    } finally {
      this.loading = false;
    }
  }
  render(){
    return html `
    ${this.loading ? html`<gym-spinner></gym-spinner>` : ''}
    ${this.showModal ? html`<gym-modal title="Sport Exercise" .message=${this.modalMessage} .onClose=${() => this.showModal = false}></gym-modal>` : ''}
    <select @change="${this.handleExerciseSelection}">
        <option value="" selected>Sport exercise</option>
      ${this.exercises.map(exercise => html`<option value="${exercise.id}">${exercise.name}</option>`)}
    </select>
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
          <button type="submit">Update exercise</button>
        </div>
  </form>
    `
  }
}

customElements.define('exercise-modify', ModifyExercise);
