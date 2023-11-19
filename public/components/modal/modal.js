import { LitElement, html, css } from 'lit';

class Modal extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      message: { type: String },
      onClose: { type: Function }
    };
  }

  static styles = css`
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Asegúrate de que sea mayor que otros elementos en la página */
  }
  
  .modal {
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    max-width: 500px;
    width: 90%;
    box-sizing: border-box;
  }
  
  .modal-header {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .modal-body {
    padding-bottom: 20px;
  }
  
  .modal-footer {
    text-align: center;
  }
  .modal-footer button{
    padding: 10px 65px;
    outline: none;
    border: none;
    color: #ffffff;
    background: #ff2953;
    margin: 45px 0 0 auto;
    text-transform: uppercase;
  }
  .close-button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 2.5em;
  }
  
  `;

  render() {
    return html`
    <div class="modal-backdrop">
        <div class="modal">
        <div class="modal-header">
            <span class="close-button" @click="${this.onClose}">&times;</span>
            <h2>${this.title}</h2>
        </div>
        <div class="modal-body">
            <p>${this.message}</p>
        </div>
        <div class="modal-footer d-flex">
            <button @click="${this.onClose}">Close</button>
        </div>
        </div>
    </div>
  
    `;
  }
}

customElements.define('gym-modal', Modal);
