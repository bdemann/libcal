import {RootReducer} from '../../redux/redux';
class LCApp extends Polymer.Element {
	static get is(){ return 'lc-app'; }

	constructor () {
		super();
		this.selectedPage = 1;
		this.attachShadow({mode: 'open'});
		this.rootReducer = RootReducer;
	}

	login(event) {
		this.selectedPage = 2;
		setTimeout(()=>{
			this.selectedPage = 1;
		}, 1000);
	}

}

window.customElements.define(LCApp.is, LCApp)
