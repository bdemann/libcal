class LCLogin extends Polymer.Element {
	static get is(){ return 'lc-login'; }

	constructor () {
		super();
	}

	login() {
		const event = new CustomEvent('login');
		this.dispatchEvent(event);
	}

}

window.customElements.define(LCLogin.is, LCLogin)
