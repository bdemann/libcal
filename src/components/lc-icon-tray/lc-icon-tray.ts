class LCIconTray extends Polymer.Element {
	static get is(){ return 'lc-icon-tray'; }

	getP1Style() {
		return this.selected === 0 ? 'background-color: #A9C66D' : 'background-color: white';
	}

	getP2Style() {
		return this.selected === 1 ? 'background-color: #ffc74f' : 'background-color: white';
	}

	getCourseStyle() {
		return this.selected === 2 ? 'background-color: #4286f4' : 'background-color: white';
	}

	getOtherStyle() {
		return this.selected === 3 ? 'background-color: #fc5358' : 'background-color: white';
	}

	static get properties() {
		return {
			p1Style: {
				computed: 'getP1Style(selected)'
			},
			p2Style: {
				computed: 'getP2Style(selected)'
			},
			courseStyle: {
				computed: 'getCourseStyle(selected)'
			},
			otherStyle: {
				computed: 'getOtherStyle(selected)'
			}
		}
	}

	constructor () {
		super();
		this.selected = 0;
		this.color = '#A9C66D';
		this.attachShadow({mode: 'open'});
	}

	connectedCallback () {
		// setTimeout(()=> {
		// 	this.shadowRoot.querySelector('#p1').style.backgroundColor = this.color;
		// });
	}

	setMode (event) {
		var hitButton = false;
		var i = 0;
		while (!hitButton){
			var button = event.path[i].id;
			if (button == 'p1') {
				this.selected = 0;
			} else if (button == 'p2'){
				this.selected = 1;
			} else if (button == 'course') {
				this.selected = 2;
			} else if (button == 'other') {
				this.selected = 3;
			} else {
				i++;
				hitButton = false;
				continue;
			}
			hitButton = true;
		}
		
		const setModeEvent = new CustomEvent('set-mode', { detail: this.color });
		this.dispatchEvent(setModeEvent);
	}

}

window.customElements.define(LCIconTray.is, LCIconTray)
