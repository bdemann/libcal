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
		this.attachShadow({mode: 'open'});
	}

	login(event) {
		console.log('we are getting into the thing');
		this.shadowRoot.querySelector('#loading').style.visibility = "visible";
		var shad = this.shadowRoot;
		setTimeout(function(){
			console.log("We are starting this thing");
			shad.querySelector('#login').style.display = "none";
			shad.querySelector('#app').style.display = "block";
			shad.querySelector('#loading').style.visibility = "hidden";
		}, 1000);
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
