import { LitElement, html, css } from "lit";

class Spinner extends LitElement {
  static styles = css`
    .spinner-backdrop {
      position: fixed; /* Posición fija en toda la pantalla */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
      display: flex;
      justify-content: center; /* Centrado horizontal */
      align-items: center; /* Centrado vertical */
      z-index: 1000; /* Asegura que esté sobre otros elementos */
    }

    .spinner {
      border: 5px solid rgba(255, 255, 255, 0.3); /* Color del borde exterior */
      border-top: 5px solid #555; /* Color del borde superior */
      border-radius: 50%; /* Hace que sea circular */
      width: 50px; /* Tamaño del spinner */
      height: 50px;
      animation: spin 1s linear infinite; /* Animación de giro */
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  render() {
    return html`
    <div class="spinner-backdrop">
      <div class="spinner"></div>
    </div>`;
  }
}

customElements.define("gym-spinner", Spinner);
