class LCForm extends Polymer.Element {
	static get is(){ return 'lc-form'; }

	constructor () {
		super();
		this.attachShadow({mode: 'open'});
	}

	save (event) {
		const info = { day: "Monday", time: "1:00pm"}
		const saveEvent = new CustomEvent('event-saved', { detail: this.color });
		this.dispatchEvent(saveEvent);
	}

	cancel (event) {
		const saveEvent = new CustomEvent('event-canceled', { detail: this.color });
		this.dispatchEvent(saveEvent);
	}

	setMode (event) {
		console.log('here is the detail from the event');
		console.log(event.detail);
	}

}

window.customElements.define(LCForm.is, LCForm)
