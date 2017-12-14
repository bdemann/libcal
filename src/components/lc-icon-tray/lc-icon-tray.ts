class LCIconTray extends Polymer.Element {
	static get is(){ return 'lc-icon-tray'; }

	getP1Style(selected) {
		console.log("get p1 style")
		return selected === 0 ? 'background-color: #A9C66D' : 'background-color: white';
	}

	getP2Style() {
		console.log(this.selected);
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
				computed: 'getP2Style(selected)'
			},
			otherStyle: {
				computed: 'getP2Style(selected)'
			}
		}
	}

	constructor () {
		super();
		this.color = '#A9C66D';
		this.attachShadow({mode: 'open'});
		this.firstColored = true;
		this.secondColored = false;
	}

	connectedCallback () {
		// setTimeout(()=> {
		// 	this.shadowRoot.querySelector('#p1').style.backgroundColor = this.color;
		// });
	}

	setMode (event) {

		// var hitButton = false;
		// i = 0;
		// while (!hitButton){
		// 	var button = event.path[i].id;
		// 	if (button == 'p1') {
		// 		this.color = '#A9C66D';
		// 	} else if (button == 'p2'){
		// 		this.color = '#ffc74f';
		// 	} else if (button == 'course') {
		// 		this.color = '#4286f4';
		// 	} else if (button == 'other') {
		// 		this.color = '#fc5358';
		// 	} else {
		// 		i++;
		// 		hitButton = false;
		// 		continue;
		// 	}
		// 	hitButton = true;
		// }
		// this.shadowRoot.querySelector('#' + button).style.backgroundColor = this.color;
        //
		// const setModeEvent = new CustomEvent('set-mode', { detail: this.color });
		// this.dispatchEvent(setModeEvent);
	}

}

window.customElements.define(LCIconTray.is, LCIconTray)
