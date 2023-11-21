import { LitElement, html, css } from 'lit-element';
import { stylesCommon } from '../../../assets/css/common-elements/common-element.js'

class InputGym extends LitElement {
    static styles = stylesCommon;
    static get properties() {
        return {
            id: { type: String },
            name: { type: String },
            class: { type: String },
            placeholder: { type: String },
            labelText: { type: String },
        };
    }
    constructor() {
        super();
        this.id = "input";
        this.class = "input-type";
        this.name = "input";
        this.placeholder = "input"
        this.labelText = "input";
    }

    render() {
        return html`
        <div>
            <label for="${this.name}" class="label-type">${this.labelText}</label>
        </div>
        <input type="text" id="${this.id}" class="${this.class}" name="${this.name}" placeholder="${this.placeholder}" />
    `;
    }
}

customElements.define('input-gym', InputGym);
