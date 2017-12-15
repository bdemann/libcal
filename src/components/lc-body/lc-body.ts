class LCBody extends Polymer.Element {
	static get is(){ return 'lc-body'; }

	constructor() {
		super();
		this.colors = ['#a9c66d', '#ffc74f', '#4286f4', '#fc5358'];
		this.attachShadow({mode: 'open'});
		this.hideForm = true;
		this.calendar = []
	}

	addTime (event) {
		// TODO At this point we need to figure out what day was clicked and where it was clicked. How do we do that?
		const cell = event.path[0];
		if(cell.className.includes('block')){
			this.hideForm = false;
			console.log(event.path);
			this.action = {
				type: 'cellSelected',
				selectedCell: event.path[0],
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
			default:
				return 11;
		}
	}

	saveEvent (event) {
		this.hideForm = true;
		this.selectedCell.style.backgroundColor = this.colors[this.selectedMode];
	}

	cancelEvent (event) {
		this.hideForm = true;
	}

	updateMode (event) {
		this.color = event.detail;
	}

	stateChange (event) {
		this.selectedMode = event.detail.state.selectedMode;
		this.selectedCell = event.detail.state.selectedCell;
	}
}

window.customElements.define(LCBody.is, LCBody)
