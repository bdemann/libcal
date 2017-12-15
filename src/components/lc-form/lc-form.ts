class LCForm extends Polymer.Element {
	static get is(){ return 'lc-form'; }

	constructor () {
		super();
		this.attachShadow({mode: 'open'});
		this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	}

	save (event) {
		const title = "";
		const day = "";
		const startHour = "";
		const startMin = "";
		const endHour = "";
		const endMin = "";
		const notes = "";
		const mode = "";
		const info = {
			title: title,
			day: day,
			startHour: startHour,
			startMin: startMin,
			endHour: endHour,
			endMin: endMin,
			notes: notes,
			mode: mode
		};

		this.action = {
			type: 'addEvent',
			day: day,
			startHour: startHour,
			info: info
		};

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

	stateChange (event) {
		this.currentDay = event.detail.state.currentDay;
		this.currentHour = event.detail.state.currentHour;

		const stdhour = (this.currentHour + 7) % 12
		this.startHour = JSON.stringify(stdhour);
		this.startMin = '00';
		this.endHour = JSON.stringify(stdhour + 1);
		this.endMin = '00';

		this.currentDayIndex = this.days.findIndex((element)=>{
			return element.toLowerCase() == this.currentDay;
		});
	}

}

window.customElements.define(LCForm.is, LCForm)
