class LCApp extends Polymer.Element {
	static get is(){ return 'lc-app'; }

	constructor () {
		super();
		this.selectedPage = 1;
		console.log('lc-app was created');
		this.attachShadow({mode: 'open'});
	}

	login(event) {
		this.selectedPage = 2;
		setTimeout(()=>{
			this.selectedPage = 1;
		}, 1000);
	}

}

window.customElements.define(LCApp.is, LCApp)
