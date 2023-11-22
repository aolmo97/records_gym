import { LitElement, html, css } from 'lit-element';
import { stylesCommon } from '../../../assets/css/common-elements/common-element.js'

class SelectDays extends LitElement {
    static get properties() {
        return {
            days: { type: Array }
        };
    }
    static styles = stylesCommon;

    constructor() {
        super();
        this.days = [1, 2, 3, 4, 5, 6];
        this.daySelected = 1;
    }
    handleDaysSelection(event) {
        const days = event.target.value;
        console.log(days);
    }
    render() {
        return html`
        <div>
            <label for="days" class="label-type">¿Cuántos días?</label>
        </div>
      <select id="days" @change="${this.handleDaysSelection}" class="select-type">
        ${this.days.map(day => html`<option value="${day}">${day} días</option>`)}
      </select>
    `;
    }

    selectDay(e) {
        this.daySelected = e.target.value;
    }
}

customElements.define('select-days', SelectDays);
