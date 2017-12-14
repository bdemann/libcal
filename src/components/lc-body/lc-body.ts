class LCBody extends Polymer.Element {
	static get is(){ return 'lc-body'; }

	constructor() {
		super();
		this.selectedIndex = 0;
		this.color = '#A9C66D';
		this.attachShadow({mode: 'open'});
		this.hideForm = true;
	}

	addTime (event) {
		// TODO At this point we need to figure out what day was clicked and where it was clicked. How do we do that?
		const cell = event.path[0];
		if(cell.className.includes('block')){
			this.hideForm = false;
			event.path[0].style.background = this.color;
		}
	}

	saveEvent (event) {
		this.hideForm = true;
	}

	cancelEvent (event) {
		this.hideForm = true;
	}

	updateMode (event) {
		this.color = event.detail;
	}
}

window.customElements.define(LCBody.is, LCBody)
