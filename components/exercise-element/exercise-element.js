import { LitElement, html, css } from 'lit';
import {db} from '../../../firebase.js'; // Asegúrate de que la ruta es correcta
import { collection, addDoc } from 'firebase/firestore';

class Exercise extends LitElement {
    createRenderRoot() {
        return this;
      }
    static styles = css`

  `;
  handleSubmit(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log("entra");
    const exerciseData = {
      name: this.querySelector('#exerciseName').value,
      description: this.querySelector('#description').value,
      type: this.querySelector('#type').value,
      muscleGroup: this.querySelector('#muscleGroup').value
    };
    this.addExerciseToFirebase(exerciseData);

  }
  // Método para añadir datos a Firebase Firestore
  async addExerciseToFirebase(exerciseData) {
    try {
      console.log(exerciseData);
      const docRef = await addDoc(collection(db, "exercises"), exerciseData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  render(){
    return html `
    <form @submit="${this.handleSubmit}">
      <label for="exerciseName">Exercise name:</label>
        <input type="text" id="exerciseName" name="exerciseName">
      
        <label for="description">Description:</label>
        <textarea id="description" name="description"></textarea>
      
        <label for="type">Exercise type:</label>
        <select id="type" name="type">
          <option value="cardiovascular">Cardiovascular</option>
          <option value="strength">Fuerza</option>
          <!-- Otras opciones... -->
        </select>
        <label for="muscleGroup">Muscle Group:</label>
        <select id="muscleGroup" name="muscleGroup">
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

        <button type="submit">Add exercise</button>
  </form>
    `
  }
}

customElements.define('exercise-element', Exercise);
