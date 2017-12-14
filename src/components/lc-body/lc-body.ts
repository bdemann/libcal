class LCBody extends Polymer.Element {
	static get is(){ return 'lc-body'; }

	constructor() {
		super();
		this.colors = ['#a9c66d', '#ffc74f', '#4286f4', '#fc5358'];
		this.attachShadow({mode: 'open'});
		this.hideForm = true;
	}

	addTime (event) {
		// TODO At this point we need to figure out what day was clicked and where it was clicked. How do we do that?
		const cell = event.path[0];
		if(cell.className.includes('block')){
			this.hideForm = false;
			this.action = {
				type: 'cellSelected',
				selectedCell: event.path[0]
			};
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
