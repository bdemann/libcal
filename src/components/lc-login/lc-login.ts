class LCLogin extends Polymer.Element {
	static get is(){ return 'lc-login'; }

	constructor () {
		super();
		console.log('lc-login was created');
	}

}

window.customElements.define(LCLogin.is, LCLogin)
