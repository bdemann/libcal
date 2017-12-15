class LCBody extends Polymer.Element {
	static get is(){ return 'lc-body'; }

	constructor() {
		super();
		this.colors = ['#a9c66d', '#ffc74f', '#4286f4', '#fc5358'];
		this.attachShadow({mode: 'open'});
		this.hideForm = true;
		this.mondayEvents = [];
		this.tuesdayEvents = [];
		this.wednesdayEvents = [];
		this.thursdayEvents = [];
		this.fridayEvents = [];
		this.saturdayEvents = [];
	}

	addTime (event) {
		// TODO At this point we need to figure out what day was clicked and where it was clicked. How do we do that?
		const cell = event.path[0];
		if(cell.className.includes('block')){
			this.hideForm = false;
			console.log(event.path);
			this.action = {
				type: 'cellSelected',
				currentDay: event.path[3].id,
				currentHour: this.hourToInt(event.path[0].id) - 1
			};
			console.log(this.action);
		}
	}

	hourToInt (hour) {
		switch (hour) {
			case 'one':
				return 1;
			case 'two':
				return 2;
			case 'three':
				return 3;
			case 'four':
				return 4;
			case 'five':
				return 5;
			case 'four':
				return 6;
			case 'seven':
				return 7:
			case 'eight':
				return 8;
			case 'nine':
				return 9;
			case 'ten':
				return 10;
			case 'eleven':
				return 11;
			case 'twelve':
				return 12;
			case 'thirteen':
				return 13;
			case 'fourteen':
				return 14;
			case 'fifteen':
				return 15;
			case 'sixteen':
				return 16;
			case 'seventeen':
				return 17;
			default:
				return 18;
		}
	}

	saveEvent (event) {
		this.hideForm = true;
		// this.selectedCell.style.backgroundColor = this.colors[this.selectedMode];
	}

	cancelEvent (event) {
		this.hideForm = true;
	}

	updateMode (event) {
		this.color = event.detail;
	}

	renderEvent(event) {
		console.log('this is the day from the event');
		console.log(event);
		switch (event.day) {
			case 0:
				this.mondayEvents = [...this.mondayEvents, event];
				break;
			case 1:
				this.tuesdayEvents = [...this.tuesdayEvents, event];
				console.log('here are the tuesdayEvents');
				console.log(this.tuesdayEvents);
				break;
			case 2:
				this.wednesdayEvents = [...this.wednesdayEvents, event];
				break;
			case 3:
				this.thursdayEvents = [...this.thursdayEvents, event];
				break;
			case 4:
				this.fridayEvents = [...this.fridayEvents, event];
				break;
			case 5:
				this.saturdayEvents = [...this.saturdayEvents, event];
				break;
			default:
				console.log('We didn\'t register this event with any day');
				break;
		}
	}

	stateChange (event) {
		this.selectedMode = event.detail.state.selectedMode;
		this.events = event.detail.state.events;
		this.events.forEach((element)=> {
			this.renderEvent(element);
		});
	}
}

window.customElements.define(LCBody.is, LCBody)
