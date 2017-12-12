class LCBody extends Polymer.Element {
	static get is(){ return 'lc-body'; }

	constructor() {
		super();
		this.color = '#A9C66D';
		this.attachShadow({mode: 'open'});
	}

	connectedCallback () {
		setTimeout(()=> {
			this.shadowRoot.querySelector('#p1').style.backgroundColor = this.color;
		});
	}

	addTime (event) {
		// TODO At this point we need to figure out what day was clicked and where it was clicked. How do we do that?
		// alert ("Adding Time not Implemented");

		const cell = event.path[0];

		console.log(event.path[0]);
		console.log(event);
		console.dir(event);
		console.log("this is the class of the clicked thing");
		console.log(cell.className)
		if(cell.className.includes('block')){
			event.path[0].style.background = this.color;
		}
	}

	setMode (event) {
		const icons = this.shadowRoot.querySelectorAll('.calIcon');
		var i = 0;
		for(i = 0; i < icons.length; i++){
			icons[i].style.backgroundColor = 'white';
		}
		var hitButton = false;
		i = 0;
		while (!hitButton){
			var button = event.path[i].id;
			if (button == 'p1') {
				this.color = '#A9C66D';
			} else if (button == 'p2'){
				this.color = '#ffc74f';
			} else if (button == 'course') {
				this.color = '#4286f4';
			} else if (button == 'other') {
				this.color = '#fc5358';
			} else {
				i++;
				hitButton = false;
				continue;
			}
			hitButton = true;
		}
		this.shadowRoot.querySelector('#' + button).style.backgroundColor = this.color;
	}
}

window.customElements.define(LCBody.is, LCBody)
