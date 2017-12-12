class LCBody extends Polymer.Element {
	static get is(){ return 'lc-body'; }

	constructor() {
		super();
		this.color = 'green';
		this.attachShadow({mode: 'open'});
	}

	connectedCallback () {
		setTimeout(()=> {
			this.shadowRoot.querySelector('#p1').style.color = this.color;
		});
	}

	addTime (event) {
		// TODO At this point we need to figure out what day was clicked and where it was clicked. How do we do that?
		// alert ("Adding Time not Implemented");

		const cell = event.path[0];

		console.log(event.path[0]);
		console.log(event);
		console.dir(event);
		event.path[0].style.background = this.color;
	}

	setMode (event) {
		const button = event.path[0].id;
		const icons = this.shadowRoot.querySelectorAll('.calIcon');
		var i = 0;
		for(i = 0; i < icons.length; i++){
			icons[i].style.color = 'black';
		}
		if (button == 'p1') {
			this.color = '#899348';
		} else if (button == 'p2'){
			this.color = '#ffc74f'
		} else if (button == 'course') {
			this.color = '#4286f4'
		} else if (button == 'other') {
			this.color = '#fc5358'
		}
		this.shadowRoot.querySelector('#' + button).style.color = this.color;
	}
}

window.customElements.define(LCBody.is, LCBody)
