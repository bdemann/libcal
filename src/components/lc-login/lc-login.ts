class LCLogin extends Polymer.Element {
	static get is(){ return 'lc-login'; }

	constructor () {
		super();
		console.log('lc-login was created');
	}

	login() {
		const event = new CustomEvent('login');
		this.dispatchEvent(event);
	}

}

window.customElements.define(LCLogin.is, LCLogin)
