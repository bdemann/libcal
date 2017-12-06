class LCApp extends Polymer.Element {
	static get is(){ return 'lc-app'; }

	eventHandler(e) {
		console.log('The time is: ' + e.detail);
	}

	constructor () {
		super();
		console.log('lc-app was created');
		// this.addEventListener('scheduleEdit', function (e) { console.log('its actually this function!') }, false);
		this.addEventListener('scheduleEdit', e => {console.log('its working')});
	}

	// created: function() {
	// 	console.log('lc-app was created');
	// 	elem.addEventListener('scheduleEdit', function (e) { console.log('its actually this function!') }, false);
	// }
}

window.customElements.define(LCApp.is, LCApp)

// look up life cycle methodes\
//constructor or connected callback
//
