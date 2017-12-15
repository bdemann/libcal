class LCForm extends Polymer.Element {
	static get is(){ return 'lc-form'; }

	constructor () {
		super();
		this.attachShadow({mode: 'open'});
		this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		this.times = ['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM','12:00 AM']
	}

	save (event) {
		const title = this.shadowRoot.querySelector('#titleInput').value;
		const day = this.shadowRoot.querySelector('#daylist').selected;
		const startTime = this.shadowRoot.querySelector('#startTime').selected;
		const endTime = this.shadowRoot.querySelector('#endTime').selected;
		const mode = this.shadowRoot.querySelector('#icons').selected;
		const notes = this.shadowRoot.querySelector('#notesInput').value;
		const info = {
			title: title,
			day: day,
			startTime: startTime,
			endTime: endTime,
			notes: notes,
			mode: mode
		};
		console.log(info);

		this.action = {
			type: 'addEvent',
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

		this.selectedStartTime = this.currentHour;
		this.selectedEndTime = (this.currentHour + 1)%18;

		const stdhour = (this.currentHour + 7) % 12
		this.startTime = JSON.stringify(stdhour);
		this.endHour = JSON.stringify(stdhour + 1);

		this.currentDayIndex = this.days.findIndex((element)=>{
			return element.toLowerCase() == this.currentDay;
		});
	}

}

window.customElements.define(LCForm.is, LCForm)
